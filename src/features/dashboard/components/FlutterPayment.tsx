//import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { generateCode } from "../../../utils/random_number_generator";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CreateTransactionApi } from "../services/maintenanceService";
//import Notiflix from "notiflix";
import { SuccessResponse } from "./modal/SuccessResponse";

export default function FlutterPayment({ amount }: any) {
  useEffect(() => {}, []);
  const { currentUser } = useContext(AuthContext);
  const [isResponseVisible, setResponseVisible] = useState(false);
  const config = {
    public_key: "FLWPUBK_TEST-c2459b10357846e0a84a23246a87bcb7-X",
    tx_ref: generateCode(),
    amount: amount,
    currency: "KES",
    payment_options: "mpesa,card,mobilemoney,ussd",
    customer: {
      email: currentUser?.email ?? "",
      phone_number: currentUser?.phoneNo ?? "",
      name: currentUser?.firstName ?? "",
    },
    customizations: {
      title: "Hass Consult",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Card",
    callback: async (response: any) => {
      console.log(response);
      let obj = {
        email: currentUser?.email,
        amount: amount,
      };
      await CreateTransactionApi(obj);
      setResponseVisible(true);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <>
      <FlutterWaveButton {...fwConfig} />
      <SuccessResponse isOpen={isResponseVisible} />
    </>
  );
}
