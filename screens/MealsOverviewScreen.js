import { Meals } from "../data/dummyData";
import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen({route}) {

    const catID = route.params.categoryId;

  return (
    <View style={styles.screen}>
      <Text>
        {catID}
      </Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize: 28,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
