import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image'
import Anticon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

export default function exerciseDetails() {
    const item = useLocalSearchParams()
    const router = useRouter()
  return (
    <View className = "flex flex-1">
      <View className = "shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
            source={{uri: item.gifUrl}}
            contentFit='cover'
            style={{width: wp(100), height: hp(100)}}
            className = "rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity 
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >

        <Anticon name='closecircle' size={hp(4.5)} color="#f43f5e"/>

      </TouchableOpacity>
    </View>
  )
} 