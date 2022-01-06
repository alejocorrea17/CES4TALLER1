import React from "react";

import { useForm, Controller } from "react-hook-form";

import {
    Paper,
    Grid,
    TextField,
    MenuItem,
    Typography,
    Box,
    Button,
} from "@mui/material";

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Paper
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ padding: "15px" }}
        >
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center">
                        <b>Registro</b>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        name="strMovimiento"
                        render={({ field: { name, onChange, value } }) => (
                            <TextField
                                label="Tipo de movimiento"
                                name={name}
                                onChange={(e) => onChange(e)}
                                value={value}
                                helperText={
                                    errors?.strMovimiento?.message ||
                                    "Selecciona el tipo de movimiento"
                                }
                                error={errors?.strMovimiento ? true : false}
                                select
                                variant="standard"
                                fullWidth
                            >
                                <MenuItem value="ingreso">Ingreso</MenuItem>
                                <MenuItem value="gasto">Gasto</MenuItem>
                            </TextField>
                        )}
                        control={control}
                        rules={{
                            required:
                                "Por favor, selecciona el tipo de movimiento",
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        name="strNombre"
                        render={({ field: { name, onChange, value } }) => (
                            <TextField
                                label="Nombre"
                                name={name}
                                onChange={(e) => onChange(e)}
                                value={value}
                                helperText={
                                    errors?.strNombre?.message ||
                                    "Digita el nombre del movimiento"
                                }
                                error={errors?.strNombre ? true : false}
                                variant="standard"
                                fullWidth
                            />
                        )}
                        control={control}
                        rules={{
                            required:
                                "Por favor, digita el nombre del movimiento",
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        name="strCantidad"
                        render={({ field: { name, onChange, value } }) => (
                            <TextField
                                label="Cantidad"
                                name={name}
                                onChange={(e) => onChange(e)}
                                value={value}
                                type="number"
                                helperText={
                                    errors?.strCantidad?.message ||
                                    "Digita el nombre del movimiento"
                                }
                                error={errors?.strCantidad ? true : false}
                                variant="standard"
                                InputProps={{
                                    startAdornment: "$",
                                }}
                                fullWidth
                            />
                        )}
                        control={control}
                        rules={{
                            required:
                                "Por favor, digita el nombre del movimiento",
                            validate: (value) => {
                                const strCantidad = Number(value);

                                if (strCantidad < 1) {
                                    return "La cantidad debe ser mayor a $0";
                                }
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            size="small"
                        >
                            Agregar movimiento
                        </Button>

                        <Button type="button" color="inherit" size="small">
                            Cancelar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Register;
