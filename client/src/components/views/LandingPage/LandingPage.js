import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
    const navigate  = useNavigate();
    useEffect(() => {
        axios.get('/api/hello')
        .then(response=>{console.log(response)})
    }, [])

    const onClickHandler=()=>{
        axios.get('/api/users/logout')
        .then(response=>{
            if(response.data.success){
                navigate('/login')
            } else{
                alert('Fail to logout!')
            }
        })
    }

    return (
        <div style={{
            display: 'flex',justifyContent:'center',alignItems:'center'
            ,width:'100%',height:'100vh'
        }}>
            <h2>Start Page!</h2>
            <button onClick={onClickHandler}>LogOut</button>
        </div>
    )
}

export default LandingPage
