import React from "react";
import { Container } from "../../components/global/Container";
import { CustomText } from "../../components/global/CustomText";
import { ScrollView, StyleSheet, View } from "react-native";
import Section from "../../components/Section";
import { Content } from "./styles";

export default function PersonalData() {
  return (
    <Container backgroundColor="#fff">
      <Content>
        <CustomText fontSize={24} textAlign="left" bold>
          Nara Caproni Meu Amor
        </CustomText>
        <Section title="Seção" items={["ALo", "Alo 2"]} />
        <Section title="Seção" items={["ALo"]} />
        <Section title="Seção" items={["ALo"]} />
        <Section title="Seção" items={["ALo"]} />
        <Section title="Seção" items={["ALo"]} />
      </Content>
    </Container>
  );
}
