import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const Checkout = ({navigation, route}) => {
  const { total, list } = route.params;

  
  const addBill = () => {
    axios.get(`http://192.168.50.220:3000/bill/${name}/${email}/${phone}/${address}/${list}/${total}`, {
        
    })
    
        .then(function (response) {
          
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        Alert.alert("Đã xác nhận ","Hãy đợi chúng tôi giao hàng!",[
          {text:"Đã hiểu"}
        ])
        delCart();
        navigation.navigate("Home");
  }
  const delCart = () => {
    axios.get('http://192.168.50.220:3000/delcart', {
        
      })
      
          .then(function (response) {
            
          })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
              // always executed
          });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thanh toán</Text>
        </View>
        <View style={{margin:20}}>
         <Text style={style.textInfo}>Họ và tên:</Text>
          <TextInput placeholder='Nhập tên vào đây' style={style.inputInfo} onChangeText={(text) => setName(text)} />
          <Text style={style.textInfo}>Email:</Text>
          <TextInput placeholder='abc@gmail.com' style={style.inputInfo} onChangeText={(text) => setEmail(text)} />
          <Text style={style.textInfo}>SDT:</Text>
          <TextInput placeholder='09xxxxxxxx' style={style.inputInfo}  onChangeText={(text) => setPhone(text)}/>
          <Text style={style.textInfo}>Địa chỉ:</Text>
          <TextInput placeholder='Số nhà,đường,quận' style={style.inputInfo}  onChangeText={(text) => setAddress(text)}/>
          
          </View>
          <TouchableOpacity style={style.buyBtn} onPress={() => addBill()}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Xác nhận
              </Text>
            </TouchableOpacity>
        </SafeAreaView>
      
    );
}
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    cartCard: {
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: COLORS.white,
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    buyBtn: {
      width: 130,
      height: 50,
      backgroundColor: "#00B761",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      alignSelf:"center",
    },
    actionBtn: {
      width: 80,
      height: 30,
      backgroundColor: "#00B761",
      borderRadius: 30,
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    textInfo: {
      fontSize:17,
      color:"black",
      marginBottom:5,
      
    
      
    },
    inputInfo: {
      fontSize:15,
      borderRadius:15,
      borderWidth:1,
      borderColor: "#00B761",
      marginBottom:15,
  
  
      
    },
  });
export default Checkout;