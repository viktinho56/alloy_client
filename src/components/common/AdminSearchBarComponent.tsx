import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { NavLinks } from "../../constants";
import { NavLink } from "react-router-dom";

export const AdminSearchBarComponent = () => {
  let [query, setQuery] = useState("");
  let [results, setResults] = useState<any>([]);

  function handleSearch() {
    let d = NavLinks.filter((e) =>
      e.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
    );
    console.log(d);
    setResults(d);
  }

  return (
    <Box>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          onKeyUp={(e) => setQuery(e.currentTarget.value)}
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
        />
        <InputRightAddon p={0} border="none">
          <Button
            onClick={() => handleSearch()}
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      <Box
        visibility={query.length > 0 ? "visible" : "collapse"}
        w={260}
        bg={"white"}
        p={3}
        position={"absolute"}
      >
        <Text fontSize={13} fontWeight={600}>
          Search Results
        </Text>
        {results &&
          results.map((d: any, i: number) => (
            <Text
              as={NavLink}
              to={d.url}
              key={i}
              fontSize={13}
              fontWeight={600}
            >
              {d.name}
            </Text>
          ))}
      </Box>
    </Box>
  );
};
