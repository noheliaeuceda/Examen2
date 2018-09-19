import React from 'react';
import { StyleSheet, Text, View, Image,
   SafeAreaView, ScrollView, } from 'react-native';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import Todo from './components/Todo';
import Nuevo from './components/newToDO';
import Done from './components/completed';

var listTodos = [
  {
    taskTo: '',
    checked: true
  },
  {
    taskTo: '',
    checked: false
    
  }
];

const listlistTodostack = createStackNavigator({
  Todo: {
    screen:() => <Todo todo={listTodos} />,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const DoneStack = createStackNavigator({
  Done: {
    screen: Done,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const NewStack = createStackNavigator({
  New: {
    screen: Nuevo,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const DrawerContent = (props) => (
<ScrollView>
  <Text>Nohelia's List</Text>
  <DrawerItems {...props} />
</ScrollView>
)

export default  App = createDrawerNavigator({
  Inicio: {
    screen: listTodostack,
  },
  NewTodo: {
    screen: NewStack,
  },
  Done: {
    screen: DoneStack,
  }

},{
  contentComponent: props => <DrawerContent {...props} />
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000ccc',
  },
  imagen: {
    height: 200,
    alignItems: 'stretch',
  },
});