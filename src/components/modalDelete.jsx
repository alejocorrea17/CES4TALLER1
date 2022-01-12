import React, { useContext } from "react";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

import { Context } from "../app";
import toast from "react-hot-toast";

export const ModalDelete = ({ open, onClose, id }) => {
    const { deleteMovimiento } = useContext(Context);

    const onSubmit = (id) => {
        deleteMovimiento(id);

        toast.success("El movimiento fue eliminado con éxito");

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>¿Está seguro de eliminar esté movimiento?</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Recuerda que la acción es irreversible.
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => onSubmit(id)} color="error">
                    eliminar
                </Button>

                <Button onClick={() => onClose()} color="inherit">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
