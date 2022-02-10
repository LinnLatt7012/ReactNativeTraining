import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from '@react-navigation/native'
import {View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native'
import { detailsIcons } from "./salon";
const {width, height} = Dimensions.get('screen');
const TOP_HEADER_HEIGHT= height *0.3
const SalonListDetails =()=>{
    const navigation = useNavigation()
    const {params}= useRoute()
    const {item} = params;
    return(
        <View style={{flex:1}}>
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
            {/* <View style={{flex:1, padding: 10, }}> */}
                <View style={[StyleSheet.absoluteFillObject,
                  {backgroundColor: item.color, borderRadius: 0, height:TOP_HEADER_HEIGHT+32 }]}/>
                <Text style={styles.name}>{item.name}</Text>
                {/* <Text style={styles.jobTitle}>{item.jobTitle}</Text> */}
                <Image source={{uri: item.image }} style={styles.image} />
            {/* </View> */}
                <View style={styles.bg}>
                    <ScrollView>
                        <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                            {
                                detailsIcons.map((detail,index)=>{
                                    return <View key={`${detail.icon}-${index}`} 
                                    style={{
                                        backgroundColor:detail.color, 
                                        height:42, 
                                        width:42, 
                                        borderRadius: 32, 
                                        alignItems:'center',
                                        justifyContent:'center'
                                        }}>
                                        <AntDesign name={detail.icon}  size={22} color={'white'} />
                                    </View>
                                })
                            }
                        </View>
                        <View>
                            {item.categories.map((category)=>{
                                return(
                                    <View key={category.key}>
                                        <Text style={styles.title}>{category.title}</Text>
                                        {category.subcats.map((subcat,index)=>{
                                            return(
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
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
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
      fontWeight:'700',
      fontSize: 20,
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
      top: TOP_HEADER_HEIGHT - (height*0.14),
      right:0
    },
    bg:{
      position:'absolute',
      width,
      height,
      backgroundColor:'white',
      transform:[{ translateY: TOP_HEADER_HEIGHT}],
      borderRadius:32,
      padding:10,
      paddingTop: 42,
    }
  })

export default SalonListDetails