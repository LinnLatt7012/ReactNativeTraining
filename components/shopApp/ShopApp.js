import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from'react-native-animatable'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black,} from '@expo-google-fonts/inter';

const letterAnimation ={
    0:{opacity:0,  translateY: -42 },
    1:{opacity:1,  translateY: 0 },
}
const PlayIcon = () => <AntDesign name='playvideo' size={18} color='black' />

function ShopApp() { 
    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    const navigation = useNavigation();
    const route = useRoute();
    const {item } = { item:{
        type:'Humlan P',
        imageUri: require("../../assets/urbanears/urbanearblue.png"),
        heading:'Vibrant colors',
        description: 'Four on trend colorways to seamlessly suit your style',
        key:'first',
        color:'#9dcdfa',
        colorName:'blue',
    }
}
    
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar />
        <AntDesign
        name='close' 
        size={18}
        style={{
            padding:12,
            position:'absolute',
            top: 0,
            right:0,
            zIndex:2,
        }}
        color={'#333'}
        onPress={()=>{
            navigation.goBack();
        }}
        />
        <View>
            <View style={{flexDirection: 'row', overflow: 'hidden'}}> 
            {item.type.split('').map((letter, index)=>{
                return <Animatable.Text 
                useNativeDriver
                animation={letterAnimation}
                delay={300+ index*60}
                key={`${letter}-${index}`} 
                style={styles.heading}>
                    {letter}
                </Animatable.Text>
            })}
            </View>
        </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:32, 
        color:'#333',
        marginBottom:10,
        letterSpacing: 2,
        fontWeight:'800',
        textTransform:'uppercase',
        fontFamily: 'Inter_900Black'
    }
})

export default ShopApp