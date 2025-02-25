import { Modal } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { onToggleModal } from '../../../redux/portfolioSlice';

import styled from "styled-components";

import styles from './modal.module.css'
import aboutStyles from '../../About/about.module.css'

import { MdOutlineClose } from "react-icons/md";
import { title } from 'framer-motion/client';
import { useState } from 'react';

const StyledModal = styled(Modal)`

  .ant-modal-content {
    height:100%;
    border-radius: 10px; /* Example: Rounding the corners of the modal */
    background-color: var(--modal-bg) !important; /* Example: Changing the background color */
    padding:0px !important;
  }

  .ant-modal-title{
     color: var(--color-black) !important;
      font-family: var(--font-comforta);
    font-size: var(--side-description);
  }
  .ant-modal-header {
    background-color: var(--modal-bg) !important;
    padding:1rem 2rem;
    position:sticky;
    top:0;
  }
`;

const FlowSection = ({ title, items }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className={styles.project_flow_side_heading}>{title}</h1>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index} className={styles.project_list_item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const DocketPayContent=()=>{

  const [readNow,setReadNow] = useState(false)
  
const projectFlow = [
  {
    title: "1. User Login",
    items: ["If the user has an account and is verified, they can log in successfully."]
  },
  {
    title: "2. User Registration",
    items: [
      "If the user doesn’t have an account, they must register.",
      "Email verification is required to complete the registration."
    ]
  },
  {
    title: "3. Forgot Password & Reset",
    items: [
      "If the user forgets the password, they can request a reset.",
      "An OTP is sent to the registered email for verification.",
      "After successful verification, the user can set a new password."
    ]
  },
  {
    title:"4. Dashboard Redirection",
    items:[
      "After a successful login, the user is redirected to the dashboard."
    ]
  },
  {
    title:"5. Viewing Payables & Receivables",
    items:[
      "If there are any payable or receivable amounts for the month, the accumulated information is displayed.",
      "If no records are available, the user can manually add data."
    ]
  },
  {
    title:"6. Adding Data",
    items:[
      "The user can enter financial records such as payables, receivables, investments, or expenses.",
      "At the time of adding data, sector-wise filters (e.g., loans, bills, salary, crypto, EMI, etc.) are shown for easy categorization."
    ]
  },
  {
    title:"7. Filtering Data",
    items:[
      "Users can filter transactions based on selected sectors to quickly find relevant financial records"
    ]
  },
  {
    title:"8. Reminder Option",
    items:[
      "After adding the required data, the user is given an option to send reminders or not.",
      "If the user chooses to send reminders, they will be sent every alternate day until the due date.",
      "If the user opts out, no reminders will be sent."
    ]
  },
  {
    title:"9. Marking Records as Completed",
    items:[
      "Once the user marks a record as completed, it becomes non-editable.",
      "This ensures that finalized transactions cannot be modified."
    ]
  },
  {
    title:"10. Profile Management",
    items:[
      "Users have the ability to update their profile details but not mail id."
    ]
  }
];


  return(
    <div className='py-4 px-8'>
       <div className={`${styles.modal_img}`}></div>
       <div className='flex flex-col gap-3'>
       <div className='gap-2 flex flex-col'>
        <p className={`${styles.modal_project_title}`}>Docket Pay - Modern Khata Book</p>
        <p className={`${styles.modal_side_heading}`}>Project Overview</p>
        <p className={`${aboutStyles.about_description}`}>
            
        A user lends money to someone but may forget about it over time, leading to a loss of the lent amount. To prevent this, the user can update lender details, set a due date, and include any applicable interest. We then send timely reminders to both the lender and the receiver regarding the repayment.
            </p>

        <p className={`${aboutStyles.about_description}`}>A user can track various financial activities, including lending money, earnings, investments (such as EMIs, stocks, and crypto withdrawals), and daily expenses. Often, users forget about lent money or upcoming payments, leading to financial mismanagement. To prevent this, our system allows users to update lender details, set due dates, and include interest (if applicable). Additionally, they can choose where to receive reminders—whether for loans, investments, or regular expenditures—ensuring a complete financial overview and better money management.</p>
       </div>
       <div className="flex flex-col gap-2">
        <p className={`${styles.modal_side_heading}`}>Technology Stack</p>
        <p className={`${aboutStyles.about_description}`}>HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, Redux,</p>
       </div>

       <div className="flex flex-col gap-2">
        <p className={`${styles.modal_side_heading}`}>Key Features & Functionalities</p>

<div className='flex gap-2.5 items-center py-4'>
     
      {readNow ? null :
      <>
       
      <button className={styles.project_desc_btn} onClick={()=>setReadNow(!readNow)}>Read</button>
      <p className={styles.project_list_item}>OR</p>
      </>}
      <button className={styles.project_desc_btn} >Watch</button>
</div>

{readNow &&
<div>
        {projectFlow.map((section, index) => (
        <FlowSection key={index} title={section.title} items={section.items} />
      ))}</div>}
       </div>
       </div>
    </div>
)
}


const BillaBookStoreContent=()=>{

  const [readNow,setReadNow] = useState(false)

  return(
    <div className='py-4 px-8'>
       <div className={`${styles.modal_img}`}></div>
       <div className='flex flex-col gap-3'>
       <div className='gap-2 flex flex-col'>
        <p className={`${styles.modal_project_title}`}>Billa Book Store - Ultimate Books Collection</p>
        <p className={`${styles.modal_side_heading}`}>Project Overview</p>
        <p className={`${aboutStyles.about_description}`}>
            
        This project is built around Google's Free Books API, aiming to provide an online book delivery service. Users can search for books, articles, or novels and add them to their cart based on availability. Upon placing an order with the necessary delivery details, a confirmation email is sent.  </p>

        <p className={`${aboutStyles.about_description}`}>Additionally, users can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li className={`${aboutStyles.about_description}`}>Toggle between favorites, allowing them to save and access their preferred books easily.</li>
          <li className={`${aboutStyles.about_description}`}>Switch between light and dark modes for a better user experience.</li>
      </ul>
        <p className={`${aboutStyles.about_description}`}>Currently, this is a prototype due to budget constraints, but future updates will introduce additional features and improvements to enhance the platform. 🚀</p>
       </div>
       <div className="flex flex-col gap-2">
        <p className={`${styles.modal_side_heading}`}>Technology Stack</p>
        <p className={`${aboutStyles.about_description}`}>HTML, CSS, Javascript, ReactJS, NodeJS, SQL,Redux</p>
       </div>

       <div className="flex flex-col gap-2">
        <p className={`${styles.modal_side_heading}`}>Key Features & Functionalities</p>

<div className='flex gap-2.5 items-center py-4'>
     
      {readNow ? null :
      <>
       
      <button className={styles.project_desc_btn} onClick={()=>setReadNow(!readNow)}>Read</button>
      <p className={styles.project_list_item}>OR</p>
      </>}
      <button className={styles.project_desc_btn} >Watch</button>
</div>

{/* {readNow &&
<div>
        {projectFlow.map((section, index) => (
        <FlowSection key={index} title={section.title} items={section.items} />
      ))}</div>} */}
       </div>
       </div>
    </div>
)
}

const HungryBowlsContent=()=>(

    <div>
        <p>This is HungryBowls content</p>
    </div>
)


const GetContent=()=>{

    const {modalState} = useSelector((state)=>state.portfolio)

    switch(modalState.projectId){
        case 1:
            return <DocketPayContent />
        case 2:
            return <BillaBookStoreContent />
        case 3:
            return <HungryBowlsContent />
        default:
            return null
    }
}



export const ProjectModal=()=>{

  const dispatch = useDispatch()

  const {modalState,cardsData} = useSelector((state)=>state.portfolio)

  const currentProjectData = cardsData?.find(e=>e.id === modalState.projectId)
  
  const handleOk=()=>{
    dispatch(onToggleModal(currentProjectData))
  }

  const handleCancel=()=>{
    dispatch(onToggleModal(currentProjectData))
  }

  const projectDetails = currentProjectData?.projectDetails["0"]


  return(
  <StyledModal title={
  <div className="flex justify-between items-center">
    <span>{projectDetails.projectName}</span>
    <button onClick={handleCancel}>
      <MdOutlineClose />
    </button>
  </div>
}  closable={false}  footer={false} open={modalState.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <GetContent />
      </StyledModal>
  )
}