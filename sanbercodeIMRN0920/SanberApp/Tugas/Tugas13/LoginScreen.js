import React from 'react';
import{View, Text, StyleSheet,Platform,Image, TouchableOpacity,FlatList,TextInput,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image source={require('./images/logo1.png')} style={{width:375, height: 102,marginTop:43}}/>
                    <Text style={styles.login}>Login</Text>
                    <View>
                        <Text style={{position:"absolute", width: 127, height: 19,left: 41, top: 83, fontSize: 16,lineHeight: 19}}>Username/Email</Text>
                        <TextInput style={styles.Input}/>
                    </View>
                    <View>
                        <Text style={{position:"absolute", width: 71, height: 19,left: 41, top: 163, fontSize: 16,lineHeight: 18.75}}>Password</Text>
                        <TextInput secureTextEntry={true} style={styles.password}/>
                    </View>
                    <View>
                        <TouchableOpacity style={{top: 200,width:140,height:40,backgroundColor:'#3ec5ff',left: 118,borderRadius:15}}>
                            <Text style={{textAlign:'center',marginTop:5,color:'white',fontSize: 20}}>Masuk</Text>
                        </TouchableOpacity>
                        <Text style={{top: 210,textAlign:"center",color:"#3EC6FF",fontSize:24}}>  atau</Text>
                        <TouchableOpacity style={{top: 220,width:140,height:40,backgroundColor:'#003366',left: 118,borderRadius:15}}>
                            <Text style={{textAlign:'center',marginTop:5,color:'white',fontSize: 20}}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>
        )
    }
};

const styles =  StyleSheet.create({
    container: {
        flex: 1
    },
    login: {
        position: "absolute",
        fontSize: 24,
        lineHeight:28.13,
        marginTop:56,
        width: 60,
        height: 28,
        left: 158,
        top: 120
    },
    Input: {
        position: "absolute",
        width: 294,
        height: 48,
        left: 41,
        top: 105,
        borderColor: 'black',
        borderWidth: 1
    },
    password: {
        width:294,
        height: 48,
        left: 41,
        top: 184,
        borderColor: 'black',
        borderWidth:1
    }
})