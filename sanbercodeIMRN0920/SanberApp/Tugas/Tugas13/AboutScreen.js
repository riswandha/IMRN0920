import React from 'react';
import{View, Text, StyleSheet,Platform,Image, TouchableOpacity,FlatList,TextInput,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component{
    render(){
        return(
            <View>
                <Text style={{top: 64,textAlign:'center',fontSize:36,color:'#003366'}}>Tentang Saya</Text>
                <View>
                    <Icon name="account-circle" style={{marginLeft:105,top: 80,backgroundColor:'EBE9E9'}} size={150}/>
                    <Text style={{top: 90,fontSize:24,textAlign:"center",color:'#003366'}}>Riswandha</Text>
                    <Text style={{top: 90,fontSize:16,textAlign:"center",color:'#3EC6FF'}}>React Native Developer</Text>
                </View>
                <View style={{width:344,height:140,left:8,borderRadius:16,backgroundColor:'#EFEFEF',top:100}}>
                    <Text style={{marginLeft:10,fontSize:18,color:'003366',borderBottomWidth:1}}>Portofolio</Text>
                    <View style={styles.tabBar}>
                        <TouchableOpacity style={styles.tabItem}>
                            <Image source={require('./images/gitlab.png')} style={styles.gambar}/>
                            <Text style={styles.tabTitle}>@riswandha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./images/github.png')} style={styles.gambar}/>
                            <Text style={styles.tabTitle}>@riswandha</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                <View style={{width:344,height:180,left:8,borderRadius:16,backgroundColor:'#EFEFEF',top:110}}>
                    <Text style={{marginLeft:10,fontSize:18,color:'003366',borderBottomWidth:1}}>Hubungi saya</Text>
                    <View style={styles.kotak}>
                        <Image source={require('./images/fb.png')} style={{width:20, height: 45}}/>
                        <Text style={{paddingLeft: 25}}>riswandha adhitia</Text>
                    </View>
                    <View style={styles.kotak}>
                        <Image source={require('./images/instagram.png')} style={{width:30, height: 30}}/>
                        <Text style={{paddingLeft: 15}}>@riswandhaadhitia</Text>
                    </View>
                    <View style={styles.kotak}>
                        <Image source={require('./images/twitter.png')} style={{width:30, height: 30}}/>
                        <Text style={{paddingLeft: 15}}>@riswandhaadhitia</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1
    },
    gambar: {
        width:50,
        height: 50
    },
    tabTitle: {

    },
    tabItem: {
        paddingTop:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBar: {
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    kotak: {
        flexDirection:'row',
        alignItems: "center",
        paddingLeft:100,
        paddingTop:10
    },
    rincian:{
      
    }
});