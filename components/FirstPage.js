import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const navigationRoutes=[
    {
        id:1,
        name:'salonList',
        label:'Episode 8'
    },
    {
        id:2,
        name:'flatList',
        label:'Reanimated Advanced Carousel'
    },
    {
        id:3,
        name:'shopApp',
        label:'Episode 6'
    }
]
function FirstPage() {
    const navigation = useNavigation();
  return (
    <View>
        <StatusBar hidden />
        <FlatList
        data={navigationRoutes}
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
            return <TouchableOpacity onPress={()=>navigation.navigate(item.name)}>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:20}}>
                        {item.label}
                    </Text>
                </View>
            </TouchableOpacity> 
        }}

        />
    </View>
  )
}

export default FirstPage