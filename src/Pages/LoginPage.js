import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';
import LoginComponnet from '../components/LoginComponnet';
import GeolocationExample from '../components/Geolocation';



export default class LoginPage extends Component {
    constructor(props) {
        super(props);
     

    }

    render() {

        return (
            <View  style={styles.container}>
               <GeolocationExample/>
                  
                <LoginComponnet navigation ={this.props.navigation} />        
                   
                
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