import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />

          <Stack.Screen name="MealsDetails" component={MealDetailScreen} />

          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
