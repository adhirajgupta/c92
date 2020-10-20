import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ActiveTestScreen from '../screens/ActiveTestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Teacher: {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Completed",
    }
  },
  ActiveTest: {
    screen: ActiveTestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Active",
    }
  }
},
{
  initialRouteName:'Teacher'
}
);
