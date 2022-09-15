import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
import { ThemeProvider } from 'styled-components';

// all available config props
const config = {
  width: "380px",
  height: "500px",
  floating: true,
};

// // all available theme props
const theme = {
  background: '#4173a4',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#24405b',
  headerFontColor: '#fff',
  headerFontSize: '35px',
  botBubbleColor: '#24405b',
  botFontColor: '#fff',
  userBubbleColor: '#24405b',
  userFontColor: '#fff',


};


class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'welcome',
              message: 'Hello, Welcome to JMBDD pvt. Ltd.',
              trigger: 'q-name',
            },
            {
              id: 'q-name',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
                  return true;
                }
                else {
                  return 'Please input alphabet characters only !';
                }
              },
              trigger: 'q-email'
            },
            {
              id: 'q-email',
              message: 'Hi {previousValue}, what is you email?',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                  return true;
                }
                else {
                  return 'Please enter a valid email.';
                }
              },
              trigger: 'q-phone'
            }, {
              id: 'q-phone',
              message: 'Great, What is your phone number?',
              trigger: 'phone',
            },
            {
              id: 'phone',
              user: true,
              validator: (value) => {
                //eslint-disable-next-line
                if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
                  return true;
                }
                else {
                  return 'Please enter a valid phone number !';
                }
              },
              trigger: 'ask-feedback_querry',
            },
            // {
            //   id: 'option',
            //   message: 'Please select one option !',
            //   trigger: 'options'
            // },
            // {
            //   id: 'options',
            //   options: [
            //     { value: 'querry', label: 'Querry', trigger: 'q-querry' },
            //     { value: 'ask-fedback', label: 'Feedback', trigger: 'ask-feedback' },
            //   ]
            // },
            // {
            //   id: 'ask-feedback',
            //   message: 'Please enter your feedback !',
            //   trigger: 'feedback',
            // },
            // {
            //   id: 'feedback',
            //   user: true,
            //   trigger: 'q-submit'
            // },
            // {
            //   id: 'q-querry',
            //   message: 'Please enter your querry !',
            //   trigger: 'querry',
            // },
            // {
            //   id: 'querry',
            //   user: true,
            //   trigger: 'q-submit'
            // },

            {
              id: 'ask-feedback_querry',
              message: 'Please enter your feedback or querry!',
              trigger: 'feedback_querry',
            },
            {
              id: 'feedback_querry',
              user: true,
              trigger: 'q-submit'
            },
            {
              id: 'q-submit',
              message: 'Do you wish to submit?',
              trigger: 'submit'
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'end-message' },
                { value: 'n', label: 'No', trigger: 'no-submit' },
              ]
            },
            {
              id: 'no-submit',
              message: 'Your information was not submitted.',
              trigger: 'no-submit_option'
            },
            {
              id: 'no-submit_option',
              options: [
                { value: 'try', label: 'Try again', trigger: 'ask-feedback_querry' },
                { value: 'exit', label: 'exit', trigger: 'exitbot' },
              ]
            },
            {
              id: 'exitbot',
              message: 'thankyou',
              end: true,
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider >
    );
  }

}

export default SimpleForm;
