import { Box, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../template/Layout'
import classesCommon from "./stylesheet/Common.module.css";
const Demand = () => {
  const [data, setData] = useState({
    
    id: '',
    title: '',
    
    description: '',
    user: {
        name: '',
    },
    status: ''
    
  });
  console.log(data)
    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        Axios.get(`https://backendjuntosifpb.herokuapp.com/demands/${id}`,
        {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }   
        ).then(res => {
            setData(res.data.demands)
            
        })
        .catch(err => {})
        
    }, [])

  return (
    <Layout>
        <Box className={`${classesCommon.form}`} sx={{width: { sm: "560px", xs: "350px" }, display: "flex", alignItems: "start"}}/* sx={{display: "flex", width: "300px",}} */>
        
        <div style={{padding: "20px"}}>
            <Box 
            sx={{
                /* background: "red", */
                display: "flex", 
                justifyContent: "center", 
                alignSelf: "center", 
                width: {sm:"520px", xs: "320px"}}}
                >
        <Typography variant="h5" style={{display:"flex", marginBottom: "20px", textAlign: "center"}}>
            Demanda
        </Typography>
        </Box>
        <div style={{display: "flex", flexDirection: "column",}}>
            <div style={{display:"flex", flexDirection: "row", marginBottom: "10px"}}>
            <p style={{fontWeight:"bold"}}> Usuário:&nbsp;
            </p>
            <Typography variant='h7'>{data.isAnonymous ? "Anônimo": data.user.name}</Typography>
            </div>
            <div style={{display:"flex", flexDirection: "row", marginBottom: "10px"}}>
            <p style={{fontWeight:"bold"}}> Demanda:&nbsp;
            </p>
            <Typography variant='h7'>{data.title}</Typography>
            </div>
            <div style={{display:"flex", flexDirection: "row", marginBottom: "10px"}}>
            <p style={{fontWeight:"bold"}}> Descrição:&nbsp;
            </p>
            <Typography variant='h7'>{data.description}</Typography>
            </div>
            <div style={{display:"flex", flexDirection: "row", marginBottom: "10px"}}>
            <p style={{fontWeight:"bold"}}> Status:&nbsp;
            </p>
            <Typography variant='h7'>{data.status}</Typography>
            </div>
            
        </div>
        </div>
        </Box>
    </Layout>
  )
}

export default Demand