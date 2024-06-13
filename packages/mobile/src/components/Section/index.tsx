// Section.tsx

import React from "react";
import { View } from "react-native";
import { CustomText } from "../global/CustomText";
import { SectionView } from "./styles";

type SectionProps = {
  title: string;
  items: any[]; // Modificado para aceitar qualquer tipo de dados
};

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <SectionView>
      <CustomText textAlign="left" bold>
        {title}
      </CustomText>
      {items.length > 0 ? (
        renderContent(items)
      ) : (
        <CustomText textAlign="left">Sem informações disponíveis</CustomText>
      )}
    </SectionView>
  );
};

const renderContent = (items: any[]) => {
  return items.map((item, index) => {
    if (Array.isArray(item)) {
      // Se for um array, trata como lista
      return (
        <View key={index}>
          {item.map((subItem: any, subIndex: number) => (
            <CustomText key={`${index}-${subIndex}`} textAlign="left">
              - {subItem}
            </CustomText>
          ))}
        </View>
      );
    } else if (typeof item === "object" && item !== null) {
      // Se for um objeto, exibe os seus campos
      return (
        <View key={index}>
          {Object.keys(item).map((key: string) => (
            <CustomText key={`${index}-${key}`} textAlign="left">
              - {key}: {item[key]}
            </CustomText>
          ))}
        </View>
      );
    } else {
      // Caso contrário, exibe como string simples
      return (
        <CustomText key={index} textAlign="left">
          - {item}
        </CustomText>
      );
    }
  });
};

export default Section;
