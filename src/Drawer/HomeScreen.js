import React, { Component } from 'react';
import {
  Platform, 
  View,
  Text,
  StyleSheet,
  }
 from 'react-native';

 export default class Das extends Component {
    render(){
      return(
        
        <View style ={styles.container}>
        
            <Text>Dashbaord</Text>
         
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
 
  });
  