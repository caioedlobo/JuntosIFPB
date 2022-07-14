import { LoadingButton } from '@mui/lab'
import { Alert, Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Axios from 'axios'

const SectorAdminCard = () => {

    const [isRegister, setIsRegister] = React.useState(true)
    const [sector, setSector] = React.useState("")
    const [emailSector, setEmailSector] = React.useState("")
    const [postController, setPostController] = React.useState(false)

    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenError(false);
        setOpenInfo(false);
    };

    const valueChangeHandler = (event) => {
        if ("Cadastrar" === event.target.value) {
            return setIsRegister(true);
        }
        return setIsRegister(false);
    };

    const handleSubmit = () => {
        console.log(isRegister, sector.length, emailSector.length)

        if (!isRegister && sector.length === 0) {
            setOpenInfo(true);
        }

        else if (isRegister) {
            if (sector.length === 0 || emailSector.length === 0) {
                setOpenInfo(true);
            }
            else {
                setPostController(true);
                Axios.post("https://backendjuntosifpb.herokuapp.com/admin/sector", {
                    title: sector,
                    email: emailSector,
                }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } }
                ).then(() => {
                    setOpen(true)
                    setPostController(false)

                }).catch(() => {
                    setOpenError(true)
                    setPostController(false)
                })
            }
        }

        else {
            setPostController(true);
            Axios.delete(`https://backendjuntosifpb.herokuapp.com/admin/deleteSector`,
                { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } }
            ).then(() => {
                setOpen(true)
                setPostController(false)
            }).catch(() => {
                setOpenError(true)
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
                            GERENCIAMENTO DE SETORES
                        </Typography>


                        <FormControl sx={{ marginTop: "70px", marginBottom: "30px" }}>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Selecione a ação:
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Cadastrar"
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

                            <TextField required={true} label={isRegister === false ? "Digite o nome do setor que deseja remover" : "Digite o nome do setor que deseja adicionar"}
                                onChange={(event) => setSector(event.target.value)}
                            />
                            {isRegister ? <TextField required={true} label="Digite um email para ser vinculado a esse setor"
                                onChange={(event) => setEmailSector(event.target.value)}
                            /> : null}
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


                            <LoadingButton variant="contained" type="submit" loading={postController} onClick={handleSubmit}
                                sx={{ marginTop: "40px" }}>
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

export default SectorAdminCard