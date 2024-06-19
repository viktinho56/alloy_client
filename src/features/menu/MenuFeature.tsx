import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
//import ExportMenu from "./components/ExportMenu";
import UserSearchBox from "./components/UserSearchBox";
//import UsersTable from "./components/UsersTable";

import UsersSkeleton from "./components/UsersSkeleton";
import HasError from "../../components/common/HasError";
import { useEffect, useState } from "react";
import { User } from "../../types/user-type";
// import { FilterIcon } from "../../components/icons";
import Pagination from "../../components/common/Pagination";
import { UserProfileCard } from "./components/UserProfileCard";
//import DisplaySelector from "../../components/common/DisplaySelector";

import UserProfileSkeleton from "./components/UserProfileSkeleton";
import EmptyRecord from "../../components/common/EmptyRecord";
import useMenu from "../../hooks/useMenu";
import usePaginatedMenu from "./hooks/usePaginatedMenu";
import { NewMenuModal } from "./components/NewMenuModal";
import MenuTable from "./components/MenuTable";

const MenuFeature = () => {
  let userProperties = ["S/N", "Name", "start", "stop", "status", "Actions"];
  // let exportProperties = [
  //   "S/N",
  //   "Name",
  //   "Service Number",
  //   // "No of Posts",
  //   "status",
  //   "Joined Date",
  // ];
  const [userQuery, setUserQuery] = useState<any>({ start: 0, end: 5 });
  let { data: AllUsers } = useMenu();

  let { data, error, isLoading } = usePaginatedMenu(userQuery);
  console.log(data);
  let [users, setUsers] = useState<any>([]);
  let [currentView] = useState<string>("list");
  useEffect(() => {
    setUsers([]);
    setUsers(data);
  }, [data, error, isLoading]);
  const handleSearch = (searchText: string) => {
    if (searchText.length > 2) {
      let lowerCaseSearchText = searchText.toLocaleLowerCase();
      setUsers(() =>
        AllUsers.filter((user: any) =>
          user.menuName.toLocaleLowerCase().startsWith(lowerCaseSearchText)
        )
      );
    } else if (searchText.length == 0) {
      setUsers(data);
    }
  };
  const handlePageChange = (start: number) => {
    setUsers([]);
    setUserQuery({ ...userQuery, start });
  };

  return (
    <Box p={3}>
      <Box borderRadius={8} my={3} p={3}>
        <Box bg={"#fff"} p={3}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box w={"full"}>
              <UserSearchBox
                onSearch={(searchText) => handleSearch(searchText)}
              />
            </Box>
            <Flex gap={3}>
              {/* <Button
                bg={"blue.100"}
                color={"blue.800"}
                fontWeight={600}
                fontSize={"sm"}
              >
                Filter <FilterIcon mx={2} boxSize={"3"} />
              </Button> */}
              {/* <ExportMenu columns={exportProperties} data={AllUsers} /> */}

              <NewMenuModal />
              {/* <DisplaySelector
                currentView={currentView}
                handleDisplayClick={(display: string) =>
                  setCurrentView(display)
                }
              /> */}
            </Flex>
          </Flex>
        </Box>

        {error && (
          <Box py={6}>
            <HasError />
          </Box>
        )}
        <Box my={2}>
          <Box
            py={2}
            bg={"white"}
            display={currentView == "list" ? "block" : "none"}
          >
            {users && users.length > 0 && !isLoading && (
              <MenuTable data={users} properties={userProperties} />
            )}
            {isLoading && <UsersSkeleton />}
          </Box>
          <Box display={currentView == "grid" ? "block" : "none"}>
            <SimpleGrid gap={5} columns={{ base: 1, md: 5 }}>
              {users &&
                users.length > 0 &&
                !isLoading &&
                users.map((user: User, index: number) => (
                  <UserProfileCard
                    key={index}
                    data={user}
                    properties={userProperties}
                  />
                ))}
            </SimpleGrid>

            {isLoading && (
              <SimpleGrid gap={5} columns={{ base: 1, md: 5 }}>
                <UserProfileSkeleton />
                <UserProfileSkeleton />
                <UserProfileSkeleton />
                <UserProfileSkeleton />
                <UserProfileSkeleton />
              </SimpleGrid>
            )}

            {users.length == 0 && (
              <Box py={6}>
                <EmptyRecord />
              </Box>
            )}
          </Box>

          <Pagination
            total={AllUsers.length}
            start={userQuery.start}
            count={userQuery.end}
            handlePageChange={(e: any) => handlePageChange(Number(e))}
          />
          {/* {data.length = 0 && } */}
        </Box>
      </Box>
    </Box>
  );
};

export default MenuFeature;
