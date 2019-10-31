import React ,{useReducer} from 'react';
import axios from 'axios';
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import {USER_NAME} from './types'


let UserState = (props) => {
    const initialState = {
        userName:''
    }

    const [state,dispatch] = useReducer(UserReducer,initialState);

    //get user name
    
    const getUserName = async(email) => {
        const response = await axios.post('http://localhost:5000/user',{
            email
        });
        
        dispatch({type:USER_NAME,payload:response.data})
    }

    return <UserContext.Provider 
    
    value={{
        userName:state.userName,
        getUserName
    }}> 
        {props.children} 
    
        
        </UserContext.Provider>
}

export default UserState;