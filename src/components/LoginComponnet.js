import React,{Component} from 'react'
import {loginUser} from '../Services/service'
import {
  View,
  Button,Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native'

const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};



export default class LoginComponent extends Component {
  
  constructor(props){
    super(props);
    this.state={
      visible:false,
      message:'user logged In',
      user:{
        email:'',password:''
        }
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.login=this.login.bind(this);
  
  }
    handleChange(e,fieldName){
      let currentState = this.state;
      currentState.user[fieldName] = e.nativeEvent.text;
      this.setState(currentState);
  }
  login(){
    loginUser(this.state.user).then(result=>{
        this.setState({message:'User Logged Successfully',visible:true});
    }).catch(err=>{
        this.setState({message:err.message,visible:true});
    });
    this.props.navigation.navigate('ProfilePage')
}
  render() {
    
    return (
      <View style={styles.container} source={require('../images/bg.jpg')}>
      <Text style={styles.textRegister}>Login</Text>      
        
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
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChange={(e)=>{
            this.handleChange(e,'password')
          }}
          
        />
        
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.signUpText} onPress={this.login}>Sign in</Text>
        </TouchableHighlight>
        <Toast visible={this.state.visible} message={this.state.message} />
        <Button
            title="Register"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={()=>this.props.navigation.navigate('RegisterPage')}
            />
        
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
    color: '#2B4040',
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
