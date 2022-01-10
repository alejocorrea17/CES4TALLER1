import { createContext, useState } from "react";

import { toast } from "react-hot-toast";

import { Container } from "@mui/material";

import Header from "./components/Header";

export const Context = createContext();

export const App = ({ children }) => {
    const [objSaldo, setObjSaldo] = useState({
        saldoInicialTotal: null,
        saldoFinalTotal: null,
    });

    const [objMovimientos, setObjMovimientos] = useState([]);

    const handlerChangeMovimiento = (value) => {
        const arrAux = objMovimientos;

        arrAux.push(value);

        setObjMovimientos(arrAux);

        const { strMovimiento, strCantidad } = value;

        let saldoFinalTotal = objSaldo.saldoFinalTotal;

        if (strMovimiento === "gasto") {
            saldoFinalTotal = (
                Number(saldoFinalTotal) - Number(strCantidad)
            ).toString();
        }

        if (strMovimiento === "ingreso") {
            saldoFinalTotal = (
                Number(saldoFinalTotal) + Number(strCantidad)
            ).toString();
        }

        setObjSaldo((prevState) => ({
            ...prevState,
            saldoFinalTotal,
        }));
    };

    const handlerChangeSaldoInicial = (value) => {
        if (value < 1) {
            toast.error("El valor minimo debe ser $ 1");
        }

        setObjSaldo((prevState) => ({
            saldoFinalTotal:
                objMovimientos.length === 0 ? value : prevState.saldoFinalTotal,
            saldoInicialTotal: value,
        }));
    };

    return (
        <Context.Provider
            value={{
                objSaldo,
                handlerChangeSaldoInicial,
                objMovimientos,
                handlerChangeMovimiento,
            }}
        >
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
