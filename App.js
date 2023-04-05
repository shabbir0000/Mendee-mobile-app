import { View, Text ,TextInput } from 'react-native'
import React from 'react'
import Login from './Screen/Login'
import tw from 'twrnc'
const App = () => {
  return (
    <View style={tw`flex-1`}>
    <Login  />
      
    </View>
  )
}

export default App