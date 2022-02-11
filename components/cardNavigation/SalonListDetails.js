import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from '@react-navigation/native'
import {View, Text, StyleSheet, Dimensions, Image,ScrollView,SafeAreaView} from 'react-native'
import { detailsIcons } from "./salon";
import * as Animatable from'react-native-animatable'
import { SharedElement } from "react-navigation-shared-element";

const DURATION =400;

const {width, height} = Dimensions.get('screen');
const TOP_HEADER_HEIGHT= height *0.3

const SalonListDetails =()=>{
    const navigation = useNavigation()
    const route= useRoute()
    const {item} = route.params;
    return(
        <SafeAreaView style={{flex:1}}>
            <AntDesign
            name="arrowleft"
            size={28}
            style={{
                padding:12,
                position: 'absolute',
                top: 20,
                left: 10,
                zIndex:2,
            }}
            onPress={()=>{
                navigation.goBack();
            }}
            color={'#333'}
            />
            <AntDesign
            name="arrowright"
            size={28}
            style={{
                padding:12,
                position: 'absolute',
                top: 20,
                right: 10,
                zIndex:2,
            }}
            onPress={()=>{
                navigation.navigate('flatList');
            }}
            color={'#333'}
            />
            {/* <View style={{flex:1, padding: 10, }}> */}
                <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFill]}>
                    <View style={[StyleSheet.absoluteFillObject,
                    {backgroundColor: item.color, borderRadius: 0, height:TOP_HEADER_HEIGHT+32 }]}/>
                </SharedElement>
                <SharedElement id={`item.${item.key}.name`}>
                    <Text style={styles.name}>{item.name}</Text>
                </SharedElement>
                
                {/* <Text style={styles.jobTitle}>{item.jobTitle}</Text> */}
                <SharedElement id={`item.${item.key}.image`} >
                    <Image source={{uri: item.image }} style={styles.image} />
                </SharedElement>
            {/* </View> */}
            <SharedElement id="general.bg">
                <View style={styles.bg}>
                    <ScrollView >
                        <View style={{flexDirection:'row', justifyContent:"space-evenly",marginVertical: 2,marginBottom:32}}>
                            {
                                detailsIcons.map((detail,index)=>{
                                    return <Animatable.View 
                                    animation="bounceIn"
                                    delay={DURATION+index *100}
                                    key={`${detail.icon}-${index}`} 
                                    style={{
                                        backgroundColor:detail.color, 
                                        height:42, 
                                        width:42, 
                                        borderRadius: 32, 
                                        alignItems:'center',
                                        justifyContent:'center'
                                        }}>
                                        <AntDesign name={detail.icon}  size={22} color={'white'} 
                                        />
                                    </Animatable.View>
                                })
                            }
                        </View>
                        <View>
                            {item.categories.map((category, index)=>{
                                return(
                                    <Animatable.View 
                                    animation="fadeInUp"
                                    delay={(DURATION*2)+(index*200)}
                                    key={category.key} 
                                    style={{marginVertical:10}}>
                                        <Text style={styles.title}>{category.title}</Text>
                                        {category.subcats.map((subcat,index)=>{
                                            return(
                                                <View style={{
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    marginBottom:5,
                                                    marginLeft:10}}
                                                    key={`${subcat}-${index}`}>
                                                    <View 
                                                        style={{
                                                            height:6,
                                                            width:6,
                                                            borderRadius:4,
                                                            backgroundColor:'gold',
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <Text style={styles.subTitle}>{subcat}</Text>
                                                </View>
                                            )
                                        })}
                                    </Animatable.View>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View>
            </SharedElement>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    name:{
      fontWeight:'700',
      fontSize: 24,
      position:'absolute',
      top:TOP_HEADER_HEIGHT - 40,
      left: 20
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
      top: TOP_HEADER_HEIGHT - (height*0.14)+10,
      right:10
    },
    bg:{
      position:'absolute',
      width,
      height:height-TOP_HEADER_HEIGHT-40,
      backgroundColor:'white',
      transform:[{ translateY: TOP_HEADER_HEIGHT}],
      borderRadius:32,
      padding:10,
      paddingTop: 12,
    },
    title:{
        fontWeight:'700',
        fontSize:18,
        marginBottom: 5,
    },
    subTitle:{
        fontSize:14,
        opacity:0.8,
    }
  })
export default SalonListDetails