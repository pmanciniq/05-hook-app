import { Hijo } from './Hijo';
import { useState,useCallback } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);
    //Para resolver el ejercicio utilice useCallback
    //e incorporé la funcionalidad de la arrow function
    // "incrementar()", de esta manera, paso el 
    // valor como parametro del callback y el num como
    //parametro del setValor.
    const incrementar = useCallback(
    (valor) => {
        setValor( (num) => valor + num )
    },[]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
