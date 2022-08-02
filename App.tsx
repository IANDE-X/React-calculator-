import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';
import styled from "styled-components";
//import { Entypo } from '@expo/vector-icons';
//import { ThemeProvider } from 'styled-components';
//import { lightTheme, darkTheme } from './theme';
 




export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider  value={theme} >

      <SafeAreaView style={ theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch  style={{height:30,width:80,top:40,
}}      
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          
        />
       
      <Text style={{fontWeight: '400',fontFamily:'monospace',}}>Swipe to Dark mode!</Text>
        <MyKeyboard />
        {/* <Img src='https://cdn-icons.flaticon.com/png/128/5005/premium/5005751.png?token=exp=1659363948~hmac=4b26ddbd236523c99689403f6f6372d1' alt="Girl in a jacket" style={{width:50,height:60,}}/> */}

       {/* <!-- <Text style={{ color: "red", fontSize: 10, fontWeight: '500',}}>Mode</Text>--> */}
       
       <Text style={{
         color: myColors.orange,
          fontSize: 50,
          alignItems:'flex-end', 
           padding:30,
           top:100, 
           fontWeight: '700',
           fontFamily:'monospace',
           //textShadowColor:'#3F7FBF',
    
            textShadowColor: 'rgba(0, 23, 255, 1)',
            textShadowOffset: { width: -2, height: 1 },
            textShadowRadius: 10,
           
           //Text-shadow: 4px 4px 0px #3F7FBF,
          //  mix-blend-mode: screen;
          //  animation: fadeIn 2.5s linear forwards;
           }}>TP-CALCULATOR</Text>
      </SafeAreaView>

 
         
    </ThemeContext.Provider>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    display:'flex',
    top:0,
    maxWidth:'100%',
   
    paddingLeft:0,
    borderRadius:1,
    margin:0 ,
    //borderColor:'#EA0D01',
    //color: "green",

    

    
  },
   mystyle :{
    color: "green",
    padding: 20,
    display: 'flex',
    //backgroundColor:'red',
    //backgroundImg: ('https://cdn-icons.flaticon.com/png/128/5005/premium/5005751.png?token=exp=1659363948~hmac=4b26ddbd236523c99689403f6f6372d1'),
    height:20,
    width:90,
    borderRadius:8,
    top:20,
    paddingTop:20,
   
    
    
    //alignItems: 'flex-start',
    // gap: 4,
    // top: 50,
    // left: 50,
    // width: 75,
    // height: 40,

  
  },
  
  

  
});
