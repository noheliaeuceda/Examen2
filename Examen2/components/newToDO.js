import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Nuevo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>New Todo</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000fff',
    flexDirection: 'column',
  },
});