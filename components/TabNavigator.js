import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChildrenScreen from '../screens/ChildrenScreen';
import LiveTestScreen from '../screens/LiveTestScreen'


export const TabNavigator = createBottomTabNavigator({
  Children: {
    screen: ChildrenScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Completed",
    }
  },
  LiveTest: {
    screen: LiveTestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Live",
    }
  }
},
{
  initialRouteName:'Chiildren'
}
);
