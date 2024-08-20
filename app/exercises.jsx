import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

export default function Exercises() {
    const router = useRouter()
    const item = useLocalSearchParams()
    console.log('got item:', item)
  return (
    <View className="mt-20">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  )
}