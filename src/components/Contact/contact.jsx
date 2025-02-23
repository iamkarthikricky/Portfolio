
import homeStyles from "../Home/home.module.css";
import aboutStyles from "../About/about.module.css";
import styles from "./contact.module.css";

import axiosInstance from "../../axios/axiosConfig";

import styled from "styled-components";

import { Form, Input, Button} from "antd";
import {useEffect, useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0px !important;
`;

export const StyledFormItem = styled(Form.Item)`
  width: 100%;
  margin-bottom: 15px !important;
  .ant-form-item-label {
    padding-bottom: 6px !important;
  }

  .ant-form-item-label > label {
    height: 0px;
    font-family: var(--font-comforta);
    font-size: var(--sub-heading);
    font-weight: var(--font-weight400);
    color: var(--color-black);
    text-align: left !important;
  }
  .ant-form-item-explain-error {
    font-size: var(--main-para);
    font-family: var(--font-comforta);
    margin: 3px 0px !important;
  }
`;

export const StyledFormInput = styled(Input)`
  width: 100%; // Custom width
  border-radius: 10px; // Rounded corners
  border: 1px solid #c9c9c9; // Green border
  background-color: var(--color-white) !important; // Light background color
  height: 50px;
  color:var(--color-black) !important;
  font-family: var(--font-comforta);
  font-size: var(--sub-heading);
  &:hover {
    border-color: #c9c9c9; // Darker green on hover
  }
  &:focus {
    border-color: #c9c9c9; // Green border on focus
    background-color: var(--color-white); // White background on focus
    box-shadow: none;
    color:var(--color-black);
  }

  &::placeholder {
    font-family: var(--font-comforta);
    font-size: var(--sub-heading);
    color:var(--color-black)
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  padding: 10px;
  width: 100%; // Custom width
  border-radius: 10px; // Rounded corners
  border: 1px solid #c9c9c9; // Green border
  background-color: var(--color-white); // Light background color
  height: 50px;
  font-family: var(--font-comforta);
  font-size: var(--sub-heading);

  color:var(--color-black) !important;
  &:hover {
    border-color: #c9c9c9; // Darker green on hover
     background-color: var(--color-white); // White background on focus
  }
  &:focus {
    border-color: #c9c9c9; // Green border on focus
    background-color: var(--color-white); // White background on focus
    box-shadow: none;
  }

  &::placeholder {
    font-family: var(--font-comforta);
    font-size: var(--sub-heading);
    color:var(--color-black)
  }
`;

export const StyledButton = styled(Button)`
  width: auto;
  height: 36px;
  margin-top: 20px;
  font-family: var(--font-work);
  font-size: var(--sub-heading);
  color:var(--color-white) !important;
  background-color: var(--color-black) !important;
  border: none !important;
  &:hover,
  &:focus {
    background-color: var(--color-black) !important;
    color: var(--color-white) !important;
  }
  &.ant-btn-loading {
    background-color: var(--color-black) !important;
    color: var(--color-white) !important;
  }
`;



const SuccessIcon = () => {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" stroke="green" strokeWidth="5" fill="none" />
      <motion.path
        d="M30 50 L45 65 L70 35"
        stroke="green"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.svg>
  );
};



const ContactForm = () => {
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const validateEmail = (_, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return Promise.reject(new Error("Email is required"));
    } else if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address"));
    }
    return Promise.resolve();
  };

  const validateName = (_, value) => {
    const nameRegex = /^[A-Za-z]+$/;
    if (!value) {
      return Promise.reject(new Error("Name is required"));
    } else if (!nameRegex.test(value)) {
      return Promise.reject(new Error("Name must contain only alphabets"));
    } else if (value.length > 25) {
      return Promise.reject(new Error("Name cannot exceed 25 characters"));
    }
    return Promise.resolve();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


 
  const onFinish = async (values) => {
    setIsLoading(true);
  
    try {
      const { status } = await axiosInstance.post("/contact", values);
      status === 200 ? setOnSuccess(true) : toast.error("Something went wrong");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  

  const OnSuccessMessage=()=>{

    const navigate = useNavigate()

    return(
    <div className={`${styles.height} flex flex-col gap-2 items-center justify-center gap-2`}>
      <SuccessIcon />
      <div className="flex flex-col gap-1">
      <p  className={`${aboutStyles.about_description}`}>Thanks for reaching out 😊</p>
      <p className={`${aboutStyles.about_description}`}>I will contact you soon.</p>
      </div>
      <StyledButton onClick={()=>navigate("/")} className={`${styles.back_to_home_btn}`}>Back to Home</StyledButton>
    </div>
    )
  }

  return (
    <div>
      {onSuccess ? <OnSuccessMessage /> : 
    <StyledForm
      form={form}
      name="loginForm"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember:true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <StyledFormItem
          label="First Name"
          name="firstName"
          rules={[{ validator: validateName }]}
        >
          <StyledFormInput
            disabled={isLoading}
            placeholder="Enter First Name"
          />
        </StyledFormItem>
        <StyledFormItem
          label="Last Name"
          name="lastName"
          rules={[{ validator: validateName }]}
        >
          <StyledFormInput disabled={isLoading} placeholder="Enter Last Name" />
        </StyledFormItem>
      </div>
      <StyledFormItem
        label="Email"
        name="email"
        rules={[{ validator: validateEmail }]}
      >
        <StyledFormInput
          disabled={isLoading}
          placeholder="Enter email address"
        />
      </StyledFormItem>

      <StyledFormItem label="Message" name="message">
        <StyledTextArea
          rows={4}
          disabled={isLoading}
          placeholder="Enter Message..."
        />
      </StyledFormItem>
      <div className="w-full lg:w-32">
        <StyledButton loading={isLoading} htmlType="submit">
          Send
        </StyledButton>
      </div>
    </StyledForm>
}
    </div>
  );
};

const Contact = () => {

  useEffect(()=>{
    document.title = "Portfolio | Contact";
  },[])

  return (
    <div className="h-screen">
      <div className="flex flex-col w-full justify-between gap-1">
        <h1
          className={`${homeStyles.job_role} ${homeStyles.home_text}`}
          style={{ textAlign: "left" }}
        >
          Contact
        </h1>
        <p className={`${aboutStyles.about_description}`}>
            I would like to hear from you 😊😊
          </p>
       
      </div>
      <div className="py-10">
        <ContactForm />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
