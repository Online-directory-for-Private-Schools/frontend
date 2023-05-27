import Input from '../SignUp-Login/input';
import Form from '../SignUp-Login/form'; 
import React, { useState, MouseEvent } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'js-cookie';
import { HandlerFactory } from '@/requestHandlers/HandlerFactory';
import { HandleSendVerificationCode } from '@/requestHandlers/handleSendVerificationCode';
import router from 'next/router';
import { HandleVerifyEmail } from '@/requestHandlers/handleVerifyEmail';


type VerificationFormProps = {
  onSubmit: (e: MouseEvent, setSpinner: Function) => void;
  errorMessage: string;
  SuccessMessage?: string;
};

const VerificationForm: React.FC<VerificationFormProps> = () => {
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  let [SuccessMessage, setSuccessMessage] = useState("");
  const token = Cookies.get("token") as string;

  const codeInput = {
    type: 'text',
    label: 'Check your email to verify ! ',
    value: code,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)  
  };

  const sendCode = async (e: MouseEvent, setSpinner: Function) => {
    // Write your function to send the code here
    e.preventDefault();

    const handlerFactory = new HandlerFactory("send-email");
    const HandleSendVerificationCode = handlerFactory.createHandler({
    }) as HandleSendVerificationCode;
    HandleSendVerificationCode.execute({
      setErrorMessage: setErrorMessage,
      setCodeSent : setCodeSent,
      setSpinner: setSpinner,
      router: router,
      token
    });



    // After the code is sent, set the state to true to show the code input
    
  };



  function verifyCode(code: string, setSpinner: Function) {
    const handlerFactory = new HandlerFactory("verify-email");
    const HandleVerifyEmail = handlerFactory.createHandler({
    }) as HandleVerifyEmail;

    HandleVerifyEmail.execute({
      setErrorMessage: setErrorMessage,
      setSpinner: setSpinner,
      router: router,
      code
    });
  }

  const handleSubmit = (e: MouseEvent, setSpinner: Function) => {
    e.preventDefault();
    if (!codeSent) {
      sendCode(e, setSpinner);
      setSpinner(false);
    } else {
      verifyCode(code, setSpinner);
    }

  };

  return (
    <Form
      title="Verification"
      errorMessage={errorMessage}
      SuccessMessage={SuccessMessage}
      onSubmit={handleSubmit}
      submitMessage={codeSent ? "Submit" : "Send Code"}
    >
      <>
        {codeSent && (
          <Input
            type={codeInput.type}
            label={codeInput.label}
            value={codeInput.value}
            onChange={codeInput.onChange}
          />
        )}
      </>
    </Form>
  );
};

export default VerificationForm;
