import React, { Component } from 'react';
import {
  Platform, 
  View,
  Text,
  StyleSheet,
  Image,
    }
 from 'react-native';

 export default class App extends Component {
    render(){
      return(
        <View style ={styles.container}>
         <Image
          style={{width: 50, height: 70}}
          source={require('../images/download.png')}
        />
        <Text style ={styles.logtext}> Welcome App</Text>
        </View>
      );
    }
 
  }
 
  const styles = StyleSheet.create ({
      container :{
          flexGrow :1,
          alignItems:'center',
          justifyContent:'flex-end'

      },
      logtext :{
       fontSize :18,
       marginVertical :10


      }
 
  });