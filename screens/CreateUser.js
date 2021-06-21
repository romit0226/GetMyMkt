import React, { useState } from 'react'
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView  } from 'react-native'
import { TextInput,Button } from 'react-native-paper'

const CreateUser=(props,route)=> {
    
    const [Name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setemail]=useState("")
    const [DateOB,setDateOB]=useState("")
  
    
    const [modal,setmodal]=useState(false)
    const[enableShift,setenableShift]=useState(false)
    
        const submitData=()=>{
             fetch("http://10.0.2.2:3000/send-data",{
                 method:"post",
                 headers: {
                    'Content-Type': 'application/json'

                  },
                  body:JSON.stringify({
                      name:Name,
                      email:email,
                      phone,
                      DateOB:DateOB,


                  })
             })
             .then(res=>res.json())
             .then(data=>{
                 Alert.alert(`${data.name} is saved`)
                 props.navigation.navigate("Home")
             }).catch(err=>{
                Alert.alert("went wrong ")
            })






        }
      
        return (
            <View style={styles.root}>
                      <TextInput
                      label="Name"
                      style={styles.inputStyle}
                        value={Name}
                        mode="outlined"
                        theme={theme}
                           onChangeText={text => setName(text)}
                       />
                     
                        <TextInput
                      label="Email"
                      style={styles.inputStyle}
                        value={email}
                        mode="outlined"
                        theme={theme}
                           onChangeText={text => setemail(text)}
                       />
                       <TextInput
                      label="DOB"
                      style={styles.inputStyle}
                        value={DateOB}
                        mode="outlined"
   
                        keyboardType="number-pad"
                        textContentType="telephoneNumber"
                        theme={theme}
                           onChangeText={text => setDateOB(text)}
                       />
                       
                        <TextInput
                      label="Phone "
                      style={styles.inputStyle}
                        value={phone}
                        mode="outlined"
                        theme={theme}
                        keyboardType="number-pad"
                           onChangeText={text => setPhone(text)}
                       />
                     
                        <Button style={styles.inputStyle}  icon="content-save"  mode="contained" onPress={() => submitData()}  title="Press Me">
                                Save
                        </Button>
                       
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={()=>{
                            setmodal(false  )
                        }}
                        >
                              <View style={styles.modalview}>
                                  <View style={styles.modalButtonview}>
                                      <Button 
                                      icon="camera"
                                      theme={theme} mode="contained" onPress={() => console.log("preesed")} title="Camera"
                                       >
                                       Camera
                                      </Button>
                                      <Button icon="image-area"
                                      theme={theme} mode="contained" onPress={() => console.log("pressed")} title="Gallery" >
                                         Upload
                                      </Button>
                                  </View>
                               <Button  
                               theme={theme}
                               onPress={() => setmodal(false)}  >
                                 cancel 
                                </Button>
                            </View>
                        </Modal>
                      
                
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
    inputStyle:{
        margin:10,
    },
    modalButtonview:{
        flexDirection:'row',
        justifyContent:"space-around",
        padding:10
    },
    modalview:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    }
})



export default CreateUser

