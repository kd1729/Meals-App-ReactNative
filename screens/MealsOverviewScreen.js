import { CATEGORIES, MEALS } from "../data/dummyData";

import { useLayoutEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catID) != -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catID).title; 
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
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
