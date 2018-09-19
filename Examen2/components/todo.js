import React from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : []
    }
   this.onPress = this.onPress.bind(this);
   this.createTo = this.createTo.bind(this);
  }

  
  createTo(detail)
  {
    let list = this.state.todo.slice();
    list.push({checked: false,detail: detail});
    this.setState({
      todo: list
    });

    console.log(this.state.todo);
    this.forceUpdate();
  }

  componentDidMount(){
    this.setState({
        todo: this.props.todo
    })
}


  onPress(key){
    const list = this.state.todo.slice();
    list[key].checked = !list[key].checked;
    this.setState({
      todo: list
    });
  }

  render() {
    return (
      <ScrollView>
          <Text>New Todo</Text>
          {this.state.todo.map((it,i) => {
          return (
            <ListItem key={i} press={() => {this.onPress(i); this.forceUpdate();}} checked={it.checked} detail={it.detail} />
            )
        }) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000fff',
    flexDirection: 'column'
  },
});