import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text,StyleSheet, Image,FlatList,TouchableOpacity, Dimensions,SafeAreaView} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import salon from './salon'
const {width, height} = Dimensions.get('screen');

function SalonList() {
  const navigation = useNavigation()
    return (
      <SafeAreaView style={{ display:'flex'}}>
       <FlatList
          data={salon}
          keyExtractor={item=>item.key}
          contentContainerStyle={{padding: 10}}
          renderItem={({item})=>{
            return <TouchableOpacity onPress={()=>navigation.navigate('SalonListDetail',{item})} style={{marginBottom:10,height: height*0.18}} >
              <View style={{flex:1, padding: 10, }}>
                <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFill]}>
                  <View style={[StyleSheet.absoluteFillObject,
                    {backgroundColor: item.color, borderRadius: 16 }]}/>
                </SharedElement>
                <SharedElement id={`item.${item.key}.name`}>
                  <Text style={styles.name}>{item.name}</Text>
                </SharedElement>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                  <Image source={{uri: item.image }} style={styles.image} />
                </SharedElement>
              </View>
            </TouchableOpacity>
          }}
       />
       <SharedElement id="general.bg">
      <View style={styles.bg}/>
      </SharedElement>
      </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    name:{
      fontWeight:'700',
      fontSize: 18,
    },
    jobTitle:{
      fontSize: 11,
      opacity: .7
    },
    image:{
      width: height *0.14,
      height: height*0.14,
      resizeMode:'contain',
      position:'absolute',
      bottom:0,
      right:0
    },
    bg:{
      position:'absolute',
      width,
      height,
      backgroundColor:'red',
      transform:[{ translateY: height}],
      borderRadius:32,
    }
  })
export default SalonList