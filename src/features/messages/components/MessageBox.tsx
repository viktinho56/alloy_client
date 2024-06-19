import { Box, Image, Text } from "@chakra-ui/react";

import { useContext, useEffect, useRef, useState } from "react";
import apiClient from "../../../services/api-client";

import UserResponseBox from "./UserResponseBox";

import LeftResponseBox from "./LeftResponseBox";
import { AuthContext } from "../../../context/AuthContext";

const MessageBox = ({ conversationId, socket }: any) => {
  let { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState<any>([]);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [typingDisplay, setTypingDisplay] = useState<string>("none");
  const [typingStatus, setTypingStatus] = useState("");

  useEffect(() => {
    socket.on("typingResponse", (data: any) => {
      console.log(data.socketID, conversationId);
      if (data.socketID == conversationId) {
        console.log(data);
        setTypingStatus(data.message);
        setTypingDisplay("block");
        lastMessageRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setTypingDisplay("none");
      }
    });
    socket.on("messageResponse", (data: any) => {
      console.log("new message received");
      if (data.socketID == conversationId) {
        setTypingStatus("");
        setTypingDisplay("none");
        setMessages([...messages, data]);
        lastMessageRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }, [socket]);

  useEffect(() => {
    setTypingDisplay("none");
    async function loadData() {
      let { response, error, isLoading } = await GetMessages();
      console.log(error, isLoading);
      setMessages(response);
    }
    loadData();
  }, [conversationId]);
  const GetMessages = async () => {
    let response = null;
    let error = null;
    let isLoading = true;
    await apiClient
      .get(`/messages/${conversationId}`)
      .then((res) => {
        response = res.data;
        isLoading = false;
      })
      .catch((err) => {
        error = err.response.data;
        console.log(err);
        isLoading = false;
      });
    return { response, error, isLoading };
  };
  return (
    <Box px={5} py={10} bg={"#fff"} height={"400px"}>
      <Box overflowY={"scroll"} maxH={"100%"}>
        {messages &&
          messages.length > 0 &&
          messages.map((d: any, i: number) =>
            d.userId == currentUser?.userId ? (
              <UserResponseBox d={d} key={i} />
            ) : (
              <LeftResponseBox d={d} key={i} />
            )
          )}
        <Box display={typingDisplay} p={5} ref={lastMessageRef}>
          <Image
            w={"100px"}
            src="https://www.someblogsite.com/images/life/typing-bubble.gif"
          />
          <Text color={"yellow.600"} fontSize={"xs"}>
            {typingStatus}
          </Text>
        </Box>
        {messages && messages.length == 0 && <Text>No</Text>}
      </Box>
    </Box>
  );
};

export default MessageBox;
