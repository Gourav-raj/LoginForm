import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import currentUserQuery from '../queries/CurrentUser'
export default (WrappedComponent)=>{
class RequrAuth extends Component {
   componentWiiUpdate(nextProps){
    if(!nextProps.data.loading&&!nextProps.data.user){
        hashHistory.push('/login');
    }
   }
   
    render() {
        return <WrappedComponent {...this.props}/>
            
        
    }
}

return graphql(currentUserQuery)(RequrAuth)
};