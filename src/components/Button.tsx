import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'

interface ButtonPress extends TouchableOpacityProps{
   title: string;
};

export function Button({title, ...rest }: ButtonPress){
   return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        {...rest}
        >
     
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
     button: {
      backgroundColor: '#FF512F', 
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 15
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
  }, 
     gradient: {
     height: 45, 
     width: 100, 
     marginTop: 15, 
     borderRadius: 5,
  }
  
  })
