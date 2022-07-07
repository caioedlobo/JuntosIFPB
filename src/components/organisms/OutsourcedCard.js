import { Box, Card, Typography } from '@mui/material'
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

            /* width:"40px",
            backgroundr: "blue" */
        },
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
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default OutsourcedCard