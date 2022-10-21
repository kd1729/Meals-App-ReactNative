import {Meals} from '../data/dummyData';
import {View, Text, StyleSheet} from 'react-native';

function MealsOverviewScreen(){
    return(
        <View style={styles.screen}>
            <Text>The Meals Overview Screen!</Text>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:16,
        justifyContent: 'center',
        alignItems: 'center'
    }
});