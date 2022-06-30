import React from 'react'
import Layout from "../template/Layout";
import YouTube from 'react-youtube';
import classesCommon from "./stylesheet/Common.module.css";
import { Box, Typography } from '@mui/material';
const Help = () => {

    /* const opts = {height: '200', width: '150'} */

  return (
    <Layout>
        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px"  }} >Este vídeo realiza a demonstração de alteração do nome de usuário no sistema Juntos pelo IFPB.
            </Typography>
            {/* <p>LSAOLOSA</p> */}
            
            <YouTube videoId={"fqb9xgbuqX0"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
            
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Este vídeo realiza a demonstração de como criar demandas no sistema Juntos pelo IFPB.
            </Typography>
            <YouTube videoId={"VswL1OUIdp8"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Este vídeo demonstra o funcionamento da opção "Demandas" para contas não acadêmicas no sistema Juntos pelo IFPB.
            </Typography>
            <YouTube videoId={"0t9t4AfdFEc"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Neste vídeo é demonstrado o uso da função de recuperação de senha no sistema Juntos pelo IFPB.
            </Typography>
            <YouTube videoId={"Wseysgb1wfU"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Demonstração da opção "Minhas contribuições" que consiste na listagem de demandas reportadas pelo próprio usuário.
            </Typography>
            <YouTube videoId={"QBLnKdkHSHU"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Neste vídeo é abordado o funcionamento do ranking do sistema Juntos pelo IFPB com seus respectivos filtros e detalhes.
            </Typography>
            <YouTube videoId={"RqgrZI80y68"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Demonstração de funcionamento da aba "Contato".
            </Typography>
            <YouTube videoId={"ozoUAKd1taM"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Este vídeo aborda diretamente como desconectar da sua conta no sistema Juntos pelo IFPB.
            </Typography>
            <YouTube videoId={"iriCZ3N5RLo"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Neste vídeo é abordada a realização do registro de usuário e suas particularidades.
            </Typography>
            <YouTube videoId={"L7QJOS0P7d4"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        <div className={classesCommon.form} style={{marginBottom: "30px"}}>
        <Box
        sx={{padding: "30px 0px", width:{ sm: "600px", xs: "300px"}}} >
            <Typography variant='h7' style={{ lineHeight: "22px" }}>Demonstração de troca de senha no sistema Juntos pelo IFPB.
            </Typography>
            <YouTube videoId={"aFn032j_ZxA"} opts={{height: "350px", width: "100%"}} style={{marginTop: "20px"}}/>
        </Box>
        </div>

        
        
    </Layout>
  )
}

export default Help