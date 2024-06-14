"use client";

import { Box, Content, OptionBox } from "./styles";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DefaultButton from "@/components/default/button";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <Content>
      <Box>
        <OptionBox href="/exam">
          <NoteAddIcon sx={{ height: 250, width: 250 }} />
          <span>Fazer Relatorio</span>
        </OptionBox>
        <OptionBox href="/pacient">
          <AccountBoxIcon sx={{ height: 250, width: 250 }} />
          <span>Verificar Info Paciente</span>
        </OptionBox>
      </Box>
      <DefaultButton onClick={() => signOut({ callbackUrl: "/sigin" })}>
        Desconectar
      </DefaultButton>
    </Content>
  );
}
