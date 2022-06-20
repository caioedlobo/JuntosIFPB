import { Box, Typography } from '@mui/material';
import { Axios } from 'axios';
import React, { useEffect } from 'react'
import Layout from '../template/Layout'
import classesCommon from "./stylesheet/Common.module.css";
const Demand = () => {

    
    useEffect(() => {
       /*  Axios.get(`url`,{

        }).then(res => {
    
        })
        .catch(err => {}) */
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
            <div style={{marginBottom: "10px"}}>Usuário: caio</div>
            <div style={{marginBottom: "10px"}}>Demanda: lorem l lorem l lorem llorem llorem llorem llorem llorem llorem llorem llorem llorem l</div>
            <div style={{marginBottom: "10px"}}>Descrição: lorem l lorem l lorem lloremlorem l lorem l lorem lloremlorem l lorem l lorem lloremlorem l lorem l lorem llorem</div>
            <div style={{marginBottom: "10px"}}>Status: Atribuído</div>
        </div>
        </div>
        </Box>
    </Layout>
  )
}

export default Demand