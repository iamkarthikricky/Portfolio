import { Modal } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { onToggleModal } from '../../../redux/portfolioSlice';

import styled from "styled-components";

import styles from './modal.module.css'
import aboutStyles from '../../About/about.module.css'

import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';


import docketPayImg from '../../../assets/docketpay_small.PNG';
import billaBookStoreImg from '../../../assets/billabookstore_small.PNG';
import hungryBowlsImg from '../../../assets/hungrybowls_large.PNG';

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
    <div className='py-4 px-8 flex flex-col gap-8 w-full'>
       <div className={`${styles.modal_img}`}>
        <img src={docketPayImg} alt="docketpay" className="w-full"/>
       </div>
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

  const [readNow,setReadNow] = useState(false);

  const projectFlow=[
    {
      title:"1. Landing on Homepage",
      items:["User arrives on the homepage.","Sees sections for Trending Books and Available Books."]
    },
    {
      title:"2. Browsing & Searching",
      items:["User can select books from available/trending sections.","If they don’t find a book, they can search for books, articles, or newspapers.","Based on search results, they can add items to their cart."]
    },
    {
      title:"3. Adding to Cart",
      items:["No limit on how many items can be added.","At least one item must be in the cart before checkout."]
    },
    {
      title:"4. Checkout Process",
      items:["User agrees to proceed to checkout.",
"A form appears for contact details and delivery address.",
"User fills in the form and submits it."]
    },
    {
      title:"5. Order Confirmation",
      items:["Upon successful submission, a confirmation email is sent to the user's registered email ID."]
    }
  ]

  return(
    <div className='py-4 px-8 flex flex-col gap-8'>
       <div className={`${styles.modal_img}`}>
       <img src={billaBookStoreImg} alt="docketpay" />
       </div>
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

const HungryBowlsContent=()=>{

  const [readNow,setReadNow] = useState(false);

  const projectFlow=[
    {
      title:"1. User Authentication",
      items:["The user tries to log in using valid credentials.","Only registered users can access the application.","If the user is not registered, they must sign up first."]
    },
    {
      title:"2. Restaurant Selection",
      items:["Once logged in, the user can browse top-rated restaurants.","Filters can be applied based on cuisine, ratings, and location."]
    },
    {
      title:"3. Menu Exploration & Cart Management",
      items:["The user selects a restaurant to view its menu.","Any food item can be added to the cart.","Multiple items from different restaurants can be added simultaneously."]
    },
    {
      title:"4. Checkout Process",
      items:["The user proceeds to the cart to review selected items.","Cart details are verified before final checkout.","Payment and delivery details are confirmed to place the order."]
    }
  ]

  return(
    <div className='py-4 px-8 flex flex-col gap-8'>
    <div className={`${styles.modal_img}`}>
    <img src={hungryBowlsImg} alt="docketpay" />
    </div>
    <div className='flex flex-col gap-3'>
    <div className='gap-2 flex flex-col'>
     <p className={`${styles.modal_project_title}`}>Hungry Bowls - Fresh & Delicious Food</p>
     <p className={`${styles.modal_side_heading}`}>Project Overview</p>
     <p className={`${aboutStyles.about_description}`}>
         
     This web application allows users to browse, search, and order food online with ease. Users can explore a variety of dishes, add items to their cart, and place an order by providing delivery details. The platform ensures a seamless ordering experience with a user-friendly interface and efficient order management. Future enhancements may include real-time order tracking, personalized recommendations, and multiple payment options.
     </p>
     <p className={`${aboutStyles.about_description}`}>Additionally, users can:</p>
     <ul className="list-disc pl-6 space-y-2">
       <li className={`${aboutStyles.about_description}`}>Users can save their favorite restaurants and place orders from them.</li>
       <li className={`${aboutStyles.about_description}`}>They can also order from multiple restaurants at the same time for a convenient dining experience.</li>
   </ul>
     <p className={`${aboutStyles.about_description}`}>Currently, this is a prototype due to budget constraints, but future updates will introduce additional features and improvements to enhance the platform. 🚀</p>
    </div>
    <div className="flex flex-col gap-2">
     <p className={`${styles.modal_side_heading}`}>Technology Stack</p>
     <p className={`${aboutStyles.about_description}`}>HTML, Bootstrap, Javascript, ReactJS, NodeJS, SQL,Context API, Local Storage.</p>
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