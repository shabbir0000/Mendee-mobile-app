import { View, Text ,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconn from 'react-native-vector-icons/FontAwesome5'
import tw from "twrnc"

export const Icons = ({name , })=>(
    <>
     <View style={tw`h-14  mt-5 left-14 flex-row items-center justify-center w-14 rounded-lg bg-amber-600 `}>
          <Iconn name={name} style={tw`left-50`}  color="black" size={30}/> 
        
          <TextInput placeholder='Username' style={tw`w-50 ml-52  h-14 rounded-lg bg-white  border-black border `} />
          </View>
    </>
)

export const Button = ({name,style})=>(
    <>
          
          <TouchableOpacity  >
          <View style={style}>
            <Text style={tw`text-white`}>{name}</Text>
            </View>
          </TouchableOpacity>
           
    </>
)