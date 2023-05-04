import React from "react";
import { connect } from "react-redux";

export default function(InComponent, role = null) {
    // return (
    //     <h1>teste</h1>
    // )
    
    class Auth extends React.Component {

        // componentWillUnmount(){
        //     console.log('passou aqui')
            
        //     //let auth = this.props.auth
        //     debugger;
            
        //     if (role === 1) {
        //         alert('olá você não está autenticado')
        //         this.props.history.push('/')
        //     }
        // }

        render() {
            return (<InComponent {...this.props}/>)
        }
    }

    const reduxProps = state => {
        return ({
            auth: ''//state.user.authUser
        })
    };

    return connect(reduxProps)(Auth);
}