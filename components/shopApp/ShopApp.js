import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from'react-native-animatable'
import { marketingImage } from './urbanears';
import { SharedElement } from 'react-navigation-shared-element';
const {width, height} = Dimensions.get('screen');
const letterAnimation ={
    0:{opacity:0,  translateY: -42 },
    1:{opacity:1,  translateY: 0 },
}
const DURATION = 300

const animation ={
    0:{ translateX: width},
    1:{ translateX: 0}
}
const PlayIcon = () => <AntDesign name='playcircleo' size={18} color='black' />

function ShopApp() { 
    const navigation = useNavigation();
    const route = useRoute();
    const {item } = route.params;
    const circleSize = Math.sqrt(Math.pow(height ,2) + Math.pow(width,2))
    
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
        
            <View 
            style={[StyleSheet.absoluteFillObject,
            {alignItems:'center', 
            justifyContent:'center'}
            ]}><SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject,
            {alignItems:'center', 
            justifyContent:'center'}
            ]}>
                <View style={{
                    position: 'absolute',
                    width: circleSize,
                    height:circleSize,
                    borderRadius: circleSize,
                    opacity: .2,
                    backgroundColor: item.color
                }}/></SharedElement>
            </View>
        
        <SharedElement id={`item.${item.key}.image`}>
        <Image source={item.imageUri} style={styles.image} /></SharedElement>
        <View style={{position:'absolute', top: 20, left:5}}>
            <View style={{flexDirection: 'row', overflow: 'hidden',height:42}}> 
            {item.type.split('').map((letter, index)=>{
                return <Animatable.Text 
                useNativeDriver
                animation={letterAnimation}
                delay={DURATION + index*60}
                key={`${letter}-${index}`} 
                style={styles.heading}>
                    {letter}
                </Animatable.Text>
            })}
            </View>
            <View style={{overflow:'hidden'}}>
                <Animatable.Text
                useNativeDriver 
                animation={letterAnimation}
                delay={DURATION +50+(item.type.split('').length *60)}
                style={{
                    fontSize: 20,
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    color: item.color,
                    fontFamily: 'Inter_400Regular'
                }}>
                    {item.colorName}
                </Animatable.Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection:'row',padding:10}}>
            <Animatable.View style={{
                flex:.35,
                justifyContent:'space-between',
                overflow:'hidden',}}
            >
                <Animatable.View 
                    style={{flex:1, justifyContent:'space-between',backgroundColor:'white',padding: 5,}}
                    useNativeDriver
                    animation={animation}
                    delay={DURATION*1.5}>
                    <Animatable.View 
                    useNativeDriver
                    animation={animation}
                    delay={DURATION*1.5 +150}>
                        <Text style={{
                            fontWeight:'800', 
                            textTransform:'uppercase', 
                            fontFamily:'Inter_900Black',
                            fontSize:12
                        }}>
                            Advertisement
                        </Text>
                        <Text style={{
                            fontWeight:'800', 
                            textTransform:'uppercase', 
                            fontFamily:'Inter_900Black',
                            fontSize:12
                        }}>
                            Market
                        </Text>
                    </Animatable.View> 
                    <Animatable.View
                        useNativeDriver
                        animation={animation}
                        delay={DURATION*1.5 +150} 
                        style={{
                        flexDirection:'row',
                        alignSelf:'flex-end',
                        alignItems:'center',
                        overflow:'hidden'
                    }}>
                        <Text style={{
                            marginRight: 5, 
                            fontWeight:'700', 
                            textTransform:'uppercase', 
                            fontFamily:'Inter_900Black',
                        }}>Play Video</Text>
                        <PlayIcon />
                    </Animatable.View> 
                </Animatable.View>
            </Animatable.View>
            <View style={{flex:.65}} >
                <Animatable.Image 
                useNativeDriver
                    animation={animation}
                    delay={DURATION*1.5 +300} source={{uri: marketingImage}}  style={[StyleSheet.absoluteFill]}/>
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
        height:42,
        fontWeight:'800',
        textTransform:'uppercase',
        fontFamily: 'Inter_900Black'
    },
    image:{
        width: width * 0.9,
        height: width*0.9,
        resizeMode:'contain',
        alignSelf:'center',
        marginVertical: 70,
    }
})

export default ShopApp