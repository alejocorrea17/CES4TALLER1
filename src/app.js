import { createContext, useState } from "react";

import { toast } from "react-hot-toast";

import { Container } from "@mui/material";

import Header from "./components/Header";

const Context = createContext();

export const App = ({ children }) => {
    const [objSaldo, setObjSaldo] = useState({
        saldoInicialTotal: null,
        saldoFinalTotal: null,
    });

    const handlerChangeSaldoInicial = (value) => {
        if (value < 1) {
            toast.error("El valor minimo debe ser $ 1");
        } else {
            setObjSaldo((prevState) => ({
                saldoInicialTotal: value,
                saldoFinalTotal:
                    prevState.saldoFinalTotal === null
                        ? value
                        : prevState.saldoFinalTotal,
            }));
        }
    };

    return (
        <Context.Provider value={(objSaldo, handlerChangeSaldoInicial)}>
            <Container>
                <Header
                    values={objSaldo}
                    onChange={handlerChangeSaldoInicial}
                />
                {children}
            </Container>
        </Context.Provider>
    );
};
