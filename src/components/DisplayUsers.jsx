import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const DisplayUsers = () => {

        const data=useSelector((state)=>{
                return state.users;
                // this state represents your complete state(store ka compelet data)
        })
        // store k slices ko access kar skte h

        console.log(data);
  return <Wrapper>
{
        data.map((user,id)=>{
           return <li key={id}>
             {user}
           </li>
        })
}
</Wrapper>
}
const Wrapper=styled.section`
li{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:1rem;
        border-bottom:1px solid #eee;

        &:first-child{
                border-top:1px solid #eee;
        }
}
`;

export default DisplayUsers;
