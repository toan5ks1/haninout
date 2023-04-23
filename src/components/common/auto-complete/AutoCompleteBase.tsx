import { Bank } from "@/libs/constant";
import { Select } from "@chakra-ui/react";
import React from "react";

const AutoCompleteBase = ({ label, name, data, register }: any) => {
  return (
    <Select
      placeholder={label}
      {...register(name, {
        required: true,
      })}
    >
      {data.map((option: Bank) => (
        <option key={option.bankId} value={option.bankName}>
          {option.bankName}
        </option>
      ))}
    </Select>
  );
};

export default AutoCompleteBase;
