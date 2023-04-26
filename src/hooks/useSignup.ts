import { useMutation } from "react-query";
import { useState } from "react";

function useSignup() {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation(
    ({ data, endpointApi }: any) => fetch(endpointApi, data),
    {
      onSuccess: () => {
        console.log("Form submitted successfully!");
      },
    }
  );

  function signup(data: any, endpointApi: any) {
    mutate({ data, endpointApi });
  }

  return { signup, isLoading, isError, isSuccess, error };
}

export default useSignup;
