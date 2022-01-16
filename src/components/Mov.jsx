import React, { Fragment, useState } from "react";

import { Box, Paper, IconButton, Input } from "@mui/material";

import NumberFormat from "react-number-format";

import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import { ModalEdit } from "./modalEdit";
import { ModalDelete } from "./modalDelete";

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
                                {
                                    <NumberFormat
                                        prefix="$"
                                        value={values.strCantidad}
                                        disabled
                                        thousandSeparator
                                        customInput={Input}
                                        style={{
                                            WebkitTextFillColor:
                                                "white !important",
                                            color: "white !important",
                                            maxWidth: "100px",
                                        }}
                                    />
                                }
                            </span>
                        </p>
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    );
};

export default Mov;
