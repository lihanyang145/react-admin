import React, { Component } from 'react';
import storageUtil from '../../utils/storageUtils'
import { Redirect } from 'react-router-dom'
class Admin extends Component {
    render() { 
        const username = storageUtil.getUser()
        if(!username){
            return <Redirect to='/login' />
        }
        return ( 
            <div>用户名{username}</div>
         );
    }
}
 
export default Admin;