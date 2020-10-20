import React, { Component } from 'react';
import {
View,
Text,
TextInput,
Modal,
KeyboardAvoidingView,
StyleSheet,
TouchableOpacity,
Alert,
ScrollView
} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class ChildrenScreen extends Component {
render() {
    return (
        <View style={{ flex: 1 }}>
        <MyHeader title="Children" navigation={this.props.navigation} />

        <View>
            <Text>Hello you are in the ChildrenScreen</Text>
        </View>
        </View>
    )
  }
}