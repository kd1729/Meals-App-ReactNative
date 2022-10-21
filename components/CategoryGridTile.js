import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({title, color, onPressFxn}) {
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{ color: "#ccc" }} style={
        ({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
      
         onPress={onPressFxn}

      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: "hidden",
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});