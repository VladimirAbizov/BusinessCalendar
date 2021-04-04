import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../Themed';
import { format } from "date-fns";

interface Props {
    clientName: string,
    date: Date,
    serviceName: string
}

export function TaskPlaneComponent({ clientName, date, serviceName }: Props) {

    var formattedDate = format(new Date(date), "H:mm");
    return (
        <View style={styles.container}>
            <View style={styles.dateWithService}>
                <Text style={styles.serviceName}>{serviceName}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.clientName}>{clientName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#C4C4C4'
    },
    dateWithService: {
    },
    date: {

    },
    serviceName: {

    },
    clientName: {
        marginBottom: 1
    }
});