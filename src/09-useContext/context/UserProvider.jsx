import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//     id: 123,
//     name: 'Paolo',
//     email: 'email@ejemplo.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return <UserContext.Provider value={{ user,setUser }}>{children}</UserContext.Provider>;
};
