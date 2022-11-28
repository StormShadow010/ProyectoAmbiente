import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const yourPicture = require('../../../imagenes/FondoIntro1.png')

const IntroScreen1Ingresar = () => {
  const navigation=useNavigation();
  return (
    <ImageBackground source={yourPicture} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text>IntroScreen0Empezar
            sdfglsjdfg
            sdfgkjsdf
            sdfgjs
          </Text>
        </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  image: {
      flex: 1,
      justifyContent: "center"
    },
    container: {
      alignItems:'center',
    },
})

export default IntroScreen1Ingresar