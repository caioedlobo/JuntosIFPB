import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, TextField, Stack, Snackbar, Alert } from '@mui/material'
import React from 'react'
import InputMask from "react-input-mask";
import { LoadingButton } from '@mui/lab';
import Axios from "axios"

const OutsourcedCard = () => {



    const [isOutsourced, setIsOutsourced] = React.useState(true);
    const [isRegister, setIsRegister] = React.useState(true);
    const [sector, setSector] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cpfValue, setCpfValue] = React.useState("");
    const [postController, setPostController] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);
    console.log(isOutsourced)
    console.log(isRegister)
    console.log(cpfValue.length)
    console.log(sector.length)
    const valueChangeHandler = (event) => {
        if ("Terceirizado" === event.target.value) {
            return setIsOutsourced(true);
        }
        return setIsOutsourced(false);
    };

    const actionChangeHandler = (event) => {
        if ("Cadastrar" === event.target.value) {
            return setIsRegister(true);
        }
        return setIsRegister(false);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenError(false);
        setOpenInfo(false);
    };

    const handleSubmit = () => {
        if (isRegister) { //cadastrar
            if (isOutsourced) {       //terceirizado
                if (cpfValue.length !== 0 && sector.length !== 0) { //cpf e setor preenchidos
                    setPostController(true);
                    Axios.post("https://backendjuntosifpb.herokuapp.com/outsourced", {
                        cpf: cpfValue,
                        sector: sector
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(() => {
                        setOpen(true);
                        setPostController(false);
                        
                    })
                        .catch(() => {
                            setOpenError(true);
                            setPostController(false);

                        })
                }

                else {       //sem cpf ou sem setor
                    setOpenInfo(true);
                }

            }
            else {       // tec administrativo
                if (email.length !== 0 && sector.length !== 0) { //email e setor preenchidos
                    setPostController(true);
                    Axios.post("https://backendjuntosifpb.herokuapp.com/outsourced", {
                        email: email,
                        sector: sector,
                        cpf: ""
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(() => {
                        setOpen(true);
                        setPostController(false);
                        setCpfValue("");
                        setSector("");
                    })
                        .catch(() => {
                            setOpenError(true);
                            setPostController(false);

                        })
                }
                else {       //sem email ou sem setor
                    setOpenInfo(true);
                }
            }
        }
        else {       //remover
            if (isOutsourced) {       //terceirizado
                if (cpfValue.length !== 0) { //cpf  preenchido
                    setPostController(true);
                    Axios.delete(`https://backendjuntosifpb.herokuapp.com/outsourced/deleteCpf/${cpfValue}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(() => {
                            setOpen(true);
                            setPostController(false);
                            
                        })
                        .catch(() => {
                            setOpenError(true);
                            setPostController(false);

                        })
                }

                else {       //sem cpf
                    setOpenInfo(true);
                }

            }
            else {       // tec administrativo
                if (email.length !== 0) { //email preenchido
                    setPostController(true);
                    Axios.delete(`https://backendjuntosifpb.herokuapp.com/outsourced/deleteEmail/${email}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(() => {
                            setOpen(true);
                            setPostController(false);
                          
                        })
                        .catch(() => {
                            setOpenError(true);
                            setPostController(false);

                        })
                }
                else {       //sem email
                    setOpenInfo(true);
                }
            }

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
                            CADASTRO DE SERVIDORES
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}>

                            <FormControl sx={{ marginTop: "70px", marginBottom: "30px", marginRight: "20px" }}>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Selecione uma ação:
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={actionChangeHandler}
                                    defaultValue="Cadastrar"

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
                            <FormControl sx={{ marginTop: "70px", marginBottom: "30px" }}>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Selecione o tipo de servidor:
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={valueChangeHandler}
                                    defaultValue="Terceirizado"

                                >
                                    <FormControlLabel
                                        value="Terceirizado"
                                        control={<Radio />}
                                        label="Terceirizado"
                                    />
                                    <FormControlLabel
                                        value="Tec Administrativo"
                                        control={<Radio />}
                                        label="Téc Administrativo"
                                    />
                                </RadioGroup>
                            </FormControl>


                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "30px",
                            }}
                        >
                            {/* <TextField required={true} label={isOutsourced === false ? "Digite o email do Téc Administrativo que deseja adicionar" : "Digite o CPF do terceirizado que deseja adicionar"}
                                onChange={(event) => setServer(event.target.value)}
                            /> */}
                            {isOutsourced ? (
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",

                                    marginTop: "20px",
                                    width: { md: "70%", xs: "90%" },
                                    gap: "30px",
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignSelf: "center",
                                        width: { md: "45%", xs: "40%" },

                                    }}>
                                        <InputMask

                                            mask="999.999.999-99"
                                            value={cpfValue}
                                            /* maskChar=" " */
                                            alwaysShowMask={true}
                                            disabled={false}

                                            onChange={(e) => {
                                                setCpfValue(e.target.value);
                                                /*                  setError(false);
                                                                 setHelperText(""); */
                                            }}
                                        >
                                            {() => (
                                                <TextField
                                                    variant="outlined"
                                                    label="CPF do terceirizado"
                                                    required
                                                /*                                         error={error}
                                                                                        helperText={helperText}
                                                                                        color={numbers.includes(cpfValue[13]) ? "success" : null} */
                                                />
                                            )}
                                        </InputMask>
                                    </Box>
                                    {isRegister ? <TextField required={true} label="Digite o setor do Terceirizado"
                                        onChange={(event) => setSector(event.target.value)} /> : null}
                                </Box>


                            )
                                : <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "20px",
                                    width: { md: "70%", xs: "90%" },
                                    gap: "30px",
                                }}>
                                    <TextField required={true} label="Digite o email do Téc Administrativo que deseja adicionar"
                                        onChange={(event) => setEmail(event.target.value)} />

                                    {isRegister ? <TextField required={true} label="Digite o setor do Téc Administrativo"
                                        onChange={(event) => setSector(event.target.value)} /> : null}


                                </Box>}

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

                            <LoadingButton variant="contained" sx={{ marginTop: "40px" }} type="submit" loading={postController} onClick={handleSubmit}>
                                Salvar Alterações
                            </LoadingButton>
                        </Box>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Ação realizada com sucesso!
                                </Alert>
                            </Snackbar>
                        </Stack>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    Erro ao realizar ação. Tente novamente.
                                </Alert>
                            </Snackbar>
                        </Stack>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                    Preencha todos os campos!
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default OutsourcedCard