import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Icon } from '../components/icon';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabAddingScreen from '../screens/TabAddingScreen';
import TabCalendarScreen from '../screens/TabCalendarScreen';
import TabServicesScreen from '../screens/TabServicesScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { BottomTabParamList, TabAddingParamList, TabCalendarParamList, TabServicesParamList, TabSettingsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabCalendar"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabCalendar"
        component={TabCalendarNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          tabBarLabel: "Календарь"
        }}
      />
      <BottomTab.Screen
        name="TabAdding"
        component={TabAddingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="add" color={color} />,
          tabBarLabel: "Добавить"
        }}
      />
      <BottomTab.Screen
        name="TabServices"
        component={TabServicesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="services" color={color} />,
          tabBarLabel: "Услуги"
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
          tabBarLabel: "Настройки"
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabCalendarStack = createStackNavigator<TabCalendarParamList>();

function TabCalendarNavigator() {
  return (
    <TabCalendarStack.Navigator>
      <TabCalendarStack.Screen
        name="TabCalendarScreen"
        component={TabCalendarScreen}
        options={{ headerTitle: 'Календарь' }}
      />
    </TabCalendarStack.Navigator>
  );
}

const TabAddingStack = createStackNavigator<TabAddingParamList>();

function TabAddingNavigator() {
  return (
    <TabAddingStack.Navigator>
      <TabAddingStack.Screen
        name="TabAddingScreen"
        component={TabAddingScreen}
        options={{ headerTitle: 'Tab Adding Title' }}
      />
    </TabAddingStack.Navigator>
  );
}

const TabServicesStack = createStackNavigator<TabServicesParamList>();

function TabServicesNavigator() {
  return (
    <TabServicesStack.Navigator>
      <TabServicesStack.Screen
        name="TabServicesScreen"
        component={TabServicesScreen}
        options={{ headerTitle: 'Tab Services Title' }}
      />
    </TabServicesStack.Navigator>
  );
}

const TabSettingsStack = createStackNavigator<TabSettingsParamList>();

function TabSettingsNavigator() {
  return (
    <TabSettingsStack.Navigator>
      <TabSettingsStack.Screen
        name="TabSettingsScreen"
        component={TabSettingsScreen}
        options={{ headerTitle: 'Tab Settings Title' }}
      />
    </TabSettingsStack.Navigator>
  );
}