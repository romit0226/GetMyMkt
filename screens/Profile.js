import React from 'react'
import { View, Text, StyleSheet,Image,Linking,Platform,Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Title,Card,Button } from 'react-native-paper'
import { MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';











 const  Profile =(props) => {
     const {_id,name,DateOB,email,phone} = props.route.params.item

     const deleteuser=()=>{
         fetch("http://10.0.2.2:3000/delete",{
             method:"post",
             headers: {
                'Content-Type': 'application/json'

              },
              body:JSON.stringify({
                 id:_id


              })

         })
         .then (res=>res.json())
         .then(deleteUsers=>{
           Alert.alert(`${deleteUsers.name} is deleted`)
           props.navigation.navigate("Home")
         })
     }
     
       const openDial=()=>{
         if(Platform.OS==="android"){
           Linking.openURL(`tel:${phone}`)
         }else{
            Linking.openURL(`tel:${phone}`)
         }
       }



    return (
       <View style={styles.root}>
        <LinearGradient 
        colors={["#0033ff","#6bc1ff"]}
        style={{height:"20%"}}
        />
        <View style={{alignItems:"center"}}>
        <Image
         style={{width:130,height:130,borderRadius:130/2,marginTop:-70}}
         source={require('../Profile_image.jpg')}
         />
         </View>
         <View style={{alignItems:"center",margin:15}}>
             <Title>
                 {name}
             </Title>
         </View>
         <Card style={styles.mycard} onPress={()=>{
             Linking.openURL(`mailto:${email}`)
         }}>
             <View style={styles.cardcontent}>
               <MaterialIcons name="email" size={32} color="#006aff" />
                <Text style={styles.mytext} >{ email}</Text>            
             </View>
         </Card>
         <Card style={styles.mycard} onPress={()=>{
             openDial()
         }}>
             <View style={styles.cardcontent}>
               <MaterialIcons name="phone" size={32} color="#006aff" />
                <Text style={styles.mytext} >{phone}</Text>            
             </View>
         </Card>
         <Card style={styles.mycard}>
             <View style={styles.cardcontent}>
               <MaterialIcons name="date-range" size={32} color="#006aff" />
                <Text style={styles.mytext} >{DateOB}</Text>            
             </View>
         </Card>
         <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:15}}>
            
             <Button icon="delete" theme={theme} mode="contained" onPress={() => deleteuser()}>
                 Delete User
             </Button>
         </View>
       </View>
    )
}
const theme={
    colors:{
        primary:"#006aff"
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
    },
    mycard:{
        margin:3
    },
    cardcontent:{
            flexDirection: "row",
            padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})







export default Profile