import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from  '../components/Form.js'
import Footer from '../components/Footer.js';
import ResultCalculation from '../components/ResultCalculation.js';
import colors from '../utils/colors.js';

export default function Prestamos() {
  const [name, setName] = useState(null); 
  const [capital, setCapital] = useState(null); 
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null); 
  const [total, setTotal] = useState(null); 
  const [errorMessage, setErrorMessage] = useState(null); 

  useEffect(() => {  
    if(name && capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months,])

  const calculate = () => {
    reset();
    if(!capital){
      setErrorMessage("Añade la cantidad que quieres solicitar")
    }
    else if(!interest){
      setErrorMessage("Añade el interes del prestamo")
    }else if(!months){
      setErrorMessage("Selecciona los meses a pagar")
    }else{
      const i = interest / 100;
      const fee = capital / (( 1 - Math.pow( i + 1, - months )) / i); 
      setTotal({
          monthlyfee: fee.toFixed(2).replace('.', ','),
          totalPayable: (fee * months).toFixed(2).replace('.', ','),
      })
    }
  }; 

  const reset = () => {
    setErrorMessage(""); 
    setTotal(null)
  }



  return (
    <>
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form 
        setName={setName} 
        setCapital={setCapital} 
        setInterest={setInterest} 
        setMonths={setMonths}/>
    </SafeAreaView>
    <ResultCalculation 
    name = {name}
    capital = {capital}
    interest = {interest}
    months = {months}
    total = {total}
    errorMessage={errorMessage}/>
    <Footer calculate={calculate}/>
    </>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems : 'center',
  }, 

  background:{
    backgroundColor: colors.PRYMARY_COLOR_DARK,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  titleApp:{
    fontSize:25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15, 
  },

}); 
