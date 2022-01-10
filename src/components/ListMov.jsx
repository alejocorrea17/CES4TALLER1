import React, { useContext } from "react";

import {
    Grid,
    Paper,
    Typography,
    Box,
    TextField,
    FormControl,
    FormGroup,
    Checkbox,
    FormLabel,
    FormControlLabel,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { Context } from "../app";

import Mov from "./Mov";

const ListMov = () => {
    const { objMovimientos } = useContext(Context);

    return (
        <Paper
            sx={{
                padding: "15px",
            }}
        >
            <Grid container direcion="row" spacing={3}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle2">
                                <b>Listado de Movimientos</b>
                            </Typography>
                        </Box>

                        <Box>
                            <p>
                                <span
                                    style={{
                                        backgroundColor: "blue",
                                        color: "white",
                                        padding: "5px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    {objMovimientos.length}
                                </span>
                            </p>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={7}>
                    <TextField
                        label="Buscador"
                        variant="standard"
                        InputProps={{
                            startAdornment: <SearchIcon />,
                        }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={5}>
                    <FormControl>
                        <FormLabel>Tipo de movimiento</FormLabel>

                        <FormGroup row>
                            <FormControlLabel
                                label="Todos"
                                control={<Checkbox />}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                label="Ingreso"
                                control={<Checkbox />}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                label="Gasto"
                                control={<Checkbox />}
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>

                {objMovimientos.map((e) => (
                    <Grid item xs={12} key={e.id}>
                        <Mov values={e} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ListMov;
