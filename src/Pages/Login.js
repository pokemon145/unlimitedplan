import React, { Component } from 'react';
import {
  Platform, 
  View,
  Text,
  StyleSheet,
  StatusBar  }
 from 'react-native';

 import Logo from '../components/Logo';
 import Form from '../components/Form';

 export default class App extends Component {
   render(){
     return(
       
       <View style ={styles.container}>
         <Logo/>
         <Form />
         <View style = {styles.signupTextcontent} >
           <Text style ={styles.signuptext} >Don't you have account yet?</Text>
           <Text style = {styles.signupButton} onPress ={()=> {this.props.navigation.navigate("Profile")}} >SignUp</Text>
         </View>
       </View>
     );
   }

 }

 const styles = StyleSheet.create ({
   container :{
     flex :1,
     alignItems :'center',
     justifyContent :'center',
     backgroundColor :'gray'
   },
   signupTextcontent:{
     flexGrow :1,
     alignItems:'center',
     justifyContent:'flex-end',
     flexDirection :'row',
     marginVertical :15
     
   },
   signupButton:{
     color:'#ffffff',
     fontSize :18,
     fontWeight :'500'

   },
   signuptext :{
     color :'rgba(255,255,255,0.7)',
     fontSize : 16,
     fontWeight:'500',
     marginVertical:16
   }
 });
 

