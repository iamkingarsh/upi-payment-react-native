import { StatusBar } from 'expo-status-bar';
import {  useState } from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';

export default function App() {

  const [amount, setAmount] = useState('');

  
  const handlePayment = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'kingarsh175@okhdfcbank', // or can be john@ybl or mobileNo@upi
        payeeName: 'Mohammed Arshad',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn',
        transactionNote: 'UPI RN Testing',
      },
      successCallback,
      failureCallback
    );
  }

  function successCallback(data) {
    // do whatever with the data
  }
  
  function failureCallback(data) {
    // do whatever with the data
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Add Money!</Text>
      <View  style={{ height: 60, backgroundColor: '#F9F2FF',display:'flex', flexDirection:'row',alignItems:'center',gap:4, width:120, justifyContent:'center',margin:'auto', padding:5, fontSize:30, fontWeight:'bold',  textAlign:'center', alignContent:'center' }}>
      <Text style={styles.heading}>$</Text><TextInput  value={amount} placeholder='0' onChangeText={(e)=>setAmount(e)} inputMode='numeric' style={{   fontSize:30,width:80, fontWeight:'bold' }} />
      </View>
      <Button onPress={handlePayment} title='Pay via UPI'/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
});
