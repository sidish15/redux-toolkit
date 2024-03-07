import React from 'react'
import styled from 'styled-components'
import { clearAllUsers } from '../store/slices/UserSlices'
import {  useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const deleteUsers=()=>{
    dispatch(clearAllUsers());
    console.log("hi delete");
  }
  return (
    <Wrapper>
      <button className='clear-btn' onClick={deleteUsers}>clear users</button>
    </Wrapper>
   
      
    
  )
}
const Wrapper=styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#db338a;
  margin-top:2rem;
}
`
export default DeleteAllUser
