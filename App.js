import { StyleSheet, Text, View ,Button} from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {

  const setData = () =>{
    const [Nickname,setNickname] = useState("Welcome")

    let username = "Digisoftnet"
    AsyncStorage.setItem ("name",username);
    alert ('Data Saved')
  }

  const getData =async ()=> {
    try {
      
      let Name= await AsyncStorage.getItem("name")
      setNickname(Name) 

      alert(Name)

    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <View styles={styles.container}>
      <Text styles={styles.textstyle}>React_Native_Asynstorage</Text>
      <Text styles={styles.textstyle}>{Nickname}</Text>
      <View>
        <Button title='setData' onPress={()=>saveData()}/>
      </View>
      <View>
        <Button title='getData' onPress={()=>displayData()}/>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff",

    
  },

  textstyle:{
    fontSize:25,
    color:"blue"
  },
})

