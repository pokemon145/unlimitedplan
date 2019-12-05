import React, { Component } from 'react';

import {
  Platform, 
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar  }
 from 'react-native';

 import Logo from '../components/Logo';
 import SignupForm from '../components/SignupForm';

 export default class App extends Component { 
  GotoSignUP(){
  this.props.navigation.navigate('MainHome');

  //alert('ok')
  }
   render(){
     return(
      
       <View style ={styles.container}>
       
         <SignupForm
         SignUp={()=>this.GotoSignUP()}
         />
         <ScrollView>
         <View 
            style = {styles.signupTextcontent} >
           <Text style ={styles.signuptext} >Already Have an account </Text>
           <Text style = {styles.signupButton} onPress = {() => {this.props.navigation.navigate('Home')}} > Sign In</Text>
         </View>
         </ScrollView>
       </View>
     );
   }

 }

 const styles = StyleSheet.create ({
   container :{
    flex :1,
     alignItems :'center',
     justifyContent :'center',
     paddingTop :20,
     backgroundColor :'gray'
   },
   signupTextcontent:{
     flexGrow :1,
     alignItems:'center',
     justifyContent:'center',
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
     fontWeight:'500'
   }
 });
 

