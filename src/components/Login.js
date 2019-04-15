import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Container,
} from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import { db } from '../config';

//add item to firebase db
let addItem = (item) => {
  db.ref('/items').push({
    itemInfo: item
  });
};

//get items from firebase db
let itemRef = db.ref('/items');


export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInfo: '',
      items: [],
    }
    this.handelerChange = this.handelerChange.bind(this);
    this.clickToAdd = this.clickToAdd.bind(this);
  }

  clickToAdd() {
    addItem(this.state.itemInfo);
  }
  handelerChange(e) {
    this.setState({ itemInfo: e.nativeEvent.text })
  }
  componentDidMount() {
    itemRef.on('value', myDataTable => {
      let data = myDataTable.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {

    return (
      // <View style={styles.container}>
      //   <Input
      //     placeholder='INPUT WITH ERROR MESSAGE'
      //     errorStyle={{ color: 'red' }}
      //     errorMessage='ENTER A VALID ERROR HERE'
      //   />
      //   <TextInput
      //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //     onChange={this.handelerChange}
      //     value={this.state.itemInfo}
      //   ></TextInput>
      //   <Button
      //     onPress={this.clickToAdd}
      //     title="Add Item"
      //     color="#2B64C7"
      //   >
      //   </Button>
      //   {this.state.items.map(x => {
      //     return <Text>{x.itemInfo}</Text>

      //   })
      //   }

      // </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: '#27B06B' }}>Welcome  </Text>
        <Text style={{ fontSize: 18, textAlign: 'left', width: '100%', color: '#687373' }}>Login to continue </Text>
        <TextInput style={styles.texttype}          
              onChange={this.handelerChange}
              value={this.state.itemInfo}              
            ></TextInput>
        <TextInput style={styles.texttype}          
              onChange={this.handelerChange}
              value={this.state.itemInfo}              
            ></TextInput>
        <Icon active name='android-person' style={{ color: "#687373" }} />
        <Input placeholder='Username' onChangeText={(text) => this.setState({ username: text })} placeholderTextColor="#687373" />
        <Icon active name='android-lock' style={{ color: "#687373" }} />
        <Input placeholder='Password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} placeholderTextColor="#687373" />
        <Button
        style={styles.button}
          title="Login"
          color="#841584"          
        >     
        </Button>
      </View>





    );
  }
}

const styles = StyleSheet.create({

  container: {
    
    marginBottom: 35,
    marginTop: 35,
    width: '100%',
   color: '#04BD60',
  },
  texttype:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
  }
});
