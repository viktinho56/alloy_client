import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
// import { countries } from "../../../data/countries";

import { validateInput } from "../../utils/inputValidator";
import { greyColor } from "../../constants";
// import { Ranks } from "../../data/ranks";
import { useState } from "react";

const CustomAppSelect = ({
  errors,
  register,
  prop1,
  prop2,
  label1,
  label2,
}: any) => {
  const [ranks, setRanks] = useState<any>([]);
  const handleChange = (val: string) => {
    console.log(val, setRanks);
    //let filtered = Ranks.filter((s) => s.name == val);
    //setRanks(filtered[0].ranks);
  };

  return (
    <Box>
      <FormControl mb={6}>
        <FormLabel>{"Select Armed " + label1}</FormLabel>
        <Select
          size={"md"}
          isInvalid={validateInput(errors[prop1]?.message)}
          errorBorderColor="red.600"
          borderWidth={0}
          bg={greyColor}
          _active={{ outline: "none" }}
          outline={"none"}
          _focus={{ borderWidth: 0, outlineColor: "transparent" }}
          borderColor={"#000"}
          {...register(prop1)}
          placeholder={"Select " + label1}
          onChange={(e) => handleChange(e.currentTarget.value)}
        >
          {/* {Ranks.map((c: any, i: number) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))} */}
        </Select>

        <FormHelperText fontSize={12} color={"red"}>
          {errors[prop1]?.message}
        </FormHelperText>
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>{label2}</FormLabel>
        <Select
          size={"md"}
          isInvalid={validateInput(errors[prop2]?.message)}
          errorBorderColor="red.600"
          borderWidth={0}
          bg={greyColor}
          _active={{ outline: "none" }}
          outline={"none"}
          _focus={{ borderWidth: 0, outlineColor: "transparent" }}
          borderColor={"#000"}
          {...register(prop2)}
          placeholder={"Select " + label2}
        >
          {ranks &&
            ranks.length > 0 &&
            ranks.map((c: any, i: number) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
        </Select>

        <FormHelperText fontSize={12} color={"red"}>
          {errors[prop2]?.message}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default CustomAppSelect;
