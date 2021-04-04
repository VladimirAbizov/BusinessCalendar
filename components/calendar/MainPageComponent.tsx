import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { environmentSettings } from '../../environments/environments';
import { reducer } from '../../reducers/tasks';

import { View, Text } from "../Themed";
import SwitchingMonthComponent from './SwitchingMonthComponent';
import { TaskPlaneComponent } from './TaskPlaneComponent';


export default function MainPageComponent() {
    const [months, setMonths] = useState([]);

    const [{ isLoading, error, data }, dispatch] = useReducer(reducer, { isLoading: false });


    //load tasks for user 
    useEffect(() => {
        async function fetchPosts() {
            dispatch({ type: 'LOADING' });

            try {
                const response = await fetch(
                    environmentSettings.api + '/tasks'
                )
                const tasks = await response.json();
                dispatch({ type: 'SUCCESS', results: tasks })
            } catch (e) {
                dispatch({ type: 'FAILURE', error: e })
            }
        }

        fetchPosts();
    }, [])


    var date: Date;
    var daysInThisMonth: any;
    var daysInLastMonth: any;
    var daysInNextMonth: any;
    var monthNames: string[];
    var currentMonth: any;
    var currentYear: any;
    var currentDate: any;
    var selectedDay: any;
    //var selectedTasks: Array <Task> = new Array<Task>();
    var isSelected: any;

    const getDaysOfMonth = () => {
        daysInThisMonth = new Array();
        daysInLastMonth = new Array();
        daysInNextMonth = new Array();
        currentMonth = monthNames[date.getMonth()];
        currentYear = date.getFullYear();
        if (date.getMonth() === new Date().getMonth()) {
            currentDate = new Date().getDate();
        } else {
            currentDate = 999;
        }
    }

    return (
        <View style={styles.container}>
            <SwitchingMonthComponent />
            <FlatList style={styles.taskList}
                keyExtractor={(task) => task.id}
                data={data}
                renderItem={({ item: { id, clientName, date, service } }) => (
                    <View key={id}>
                        <TaskPlaneComponent clientName={clientName} date={date} serviceName={service.name}></TaskPlaneComponent>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    taskList: {
    }
});