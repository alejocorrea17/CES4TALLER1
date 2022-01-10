import { Box, Paper, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";

import React from "react";

const Mov = ({ values }) => {
    return (
        <Paper sx={{ padding: "10px" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <IconButton color="error">
                        <DeleteIcon />
                    </IconButton>

                    <IconButton color="success">
                        <EditIcon />
                    </IconButton>

                    <p
                        style={{
                            fontSize: "18px",
                        }}
                    >
                        {values.strNombre}
                    </p>
                </Box>

                <Box>
                    <p>
                        <span
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor:
                                    values.strMovimiento === "gasto"
                                        ? "red"
                                        : "green",
                                borderRadius: "22%",
                                padding: "5px 15px 5px",
                                fontSize: "16px",
                            }}
                        >
                            {`$ ${values.strCantidad}`}
                        </span>
                    </p>
                </Box>
            </Box>
        </Paper>
    );
};

export default Mov;
