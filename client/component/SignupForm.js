import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { compose, graphql } from 'react-apollo'
import mutation from '../mutations/SignUp'
import query from '../queries/CurrentUser'
import {hashHistory} from 'react-router';
export class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state={errors:[]}
    }


    componentWillUpdate(nextProps){
        if(nextProps.data.user && !this.props.data.user){
            hashHistory.push('/dashboard')
        }
    }
    
    onSubmit({email,password}){
        this.props.mutate({
            variable:{email,password},
            refectchQueries:[{query}]

        }).catch(res => {
            const errors=res.graphQLErrors.map(error => error.message);
            this.setState({errors });
        })


    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
              <AuthForm errors={this.state.errors}
              onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}

export default graphql(query)(
graphql(mutation)(SignupForm));
