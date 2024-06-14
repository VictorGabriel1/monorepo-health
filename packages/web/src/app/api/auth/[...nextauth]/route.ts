import { encode, decode } from "next-auth/jwt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/services/api";
import { cookies } from "next/headers";

const secret = process.env.NEXTAUTH_SECRET; // Certifique-se de definir a chave secreta no seu .env

export const authOptions = NextAuth({
  secret,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Device ID",
          type: "text",
          placeholder: "Your email",
        },
        password: {
          label: "Device Key",
          type: "text",
          placeholder: "Your password",
        },
      },
      authorize: async (credentials) => {
        return api
          .post("/doctors/login", credentials)
          .then((doctor) => {
            console.log(doctor.data);
            cookies().set("session.id", doctor.data.id);
            return {
              id: doctor.data.id,
              name: doctor.data.name,
              email: doctor.data.email,
            };
          })
          .catch((e) => {
            console.log("error: " + Object.values(e.response.data));
            return null;
          });
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 360 * 24 * 60 * 60, // 1 day
  },
  jwt: {
    encode,
    decode,
  },
  callbacks: {
    async session({ session, token }) {
      // Incluir informações adicionais na sessão
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
        },
      };
    },
    async jwt({ token, user }) {
      // if (user) {
      // Incluir informações adicionais no token JWT
      token.id = user.id;
      token.name = user.name;
      token.email = user.email;
      // }
      return token;
    },
  },
  cookies: {
    sessionToken: {
      name: "session",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: "/sigin", // Defina a página de login se necessário
    newUser: "/",
  },
});

export { authOptions as GET, authOptions as POST };
