import React,{Component} from 'react'
import {registerUser} from '../Services/service'
import {
  View,
  Button,Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'




export default class Register extends Component {
  
  constructor(props){
    super(props);
    this.state={
      user:{
        username:'',
        password:'',
        email:'',
        phone:''
      }
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  
  }
    handleChange(e,fieldName){
      let currentState = this.state;
      currentState.user[fieldName] = e.nativeEvent.text;
      this.setState(currentState);
  }
  register(){
      registerUser(this.state.user);
      this.props.navigation.navigate('Login');
  }
  render() {
    
    return (
      <View style={styles.container}>
      <Text style={styles.textRegister}>Register</Text>
      <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
           onChange={(e)=>{
             this.handleChange(e,'username')
           }}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChange={(e)=>{
            this.handleChange(e,'password')
          }}
          
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChange={(e)=>{
            this.handleChange(e,'email')
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChange={(e)=>{
            this.handleChange(e,'phone')
          }}
          
        />
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.signUpText} onPress={this.register}>Sign up</Text>
        </TouchableHighlight>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#a9a9a9',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#15D6AC'
    
    
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "red",
  },
  signUpText: {
    color: 'white',
    fontSize:18,
  },
  textRegister:{
      color:'white',
      fontSize:22,
      
  }
})
