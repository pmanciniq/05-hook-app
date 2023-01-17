import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
export const FormWithCustomHook = () => {

    const { formState,username,email,password,onInputChange,onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Formulario con Custom Hook</h1>

            <hr />

            <input
                className="form-control mt-2"
                type='text'
                name='username'
                placeholder='Nombre de usuario'
                value={username}
                onChange={(event) => onInputChange(event)} />

            <input
                className="form-control mt-2"
                type='email'
                name='email'
                placeholder='ejemplo@ejemplo.com'
                value={email}
                onChange={(event) => onInputChange(event)} />

            <input
                className="form-control mt-2"
                type='password'
                name='password'
                placeholder='Ingresa una contraseña'
                value={password}
                onChange={(event) => onInputChange(event)} />

            <button className="btn btn-primary mt-2" onClick={ (event) => onResetForm(event) }>Reset</button>
        </>
    )
}