import React, { Component } from 'react';
import {
  Platform, 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,TouchableOpacity,Alert
    }
 from 'react-native';

 export default class App extends Component {

    constructor(){
        super() 
        this.state = {
            email :'',
            emailValidate :true,
            password :'',
            passValidate :true,
            hidePassword: true,   
        }
        this.managePasswordVisibility=this.managePasswordVisibility.bind(this);
    }

       //Textfield focus Change
    focusNextField = (nextField) => {
        console.log('NEXT FIELD:', nextField);
        this.refs[nextField].focus();
        }
      //Password Show/hide
      managePasswordVisibility()
        {
            this.setState({hidePassword: !this.state.hidePassword});  
        }  

        
    validation(text,type){
        let emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
        let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/;
        if(type == "logemail"){
            if(emailcheck.test(text)){
                this.setState({
                    emailValidate:true,
                })

            }else{
                this.setState({
                    emailValidate:false,
                   
                })

            }
        }else if(type == 'loginpassword'){
            if(passcheck.test(text)){
                this.setState({
                    passValidate:true,
                })
            }else{
                this.setState({
                    passValidate :false,
                })
                
            }
        }
    }
    render(){
      return(
        <View style = {styles.container}>
            <TextInput 
            style ={[styles.inputBox,!this.state.emailValidate? styles.error :null]}  
            underlineColorAndroid ='rgba(0,0,0,0)' 
            placeholder ="Email"
            placeholderTextColor ='#ffffff'
            returnKeyType={"next"}
            ref ="email"
            onSubmitEditing = {() =>this.focusNextField('password')}
            onChangeText ={(text) =>this.validation(text,"logemail")}
            />
            
            <TextInput
            style ={[styles.inputBox,!this.state.passValidate? styles.error :null]}  
            underlineColorAndroid ='rgba(0,0,0,0)'
             placeholder ="Password"
             placeholderTextColor ='#ffffff'
             secureTextEntry = {this.state.hidePassword}
             ref ="password"
             onChangeText ={(text) =>this.validation(text,"loginpassword")}
            >
            </TextInput>
            <TouchableOpacity activeOpacity={0.8} style = {styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                <Image source={(this.state.hidePassword) ? require('../images/hide.png') : require ('../images/show.png')} style={styles.btnImage}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttontext}>Login</Text>
            </TouchableOpacity>
        </View>
      );
    }
 
  }
  const styles = StyleSheet.create ({
    container :{
        flexGrow :1,
        alignItems:'center',
        justifyContent:'center'

    },
   inputBox :{
       width :300,
       backgroundColor :'rgba(255,255,255,0.3)',
       borderRadius :15,
       paddingHorizontal:16,
       marginVertical :10,
       fontSize :16,
       color:'#ffffff'
   },
   button :{
       width:300,
       borderRadius :16,
       backgroundColor :'#1c313a',
       paddingVertical :15,
       marginVertical:10
   },
   visibilityBtn:
  {
    position: 'absolute',
    right: 26,
    height: 40,
    width: 35,
    padding: 4
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
   buttontext:{
       fontSize :16,
       color:'#ffffff',
       fontWeight:'500',
       textAlign:'center'
   },error :{
    borderWidth :2,
    borderColor :'red'
  }
});