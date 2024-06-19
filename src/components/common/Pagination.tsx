import { Flex, HStack, Text } from "@chakra-ui/react";

const Pagination = ({ total, handlePageChange, count = 5 }: any) => {
  let pages: any = [];
  const populate = () => {
    for (let i = 0; i < Math.ceil(total / count); i++) {
      pages.push(i);
    }
  };
  populate();
  return (
    <Flex my={4} px={10} justifyContent={"flex-end"}>
      <HStack>
        <Flex
          _hover={{ bg: "yellow.200" }}
          cursor={"pointer"}
          borderRadius={5}
          bg={"gray.300"}
          onClick={() => handlePageChange(0)}
          h={35}
          w={30}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={14} color={"#000"}>
            {"<"}
          </Text>
        </Flex>

        {pages.map((p: any, i: number) => (
          <Flex
            onClick={() => handlePageChange(p * count)}
            _hover={{ bg: "yellow.200" }}
            cursor={"pointer"}
            key={i}
            h={35}
            w={30}
            p={2}
            bg={"yellow.300"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={14} color={"#000"}>
              {p + 1}
            </Text>
          </Flex>
        ))}
        <Flex
          _hover={{ bg: "yellow.200" }}
          cursor={"pointer"}
          h={35}
          w={30}
          p={2}
          borderRadius={5}
          bg={"gray.300"}
          onClick={() => handlePageChange(total - count)}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={14} color={"#000"}>
            {">"}
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Pagination;
