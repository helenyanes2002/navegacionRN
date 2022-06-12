import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import bombilloApagado from "../assets/imagenes/bombilloApagado.jpg"
import bombilloEncendido from "../assets/imagenes/bombilloEncendido.jpg"

export default function Bombillo() {

    const [stateBom, setStateBom] = useState(true);
    const [count, setCount] = useState(0)
    const [img, setImg] = useState(null)

    useEffect(() => {
        if(stateBom){
            setImg(bombilloEncendido)
        }else{
            setImg(bombilloApagado)
        }
    })

    const encenderApagar = () => {
        setStateBom(prevValue => !prevValue);
    };

    return(
        <View>
            <Button 
                title="Encender / Apagar"
                onPress={() => {
                    encenderApagar()
                    if(stateBom){
                        setCount(count + 1)
                    }
                }}
            />
            <Text style={{fontSize:30, textAlign:"center"}}>
            {`Encendido ${count} Veces`}
            </Text>
            <Image source={img} style={{width:'100%', height:'100%'}}></Image>
        </View>
    )

  }