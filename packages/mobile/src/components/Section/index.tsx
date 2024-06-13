import { View } from "react-native";
import { CustomText } from "../global/CustomText";
import { SectionView } from "./styles";

type SectionProps = {
  title: string;
  items: string[];
};

export default function Section({ title, items }: SectionProps) {
  return (
    <SectionView>
      <CustomText textAlign="left" bold>
        {title}
      </CustomText>
      <CustomText textAlign="left">
        {items.map(
          (item, index) => `- ${item}${index !== items.length - 1 ? "\n" : ""}`
        )}
      </CustomText>
    </SectionView>
  );
}
