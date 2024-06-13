import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthRoutes, HomeRoutes } from "./stack.routes";

export default function Routes() {
  const { authenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authenticated ? <HomeRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
