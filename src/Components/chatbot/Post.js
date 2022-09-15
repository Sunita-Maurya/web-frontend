import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
    constructor(props) {
        super(props);
        const { steps } = this.props;
        // const { submit, name, email, phone, feedback, querry } = steps;

        // this.state = { submit, name, email, phone, feedback, querry };

        const { submit, name, email, phone, feedback_querry } = steps;

        this.state = { submit, name, email, phone, feedback_querry };
    }


    componentDidMount() {
        const userObject = {
            submit: this.state.submit.value,
            name: this.state.name.value,
            phone: this.state.phone.value,
            email: this.state.email.value,
            //feedback: this.state.feedback.value,
            //querry: this.state.querry.value,
            feedback_querry: this.state.feedback_querry.value,

        };
        axios.post(`/api`, userObject)
        .then(res => {
            console.log(res.status)
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    render() {
        return (
            <div>Thank you! Your data was submitted successfully, We will get to you soon !</div>
        );
    }
};


export default Post;