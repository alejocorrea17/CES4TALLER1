import React, { useContext, useState } from "react";

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

    
    const [objFilterMovimientos, setObjMovimientosFilter] = useState(objMovimientos);


    const filterTipoMovimientos = (value) => {
        if(value === 'todos'){
            setObjMovimientosFilter(objMovimientos);
        }
        const arrAux = objMovimientos.filter(data => data.strMovimiento === value);
        setObjMovimientosFilter(arrAux);
    };

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
                                    {objFilterMovimientos.length}
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
                                onClick={() => filterTipoMovimientos('todos')}
                                control={<Checkbox />}
                                labelPlacement="end"
                                defaultChecked="true"
                            />
                            <FormControlLabel
                                label="Ingreso"
                                onClick={() => filterTipoMovimientos('ingreso')}
                                control={<Checkbox />}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                label="Gasto"
                                onClick={() => filterTipoMovimientos('gasto')}
                                control={<Checkbox />}
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>

                {objFilterMovimientos.map((e) => (
                    <Grid item xs={12} key={e.id}>
                        <Mov values={e} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ListMov;
