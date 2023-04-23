import React from "react";
import useBankAutoComplete from "@/hooks/useBankAutoComplete";
import AutoCompleteBase from "./AutoCompleteBase";

const BankAutoComplete = (props: any) => {
  const { isLoading, data, error } = useBankAutoComplete();

  return <AutoCompleteBase label="Ngân hàng" {...props} data={data} />;
};

export default BankAutoComplete;
