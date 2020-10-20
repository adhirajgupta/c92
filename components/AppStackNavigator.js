import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TeacherScreen from '../screens/TeacherScreen.js';
import ChildrenDetailsScreen  from '../screens/ChildrenDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  Teacher : {
    screen : TeacherScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Children : {
    screen : ChildrenDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Teacher'
  }
);
