import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Prestamos from "./pantallas/Prestamos.js"
import Inicio from "./pantallas/Inicio.js"
import Bombillo from "./pantallas/Bombillo.js"


const tab = createBottomTabNavigator();
function MyTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={Inicio}/>
            <tab.Screen name="Bombillo" component={Bombillo}/>
            <tab.Screen name="Prestamos" component={Prestamos}/>
        </tab.Navigator>
    );
}
export default function Navegacion(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}