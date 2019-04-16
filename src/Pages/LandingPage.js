import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import {
    StyleSheet,
    View,	
  TextInput,
  Button,
  Text
} from 'react-native';


export default class LandingPage extends Component {
	constructor(props) {
	  super(props);
  
  }  
	
    render() {

        const { navigate } = this.props.navigation;
    	
        return (
            <View style={styles.container} >          

           <Button
            title="Lets GO"
            color="#841584"
            borderRadius="30"
            accessibilityLabel="Learn more about this purple button"
            onPress={()=>navigate('LoginPage')}
            />
            

            </View>           
        );
    }
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#15D6AC'
  
  
},

});

