import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';
import ProfileComponent from '../components/ProfileComponent';




export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
     

    }

    render() {

        return (
            <View  style={styles.container}>
                  
                <ProfileComponent navigation ={this.props.navigation} />        
                   
                
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