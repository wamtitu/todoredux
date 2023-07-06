import {loginStart,loginSuccess,loginFailure,logOut} from './userSlice';
import {todoStart,todoSuccess,todoFailure, deleteTodoStart, deleteTodoSuccess, deleteTodoFailure, updateTodoStart, updateTodoSuccess, updateTodoFailure} from './todoSlice';
import { createTodoStart, createTodoSuccess,createTodoFailure } from './todoSlice';
import axios from 'axios';
import { apiDomain } from '../utils/utils';
export const loginUser = async(dispatch,user)=>{
        console.log(user,dispatch);
    dispatch(loginStart());
        try{
    const {data} = await axios.post(`${apiDomain}/auth/login`,user);
    dispatch(loginSuccess(data));
    alert('logged in succesfully');
    console.log(data);
        }catch(err){
    console.log(err)
    dispatch(loginFailure());
        }
    }
    export const logOutuser = async(dispatch)=>{
        console.log(dispatch);
    dispatch(logOut())
}