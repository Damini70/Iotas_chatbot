import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import {useState,useEffect} from 'react';
import './App.css';

function App(props) {
  const [state,setState]=useState({full_name:'',email_id:'',phone_no:'',address:'',password:''})
  useEffect(()=>{
    
    // const {full_name,email_id,phone_no,address,password}=user

  })
  return (
    <div>
 <ChatBot
    steps={ [
      {
        id: '0',
        message: 'Hi there! Welcome to the Iotas chatbot , your bot assistant. I can help you to navigate through the website / explain our new offers via chat.',
        trigger: '1',
      },
      {
        id: '1',
        message: 'Please type your name. we’ll be happy to assist you right away!',
        trigger:'2'
      },
      {
        id:'2',
        user: true,
        validator: (value) => {
          if (value.length<3) {
            return 'Please type your name';
          }else{
            sessionStorage.setItem("full_name",value)
            console.log(sessionStorage)
          }
          return true;
        },
        trigger:'3'
      },{
        id:'3',
        message: 'hi {previousValue}. Nice to meet you',
        trigger: '4'
      },{
        id:'4',
        message:'Please type your Email-id',
        trigger: '5'
    },{
      id:'5',
      user:true,
      validator: (value) => {
        if (value.includes('@gmail.com')) {
          sessionStorage.setItem("email_id",value);
          console.log(sessionStorage);
        }else{
          return 'Please type your valid Email'
        }
        
        return true;
      },
      trigger: '6'
    },{
      id:'6',
      message:'Please type your mobile number. So that we can contact you.',
      trigger:'7'
    },{
      id:'7',
      user: true,
      validator:(value)=>{
        if(isNaN(value)|| value.length<10 || value.length>10){
          return 'Please type valid Phone Number' 
        }
        return true;
      },
      trigger:'8'
    },{
      id:'8',
      message:'please type your Address',
      trigger:'9'
    },{
      id:'9',
      user:true,
      validator:(value)=>{
        if(value.length>=3){
          sessionStorage.setItem("address",value);
          console.log(sessionStorage);
        }else{
          return 'please type correct address'
        }
        return true;
      },
      trigger:'10'
    },{
      id:'10',
      message: 'Please tell me what character(must be of 8 characters) you want to set for your account.',
      trigger:'11'
    },{
      id:'11',
      user:true,
      validator:(value)=>{
        if(value.length!=8){
          return 'please type your 8 characters'
        }
        return true;
      },
      end: true
    }

    ]}
  />
    </div>
  );
}

export default App;
