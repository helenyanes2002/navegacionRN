import React from "react"
import {Text, View, ImageBackground} from "react-native"
import fondoGirasol from "../assets/imagenes/fondoGirasol.jpg"

const Inicio = () => {
    return(
        <View>
            <ImageBackground source={fondoGirasol} style={{width:'100%', height:'100%'}}>
                <Text style={{color:'white', fontSize:50, textAlign:"center", marginVertical:270, width:'100%', height:'100%'}}>
                Helen Yanes
                </Text>
            </ImageBackground>
        </View>
    )
}

export default Inicio;