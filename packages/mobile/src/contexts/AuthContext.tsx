import React, { createContext, useState } from "react";
import api from "../services/api";
import { UsersEntity } from "../@types/users";

type AuthProps = {
  logIn: ({ password, email }: Credentials) => boolean;
  logOut: () => void;
  user: UsersEntity | undefined;
  signUp: ({
    name,
    email,
    password,
    cpf,
    birthdate,
    phoneNumber,
    healthPlan,
  }: SignUpCredentials) => Promise<string>;
  authenticated: boolean;
};

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends Credentials {
  name: string;
  cpf: string;
  birthdate: string;
  phoneNumber: string;
  healthPlan: string;
}

export const AuthContext = createContext<AuthProps>({
  logIn: () => false,
  logOut: () => {},
  user: undefined,
  signUp: async () => "",
  authenticated: false,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UsersEntity | undefined>(undefined);

  async function signUp(data: SignUpCredentials) {
    const [day, month, year] = data.birthdate.split("/");
    data.birthdate = `${year}-${month}-${day}`;
    api
      .post("/users", data)
      .then((user) => {
        setAuthenticated(true);
        setUser(user.data);
        console.log(user.data);
      })
      .catch((e) => console.log("error: " + Object.values(e.response.data)));
    return "User created!";
  }

  function logIn(data: Credentials) {
    api
      .post("/users/login", data)
      .then((user) => {
        console.log(user.data);
        setUser(user.data);
        setAuthenticated(true);
      })
      .catch((e) => console.log("error: " + Object.values(e.response.data)));
    return true;
  }

  function logOut() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
        signUp,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
