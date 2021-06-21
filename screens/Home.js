import React  ,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,Image,FlatList ,ActivityIndicator,Alert} from 'react-native'
import { Card,FAB } from 'react-native-paper'


const Home=(props) => {
   const [data,setData]=useState([])
   const [Loading,setLoading]=useState(true)
   const fetchData=()=>{
    fetch("http://10.0.2.2:3000/")
    .then(res=>res.json())
    .then(results=>{
       setData(results)
       setLoading(false)
    }).catch(err=>{
        Alert.alert("went wrong ")
    })
   }
   useEffect(()=>{
      fetchData()
   },[])
    const renderList=((item)=>{
        return(
            <Card style={styles.mycard} key={item._id}
            onPress={()=>props.navigation.navigate("Profile",{item})}
            >
            <View style={styles.cardview}>
            <Image style={{width:60,height:60,borderRadius:30}}
             source={require('../Profile_image.jpg')}

         />
         <View style={{marginLeft:10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
         </View>
         
            </View>
        
        </Card>
        )
    })
    return (
        <View style={{flex:1}}>
            
            <FlatList 
            data={data}
            renderItem={({item})=>{
                  return renderList(item )
            }}
            keyExtractor={item=>item._id}
            onRefresh={()=>fetchData( )}
            refreshing={Loading}
             />
        
        
          <FAB
          onPress={()=>props.navigation.navigate("Create")}
          style={styles.fab}
          small={false}
          icon="plus"
          theme={{colors:{accent:"#006aff"}}}
          
          
           />
            
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
     margin:5,
     
    },
    cardview:{
        flexDirection:'row',
        padding:6
    },
    text:{
        fontSize:20,
       
    },
    fab:{
        position:"absolute",
        margin:16,
        right:0,
        bottom:0

    }
  });

  export default Home