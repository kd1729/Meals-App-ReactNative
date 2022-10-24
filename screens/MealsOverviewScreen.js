import { MEALS } from "../data/dummyData";
import { View, FlatList, Text, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catID) != -1; 
  });

  function renderMealItem(itemData) {

    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }


  return (
    <View style={styles.screen}>
        <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />

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
