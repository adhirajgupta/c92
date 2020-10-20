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


export default class ActiveTestScreen extends Component {
constructor() {
super();
this.state = {
numberInput: 0,
companyInput:'',
descriptionInput:'',
}
}
render() {
return (
<View style={{ flex: 1 }}>
<MyHeader title="Active Tests" navigation={this.props.navigation} />

<View style={styles.container}>
   <Text>Hello you are in the active test screen</Text> 
</View>
</View>
)
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ADD8E6',
alignItems: 'center',
textAlign: 'center',
justifyContent: 'center',
},
InputContainer:{
flexDirection:'row',
alignItems: 'center',
textAlign: 'center',
justifyContent: 'center',
},
keyBoardStyle: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
},
numberInput: {
width: "10%",
height: 35,
borderColor: '#1351d8',
borderRadius: 10,
borderWidth: 1,
marginTop: 20,
marginLeft:-100,
padding: 10,
},
companyInput: {
width: "65%",
height: 35,
alignSelf: 'center',
borderColor: '#1351d8',
borderRadius: 10,
borderWidth: 1,
marginTop: 20,
padding: 10,
},
descriptionInput: {
width: "75%",
height: 35,
alignSelf: 'center',
borderColor: '#1351d8',
borderRadius: 10,
borderWidth: 1,
marginTop: 20,
padding: 10,
},
button: {
width: "75%",
height: 50,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 10,
backgroundColor: "#ff5722",
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,
elevation: 16,
marginTop: 20
},
}
)
