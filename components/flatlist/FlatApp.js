import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions} from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571572.png"
  },
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571747.png"
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571680.png"
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "description": "We need to program the open-source IB interface!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
  }
]

const Indicator =({scrollX})=>{
  return <View style={{position:'absolute',bottom:'5%', flexDirection:'row'}}>
    {DATA.map((_,i)=>{ 
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
          backgroundColor:'#fff',
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
  const backgroundColor=scrollX.interpolate({
    inputRange: bgs.map((_,i)=>{ 
      return i*width;}),
    outputRange:bgs.map((bg)=> bg),
  })
  // console.log(backgroundColor);
  return <Animated.View 
  style={[
    StyleSheet.absoluteFillObject,
    {backgroundColor}
  ]}
  
  />
}
const Square =({scrollX})=>{
  const YOLO=Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollX,width),
        new Animated.Value(width)
      ),
    1)
  const rotate=YOLO.interpolate({
    inputRange:[0,.5,1],
    outputRange:['35deg','0deg','35deg']
  })
  const translateX=YOLO.interpolate({
    inputRange:[0,.5,1],
    outputRange:[0,-height,0]
  })
  // console.log(backgroundColor);
  return <Animated.View 
  style={
    {
    width: height,
    height: height,
    top:-height*0.7,
    left:-height*0.32,
    borderRadius:76,
    transform:[
      {rotate},
      {translateX}
    ],
    position:'absolute',
    backgroundColor:'#fff'
    }
  }
  
  />
}
export default function FlatApp() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* {console.log('hi')} */}
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
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
          return <View style={{width, alignItems:'center',padding:20}}>
              <View style={{flex:0.7,justifyContent:'center'}}>
                <Image source={{uri: item.image}}
                style={{
                  width: width / 2,
                  height: width / 2,
                  resizeMode:'contain',
                }} />
              </View>
              <View style={{flex:0.3}}>
                <Text style={{
                  fontWeight:'800',
                  fontSize:24,
                  marginBottom:10,
                  color:'#fff'
                }}
                onPress={()=>{
                  navigation.navigate('salonList');
              }}
                >
                  {item.title}
                </Text>
                {/* {console.log(scrollX)} */}
                <Text style={{
                  fontWeight:'300',
                  marginBottom:10,
                  color:'#fff'
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
});