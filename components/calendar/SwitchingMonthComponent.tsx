import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, TouchableOpacity } from "../Themed";

export default function SwitchingMonthComponent() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goToLastMonth()}>
                <Text>{'<'}</Text>
            </TouchableOpacity>
            <Text>{'month'}</Text>
            <TouchableOpacity onPress={() => goToNextMonth()}>
                <Text>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const goToLastMonth = () => {

};

const goToNextMonth = () => {

};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});