import axios from 'axios';
import React, {useEffect, useState}  from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Alert, TextInput} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors2';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {PrimaryButton} from '../../consts/Button';
import RNRestart from 'react-native-restart';
import { set } from 'react-native-reanimated';

const CartScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [listString, setListString] = useState(``);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const array = [];

  axios.get('http://192.168.50.220:3000/showtotal_app', {
        
  })
  
      .then(function (response) {
        setTotal(response.data)

      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      }); 
   

  useEffect(() => {
  axios.get('http://192.168.50.220:3000/showcart_app', {
        
      })
      
          .then(function (response) {
            setList(response.data)
            
          })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
              // always executed


          }); 
        }, []);
       
         
  const delCart = () => {
    axios.get('http://192.168.50.220:3000/delcart', {
        
      })
      
          .then(function (response) {
            Alert.alert("Đã xóa","Mời bạn mua sắm thêm <3",[
              {text:"Đã hiểu"}
            ])
               navigation.navigate("Home");
          })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
              // always executed
          });
  }
  const updateQuantity = (id,quantity) => {
    
    axios.get(`http://192.168.50.220:3000/updateQuantity/${id}/${quantity}`, {
        
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
  const showTotal = () => {
    axios.get('http://192.168.50.220:3000/showtotal_app', {
        
  })
  
      .then(function (response) {
        setTotal(response.data)

      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      }); 
    
  }
  const showCart = () => {
    axios.get('http://192.168.50.220:3000/showcart_app', {
        
    })
    
        .then(function (response) {
          setList(response.data)
          
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed


        }); 
    
  }
  const updateCart = () => {
    showCart();
    showTotal();
  }
 
  const CartCard = ({item}) => {
     var listStr = `${item.name}:${item.quantity}`;
     array.push(listStr);
    return (
      <View style={style.cartCard}>
        <Image source={{uri: `http://192.168.50.220:3000/themes/images/cloth/${item.img}`}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.price}.000đ</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.searchContainer}>
         
          <TextInput style={{borderColor:"#00B761", borderRadius:10,borderWidth:1, textAlign:"center",height:40}} onChangeText={(text) => updateQuantity(item._id,text)}>{item.quantity}</TextInput>
        </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Giỏ hàng</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={list}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Tổng giá
              </Text>
              
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{total}.000đ</Text>
              
            </View>
            
            <View style={{marginHorizontal: 70,flexDirection:"row",justifyContent:"space-between"}}> 
              <Icon name='local-shipping' size={30}  onPress={() => navigation.navigate('Checkout', {
            total: total,
            list: array,
          })}/>
              <Icon2 name='md-trash-bin' size={30}  onPress={() => delCart()}/>
              <Icon name='update' size={30}  onPress={() => updateCart()}/>
            </View>
            
              
            
          </View>
          
        )}
      />
    </SafeAreaView>
  );
};
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
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
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
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;