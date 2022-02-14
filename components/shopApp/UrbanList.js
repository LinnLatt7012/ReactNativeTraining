import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { SharedElement } from 'react-navigation-shared-element';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import DATA from './urbanears.js'
const {width, height} = Dimensions.get('screen');
import * as Animatable from'react-native-animatable'
const letterAnimation ={
  0:{opacity:0,  translateY: -42 },
  1:{opacity:1,  translateY: 0 },
}
const DURATION = 300
// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
// const DATA = Data

const Indicator =({scrollX})=>{
  return <View style={{position:'absolute',bottom:'5%', flexDirection:'row'}}>
    {DATA.map((data,i)=>{ 
      const scale= scrollX.interpolate({
        inputRange: [(i-1)*width,i*width,(i+1)*width],
        outputRange: [0.7, 1.3, 0.7],
        extrapolate:'clamp',
      })
      const opacity= scrollX.interpolate({
        inputRange: [(i-1)*width,i*width,(i+1)*width],
        outputRange: [0.7, 1, 0.7],
        extrapolate:'clamp',
      })
      return <Animated.View 
        key={`indicatorr-${i}`}
        style={{
          height:10,
          width: 10,
          borderRadius: 5,
          opacity,
          backgroundColor: data.color,
          margin:10,
          transform:[
            {
             scale: scale,
            },
          ],
        }}
      />
    })}
  </View>
}
const Backdrop =({scrollX})=>{

}
const circleSize = Math.sqrt(Math.pow(height ,2) + Math.pow(width,2))
const Circle =({scrollX,color})=>{
  const backgroundColor=scrollX.interpolate({
    inputRange: DATA.map((_,i)=>{ 
      return i*width;}),
    outputRange:DATA.map((item)=> item.color),
  })
  const YOLO=Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollX,width),
        new Animated.Value(width)
      ),
    1)
    // console.log(scrollX)
  // const scale=YOLO.interpolate({
  //   inputRange:[.3,.5,.7],
  //   outputRange:[circleSize/12,0,circleSize/12]
  // })
  const scale=YOLO.interpolate({
    inputRange:[.3,.5,.7],
    outputRange:[0.09,0,0.09]
  })

  // console.log(backgroundColor);
  
  return<Animated.View style={{
        position: 'absolute',
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize,
        opacity: .2,
        backgroundColor: color,
        transform:[
          {scale}
        ],
        left:-width*1.17,
        top:-height*0.55,
        
    }}/>
}
export default function UrbanList() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* {console.log('hi')} */}
      {/* <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} /> */}
      <Animated.FlatList
        data={DATA}
        keyExtractor={item=>item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent:{contentOffset:{x:scrollX}}}],
          {useNativeDriver:false}
        )
        }
        contentContainerStyle={{paddingBottom:100}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item})=>{
          return <View style={{width, alignItems:'center',padding:20}} >
                  <View style={{position:'absolute', top: 20, left:5}}>
                  <View style={{flexDirection: 'row', overflow: 'hidden',height:42}}> 
                  {item.type.split('').map((letter, index)=>{
                      return <Text 
                      key={`${letter}-${index}`} 
                      style={styles.heading}>
                          {letter}
                      </Text>
                  })}
                  </View>
                  <View style={{overflow:'hidden'}}>
                      <Text
                      style={{
                          fontSize: 20,
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: item.color,
                          fontFamily: 'Inter_400Regular'
                      }}>
                          {item.colorName}
                      </Text>
                  </View>
              </View>
              <View style={{flex:0.7,justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('UrbanDetail',{item})} >
                <View 
                style={[StyleSheet.absoluteFillObject,
                {alignItems:'center',justifyContent:'center'}
                ]}>
                  <SharedElement id={`item.${item.key}.bg`}>
                    <Circle scrollX={scrollX} color={item.color} />
                  </SharedElement>
                </View>
                <SharedElement id={`item.${item.key}.image`}>
                  <Image source={item.imageUri}
                  style={{
                    width: width / 1.4,
                    height: width / 1.4,
                    resizeMode:'contain',
                  }} />
                </SharedElement>
                </TouchableOpacity> 
              </View>
              <View style={{flex:0.3,backgroundColor:item.color+'70',padding:10}}>
                <Text style={{
                  fontWeight:'800',
                  fontSize:24,
                  marginBottom:10,
                  color:'#fff',
                  fontFamily:'Inter_900Black'
                }}
                >
                  {item.heading}
                </Text>
                {/* {console.log(scrollX)} */}
                <Text style={{
                  fontWeight:'500',
                  marginBottom:10,
                  color:'#000'
                }}>
                  {item.description}
                </Text>
              </View>
            </View>
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  
});