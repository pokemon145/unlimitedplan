import React, { Component } from 'react';
import {
  Platform, 
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,TouchableOpacity
    }
 from 'react-native';
 export default class App extends Component {
  constructor(){
    super ()
    this.state = {
        name :'',
        userValidate :true,
        email :'',
        nameValidate :true,
        phonenumber :'',
        phoneValidate :true,
        password : '',
        passValidate :true,
        conformpassword :'',
        conformValidate :true,
        hidePassword: true, 
        hidePassword1: true,   
  
    }
    this.managePasswordVisibility=this.managePasswordVisibility.bind(this);
    this.managePasswordVisibility1=this.managePasswordVisibility1.bind(this);
    //this.signup = this.signup.bind(this);

   

}
SignUp() {
  this.props.SignUp()
//alert( 'Register Sucessfully');
//this.props.navigation.navigate('MainHome');
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
     managePasswordVisibility1()
     {
         this.setState({hidePassword1: !this.state.hidePassword1});  
     }  
    //Text_input fields validations
   validate(text,type){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    let numreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/;
    let user = /^[a-zA-Z]+$/;
   // let regphone = /^[0]?[789]\d{9}$/;

    if(type == 'username'){
      if(user.test(text)){
        this.setState({
          userValidate :true,
          name:text
        })
      }else{
          this.setState({
          userValidate :false,
        })   
         }

    }else if(type == 'email'){
      if(reg.test(text)){
       
        this.setState ({
          nameValidate :true,
        })
      }else{
        // console.warn("text is in-valid")
        this.setState ({
          nameValidate :false,
        })
      }
    }
    // else if(type == 'phone'){
    //   if(regphone.test(text)){
    //     this.setState ({
    //       phoneValidate :true,
    //     })
    //   }else{
    //     this.setState ({
    //       phoneValidate :false,
    //     })
    //   }
    // }
    else if(type == 'password'){
      if(numreg.test(text)){
       // console.warn("Password is valid")
        this.setState({
          passValidate :true,
          password :text
        })

      }
      else{
        //console.warn("...... not valid")
        this.setState({
          passValidate :false,
        })
      }
      }else if(type =='conformpass'){
        if(numreg.test(text) && this.state.password == text){
          this.setState({
            conformValidate :true,
          })
        }else{
          this.setState({
            conformValidate :false,
          })
        }
      }
      



   }
    render(){
      return(
        
        <View style = {styles.container}>

           <TextInput 
            style ={[styles.inputBox,!this.state.userValidate? styles.error :null]} 
            underlineColorAndroid ='rgba(0,0,0,0)' 
            placeholder ="User Name"
            returnKeyType={"next"}
            placeholderTextColor ='#ffffff'
            ref="username"
            onChangeText ={(text) =>this.validate(text,'username')}
            onSubmitEditing={() => this.focusNextField('email')}
           
            />
            <TextInput 
            style ={[styles.inputBox,!this.state.nameValidate? styles.error :null]}      
            underlineColorAndroid ='rgba(0,0,0,0)' 
            placeholder ="Email"
            returnKeyType={"next"}
            keyboardType ='email-address'
            ref ="email"
            onSubmitEditing ={() => this.focusNextField('phone')}
            onChangeText ={(text) =>this.validate(text,"email")}
            placeholderTextColor ='#ffffff'
            />
             
             <TextInput 
           style ={styles.inputBox}
            underlineColorAndroid ='rgba(0,0,0,0)' 
            placeholder ="Phone Number"
            keyboardType ='phone-pad'
            maxLength = {20}
            returnKeyType={"next"}
            ref ="phone"
            onSubmitEditing = {() =>this.focusNextField('password')}
            onChangeText ={(text) => this.validate(text,"phone")}
            placeholderTextColor ='#ffffff'
            /> 
            <View>
            <TextInput 
            style ={[styles.inputBox,!this.state.passValidate? styles.error :null]}  
            underlineColorAndroid ='rgba(0,0,0,0)' 
            placeholder ="Password"
            onChangeText ={(text) => this.validate(text,"password")}
            maxLength ={15}
            returnKeyType={"next"}
            ref ="password"
            secureTextEntry = {this.state.hidePassword}
            onSubmitEditing ={() => this.focusNextField('createpass')}
            placeholderTextColor ='#ffffff'
            />
            <TouchableOpacity activeOpacity={0.8} style = {styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                <Image source={(this.state.hidePassword) ? require('../images/hide.png') : require ('../images/show.png')} style={styles.btnImage}/>
            </TouchableOpacity>
            </View>
            <View>
            <TextInput
             style ={[styles.inputBox,!this.state.conformValidate? styles.error :null]}  
             underlineColorAndroid ='rgba(0,0,0,0)'
             placeholder ="Confirm Password"
             placeholderTextColor ='#ffffff'
             secureTextEntry = {this.state.hidePassword1}
             maxLength ={15}
             ref ="createpass"
             onChangeText ={(text) => this.validate(text,"conformpass")}
            />
             <TouchableOpacity activeOpacity={0.8} style = {styles.visibilityBtn} onPress={this.managePasswordVisibility1}>
                <Image source={(this.state.hidePassword1) ? require('../images/hide.png') : require ('../images/show.png')} style={styles.btnImage}/>
            </TouchableOpacity>
            </View>
           <TouchableOpacity onPress={()=>this.SignUp()} style = {styles.button}>
               <Text style = {styles.buttontext}>Sign Up</Text>
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
       width :350,
       backgroundColor :'rgba(255,255,255,0.3)',
       borderRadius :15,
       paddingHorizontal:16,
       marginVertical :10,
       fontSize :16,
       color:'#ffffff'
   },
   button :{
       width:350,
       borderRadius :16,
       backgroundColor :'#1c313a',
       paddingVertical :15,
       marginVertical:10
   },
   buttontext:{
       fontSize :16,
       color:'#ffffff',
       fontWeight:'500',
       textAlign:'center'
   },error :{
     borderWidth :3,
     borderColor :'red'
   },  
   visibilityBtn:
   {
     position: 'absolute',
     right: 10,
     height: 60,
     width: 40,
     padding: 5
   },
   btnImage:
   {
     resizeMode: 'contain',
     height: '100%',
     width: '100%'
   },
});