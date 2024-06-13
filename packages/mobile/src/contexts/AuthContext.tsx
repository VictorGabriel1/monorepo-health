import React, { createContext, useState } from "react";

type AuthProps = {
  logIn: ({ password, email }: Credentials) => boolean;
  logOut: () => void;
  signUp: ({
    name,
    email,
    password,
    cpf,
    bDay,
    phone,
    emergency_contact,
    health_plan,
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
  bDay: string;
  phone: string;
  health_plan: string;
  emergency_contact: string;
}

export interface User extends Credentials, SignUpCredentials {
  id: Number;
  registerDate: Date;
}

export const AuthContext = createContext<AuthProps>({
  logIn: () => false,
  logOut: () => {},
  signUp: async () => "",
  authenticated: false,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  async function signUp({
    name,
    email,
    password,
    cpf,
    bDay,
    phone,
    emergency_contact,
    health_plan,
  }: SignUpCredentials) {
    return "Usuario criado!";
  }

  function logIn({ email, password }: Credentials) {
    if (email) {
      setAuthenticated(true);
      return true;
    }
    return false;
  }

  function logOut() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
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
