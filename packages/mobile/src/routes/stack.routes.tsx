import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import LogIn from "../pages/logIn";
import SignUp from "../pages/signUp";
import PersonalData from "../pages/personalData";

// Auth Pages
const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="logIn" component={LogIn} />
      <AuthStack.Screen name="signUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

// Home Pages
const HomeStack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#744abc" },
        headerBackVisible: true,
        title: "My Health",
      }}
    >
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="personalData" component={PersonalData} />
    </HomeStack.Navigator>
  );
}
