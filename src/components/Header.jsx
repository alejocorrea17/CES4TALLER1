import React from "react";

import { Typography, Box, Divider, Input } from "@mui/material";

import { Calculate as CalculateIcon } from "@mui/icons-material";

const Header = ({ values, onChange }) => {
    return (
        <div style={{ marginBottom: "50px" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <CalculateIcon fontSize="large" color="info" />
                        <Typography variant="h6">
                            Calculadora de costos
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ marginRight: "15px" }}>
                    Saldo inicial:{" "}
                    <Input
                        name="saldoInicialTotal"
                        style={{
                            color:
                                values.saldoInicialTotal <= 0 ? "red" : "green",
                            maxWidth: "100px",
                        }}
                        onChange={(e) => onChange(e.target.value)}
                        startAdornment="$"
                        value={values.saldoInicialTotal}
                    />
                </Box>

                <Box>
                    Saldo final:{" "}
                    <span
                        style={{
                            color:
                                values.saldoFinalTotal <= 0 ? "red" : "green",
                        }}
                    >{`$ ${values.saldoFinalTotal || ""}`}</span>
                </Box>
            </Box>

            <Divider />
        </div>
    );
};

export default Header;
