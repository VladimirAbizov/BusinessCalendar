import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MainPageComponent from '../components/calendar/MainPageComponent';

import { Text, View } from '../components/Themed';

interface Props {
  title: string
}

export function HeaderTitle({ title }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


export default function TabCalendarScreen() {
  return (
    <View style={styles.container}>
      <HeaderTitle title="Календарь"></HeaderTitle>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MainPageComponent></MainPageComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
  header: {
    flexDirection: 'row',
  },
  title: {

    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
