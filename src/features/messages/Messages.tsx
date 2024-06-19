import { Box, Grid, GridItem, Hide } from "@chakra-ui/react";
import Conversations from "./components/Conversations";
import ConversationSearchBox from "./components/ConversationSearchBox";

import { useContext, useState } from "react";
import EmptyMessageBox from "./components/EmptyMessageBox";
import MessageBox from "./components/MessageBox";
import ReplyBox from "./components/ReplyBox";
import * as io from "socket.io-client";
import { ServerUrl } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
const socket = io.connect(ServerUrl);
const Messages = () => {
  let { currentUser } = useContext(AuthContext);
  let [conversationId, setConversationId] = useState(0);
  let [query, setQuery] = useState<any>(null);
  const handleConversationClick = (id: any) => {
    setConversationId(id);
  };
  const handleSearch = (e: any) => {
    setQuery(e);
  };
  return (
    <Box p={3}>
      {/* <Text fontWeight={"semibold"}>Messages</Text> */}
      <Grid
        my={3}
        columnGap={5}
        templateColumns="repeat(3, 1fr)"
        minH={"100vh"}
      >
        <Hide below={"md"}>
          <GridItem height={"100%"} colSpan={{ base: 0, md: 1, lg: 1 }}>
            <Box overflowY={"scroll"} height={"70%"} bg={"#fff"}>
              <ConversationSearchBox onSearch={handleSearch} />
              <Conversations
                // data={conversations}
                searchQuery={query}
                handleConversationClick={handleConversationClick}
                conversationId={conversationId}
              />
            </Box>
          </GridItem>
        </Hide>

        <GridItem colSpan={{ base: 3, md: 2, lg: 2 }}>
          <Box height={"55%"}>
            {conversationId == 0 ? (
              <EmptyMessageBox />
            ) : (
              <MessageBox conversationId={conversationId} socket={socket} />
            )}
            <Box
              mt={0.5}
              borderTop={2}
              px={5}
              py={2}
              bg={"#fff"}
              height={"100px"}
            >
              <ReplyBox
                conversationId={conversationId}
                user={currentUser}
                socket={socket}
              />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Messages;
