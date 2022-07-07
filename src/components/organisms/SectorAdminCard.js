import { LoadingButton } from '@mui/lab'
import { Box, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import Axios from 'axios'

const SectorAdminCard = () => {

    const handleSubmit = () => {
        if (addSector.length !== 0 && emailSector.length !== 0 && removeSector.length === 0){
            setPostController(true);
            Axios.post("https://backendjuntosifpb.herokuapp.com/admin/sector", {
                title: addSector,
                email: emailSector,
            },{headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}}
            ).then(() => {
                setPostController(false)
                
            }).catch((response) => {
                setPostController(false)
            })
        }

        else if(removeSector !== 0 && emailSector.length === 0 && addSector.length === 0){
            setPostController(true);
            Axios.delete(`https://backendjuntosifpb.herokuapp.com/admin/sector/${removeSector}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}}
            ).then(() => {
                setPostController(false)
            }).catch((response) => {
                setPostController(false)
            }
            )
        }
    }

    const [addSector, setAddSector] = React.useState("")
    const [emailSector, setEmailSector] = React.useState("")
    const [removeSector, setRemoveSector] = React.useState("")
    const [postController, setPostController] = React.useState(false)
    
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    width: "85vw",
                    maxWidth: "700px",
                    justifyContent: "center",
                }}
            >
                <Card
                    style={{
                        height: "600px",
                        minHeight: "500px",
                        display: "flex",
                        flex: "7.5",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            style={{
                                fontSize: "22px",
                                marginBottom: "20px",
                                marginTop: "20px",
                            }}
                        >
                            GERENCIAMENTO DE SETORES
                        </Typography>

                        <Typography variant="h6" style={{marginTop: "10px"}}>Cadastro de Setor</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "30px",
                            }}
                        >
                            
                            <TextField required={true} label="Digite o nome do setor que deseja adicionar"
                            onChange={(event) => setAddSector(event.target.value)}
                            />
                            <TextField required={true} label="Digite um email para ser vinculado a esse setor"
                            onChange={(event) => setEmailSector(event.target.value)}
                            />
                        </Box>

                        <Typography variant="h6" style={{marginTop: "30px"}}>Remoção de Setor</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "50px",
                            }}
                        >
                            
                            <TextField required={true} label="Digite o nome do setor que deseja excluir"
                            onChange={(event) => setRemoveSector(event.target.value)}
                            />
                            <LoadingButton variant="contained" type="submit" loading={postController} onClick={handleSubmit}>
                Salvar Alterações
              </LoadingButton>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default SectorAdminCard