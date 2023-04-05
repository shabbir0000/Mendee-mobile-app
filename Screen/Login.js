import { View, Text, TextInput, Image, ImageBackground } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, Icons } from '../Components/UniversalComponent'

const Login = () => {
  return (

    <View style={tw`flex-1 `}>
        <ImageBackground source={require("../images/bg.png")} resizeMode="cover" style={tw`flex-1 justify-center`} imageStyle={{opacity: 0.4}}>
      <View style={tw`top-5 items-center`}>
        <Image
          source={require("../images/MendedLogo4.png")}
        />
      </View>

      <Text style={tw`text-4xl text-center mt-10`}>Create Account</Text>

      <Icons name={"user"}  />
      <Icons name={"mail-bulk"} />
      <Icons name={"lock"} />
      <Icons name={"lock"} />

      <View style={tw`items-center justify-center`}>
      <Button name={"SIGN UP"} style={tw`h-14 mt-5 items-center justify-center w-65 rounded-lg bg-slate-600`} />
      <Text style={tw`text-lg text-center mt-10`}>Already have an Account? Login here</Text>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Login