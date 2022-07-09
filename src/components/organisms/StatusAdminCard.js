import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import Axios from "axios"
const StatusAdminCard = () => {

    const [status, setStatus] = React.useState("")

    const [postController, setPostController] = React.useState(false)
    const [isRegister, setIsRegister] = React.useState(true)

    const valueChangeHandler = (event) => {
        if ("Cadastrar" === event.target.value) {
            return setIsRegister(true);
        }
        return setIsRegister(false);
    };

    const handleSubmit = () => {
        if(isRegister){
            setPostController(true)
            Axios.post("https://backendjuntosifpb.herokuapp.com/admin/status", {
                title: status
            },{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
                
            )
            .then(() => {
                setPostController(false)
                setIsRegister(false)
                setStatus("")
            })
            .catch(() => {
                setPostController(false)
            }
            )
        }
        else{
            setPostController(true)
                Axios.put("https://backendjuntosifpb.herokuapp.com/admin//:statusName",{
                    
                })
            .then(() => {
                setPostController(false)
                setIsRegister(false)
                setStatus("")
            }
            )
            .catch(() => {
                setPostController(false)
            }
            )
        }
    }

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
                            GERENCIAMENTO DE STATUS
                        </Typography>
                        <FormControl sx={{marginTop: "70px", marginBottom: "30px"}}>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Selecione a ação:
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Docente/Discente"
                                name="radio-buttons-group"
                            onChange={valueChangeHandler}
                            >
                                <FormControlLabel
                                    value="Cadastrar"
                                    control={<Radio />}
                                    label="Cadastrar"
                                />
                                <FormControlLabel
                                    value="Remover"
                                    control={<Radio />}
                                    label="Remover"
                                />
                            </RadioGroup>
                        </FormControl>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "30px",
                            }}
                        >
                            <TextField required={true} label={isRegister ? "Digite o nome do status que deseja adicionar": "Digite o nome do status que deseja remover"}
                            onChange={(event) => setStatus(event.target.value)}
                            />



                        </Box>
                        
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "50px",
                            }}
                        >


                            <LoadingButton variant="contained"  sx={{marginTop: "40px"}}type="submit" loading={postController} onClick={handleSubmit}>
                                Salvar Alterações
                            </LoadingButton>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default StatusAdminCard