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

export default class ChildrenDetailsScreen extends Component {
render() {
    return (
        <View style={{ flex: 1 }}>
            <MyHeader title="Children Details" navigation={this.props.navigation} />

            <View>
                <Text>Hello you are in the ChildrenDetailsScreen</Text>
            </View>
        </View>
    )
}
}