import React from 'react';
import {Home} from './src/pages/Home';
import {StatusBar} from 'react-native';

export default function App(){
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#1f1a26" />
    <Home/>
    </>
  )
}