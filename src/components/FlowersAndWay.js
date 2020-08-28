import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class FlowersAndWay extends Component{
render(){
return( 
    <View style={StyleSheet.container}>
   <Image
   source={require('../../assets/flowers-and-way.png')}
   style={styles.flowers}
   resizeMode={"contain"}
   />
    </View>
    
    )

}
    
        
}  
    
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        zIndex:5
    },
    flowers:{
        width:'90%'
    }

});

