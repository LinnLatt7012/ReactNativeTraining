import { useNavigation, useRoute } from '@react-navigation/native'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
const {width, height} = Dimensions.get('screen');

const SalonListDetails =()=>{
    const navigation = useNavigation()
    const {params}= useRoute()
    const {item} = params;
    return(
        <View style={{flex:1}}>
            {/* <AntDesign>

            </AntDesign> */}
            <View style={{flex:1, padding: 10, }}>
                <View style={[StyleSheet.absoluteFillObject,
                  {backgroundColor: item.color, borderRadius: 16 }]}/>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Image source={{uri: item.image }} style={styles.image} />
            </View>
        </View>
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
    }
  })

export default SalonListDetails