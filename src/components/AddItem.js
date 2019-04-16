import React, { Component } from 'react';
import {
	  StyleSheet,
	  View,	
    TextInput,
    Button,
    Text
} from 'react-native';

import {db} from '../Services/config';

//add item to firebase db
let addItem =(item)=> {
  db.ref('/items').push({
    itemInfo:item
  });
};

//get items from firebase db
let itemRef = db.ref('/items');


export default class AddItem extends Component {
	constructor(props) {
	  super(props);
	 this.state = {
     itemInfo:'',
     items:[],
   }
   this.handelerChange = this.handelerChange.bind(this);
   this.clickToAdd = this.clickToAdd.bind(this);
  }
  
  clickToAdd(){
   addItem(this.state.itemInfo);
  }
  handelerChange(e){
    this.setState({itemInfo:e.nativeEvent.text})
  }
  componentDidMount(){
    itemRef.on('value',myDataTable =>{
      let data = myDataTable.val();
      let items = Object.values(data);
      this.setState({items});
    });
  }
	
    render() {
    	
        return (
            <View>
           <TextInput 
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}          
              onChange={this.handelerChange}
              value={this.state.itemInfo}              
            ></TextInput>
            <Button
            onPress={this.clickToAdd}
            title="Add Item"
            color="#2B64C7"
            >
            </Button>
            {this.state.items.map( x => {
              return <Text>{x.itemInfo}</Text>

            })
            }

            </View>           
        );
    }
}
