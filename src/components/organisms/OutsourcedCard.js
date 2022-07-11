import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, TextField } from '@mui/material'
import React from 'react'
import { theme } from '../../theme';

const OutsourcedCard = () => {

    const sx = {
        table: {
            minWidth: "300px",
        },
        tableContainer: {
            borderRadius: "5px",
            margin: "10px 0",
            maxWidth: "600px",
        },
        tableHeaderCell: {
            fontWeight: "bold",
            background: "#2d7e27",
            /* color: theme.palette.getContrastText(theme.palette.primary.dark), */
            //  color: theme.palette.common.dark,
            color: "white",
            textAlign: "center !important",
        },
        tableCell: {
            textAlign: "center !important",
        },
        avatar: {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.getContrastText(theme.palette.grey[400]),
        },
        name: {
            fontWeight: "bold",
            color: theme.palette.secondary.dark,
        },
        status: {
            fontWeight: "bold",
            color: theme.palette.common.white,
            backgroundColor: "grey",
            borderRadius: "8px",
            padding: "2px 6px",
            display: "flex",

            justifyContent: "center",


        },
    };

    const [isOutsourced, setIsOutsourced] = React.useState(false);
    const [server, setServer] = React.useState("");
    const valueChangeHandler = (event) => {
        if ("Terceirizado" === event.target.value) {
            return setIsOutsourced(true);
        }
        return setIsOutsourced(false);
    };
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

                        <FormControl sx={{ marginTop: "70px", marginBottom: "30px" }}>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Selecione uma opção:
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
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: { md: "70%", xs: "90%" },
                                gap: "30px",
                            }}
                        >
                            <TextField required={true} label={isOutsourced === false ? "Digite o email do Téc Administrativo que deseja adicionar" : "Digite o CPF do terceirizado que deseja adicionar"}
                                onChange={(event) => setServer(event.target.value)}
                            />



                        </Box>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default OutsourcedCard