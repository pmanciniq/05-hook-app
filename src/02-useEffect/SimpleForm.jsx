import { useState, useEffect } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "ejemplo@ejemplo.com",
  });
  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect se llamó');
  }, []); //un array vacío en el useEffect significa que solo se ejecute 1 vez.

  useEffect(() => {
    // console.log('formState cambió');
  }, [formState]); //un array vacío en el useEffect significa que solo se ejecute 1 vez.
  useEffect(() => {
    // console.log('email cambió');
  }, [email]); //un array vacío en el useEffect significa que solo se ejecute 1 vez.

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        className="form-control mt-2"
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(event) => onInputChange(event)}
      />
      <input
        className="form-control mt-2"
        type="email"
        name="email"
        placeholder="ejemplo@ejemplo.com"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
