import React, { Fragment, useState } from "react";

import { Box, Paper, IconButton, Input } from "@mui/material";

import NumberFormat from "react-number-format";

import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import { ModalEdit } from "./Editar";
import { ModalDelete } from "./Borrar";

const Mov = ({ values }) => {
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const [openModalDelete, setOpenModalDelete] = useState(false);

    const handlerChangeOpenModalEdit = () => {
        setOpenModalEdit(!openModalEdit);
    };

    const handlerChangeOpenModalDelete = () => {
        setOpenModalDelete(!openModalDelete);
    };

    return (
        <Fragment>
            <ModalEdit
                open={openModalEdit}
                onClose={handlerChangeOpenModalEdit}
                values={values}
            />

            <ModalDelete
                open={openModalDelete}
                onClose={handlerChangeOpenModalDelete}
                id={values.id}
            />

            <Paper>
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
                            padding: "15px",
                        }}
                    >
                        <IconButton
                            color="error"
                            onClick={() => handlerChangeOpenModalDelete()}
                        >
                            <DeleteIcon />
                        </IconButton>

                        <IconButton
                            color="success"
                            onClick={() => handlerChangeOpenModalEdit()}
                        >
                            <EditIcon />
                        </IconButton>

                        <p
                            style={{
                                fontSize: "16px",
                                fontFamily:
                                    '"Roboto","Helvetica","Arial",sans-serif',
                            }}
                        >
                            {values.strNombre}
                        </p>
                    </Box>

                    <Box
                        sx={{
                            padding: "15px",
                        }}
                    >
                        <NumberFormat
                            prefix="$"
                            value={values.strCantidad}
                            disabled
                            thousandSeparator
                            customInput={Input}
                            style={{
                                maxWidth: "100px",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            backgroundColor:
                                values.strMovimiento === "gasto" ? "red" : "green",
                            height: "94px",
                            width: "8px",
                            borderRadius: "0px 5px 5px 0px",
                        }}
                    ></Box>
                </Box>
            </Paper>
        </Fragment>
    );
};

export default Mov;
