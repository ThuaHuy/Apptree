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




const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation}) => {

  var color  ="black";

  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['TẤT CẢ', 'ĐỂ BÀN', 'THỦY SINH', 'SEN ĐÁ', 'XƯƠNG RỒNG'];

  const [product, setProduct] = useState([]);
  const [keyname, setKeyname] = useState("");
  const changeColor = () =>{
     color = "red";
  }
  const addOneCart = (id) =>{
    Alert.alert("Thông báo","Đã thêm vào giỏ",[
      {text:"Đã hiểu"}
    ])
    axios.get(`http://192.168.50.220:3000/cart_app/1/${id}`, {
        
      })
          .then(function (response) {
            
              
            })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
            
          });

  }
  const showMessage = (index) => {
    setCategoryIndex(index)
   switch (index) {
     case 0:
      axios.get('http://192.168.50.220:3000/app_product', {
        
      })
          .then(function (response) {
            
            setProduct(response.data)
              
          })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
              // always executed
          }); 
       break;
      case 1:
        axios.get(`http://192.168.50.220:3000/category_app/Cây ${categories[1].toLowerCase()}`, {
        
        })
            .then(function (response) {
              
              setProduct(response.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
         break;
         case 2:
          axios.get(`http://192.168.50.220:3000/category_app/Cây ${categories[2].toLowerCase()}`, {
          
          })
              .then(function (response) {
                
                setProduct(response.data)
                  
              })
              .catch(function (error) {
                  console.log(error);
              })
              .then(function () {
                  // always executed
              }); 
           break;
           case 3:
        axios.get(`http://192.168.50.220:3000/category_app/Cây ${categories[3].toLowerCase()}`, {
        
        })
            .then(function (response) {
              
              setProduct(response.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
         break;
         case 4:
        axios.get(`http://192.168.50.220:3000/category_app/Cây ${categories[4].toLowerCase()}`, {
        
        })
            .then(function (response) {
              
              setProduct(response.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
         break;
     
      default:
        
       
   }
  }
  
  const searchProduct = (text) => {
    axios.get(`http://192.168.50.220:3000/search_app/${text}`, {
        
        })
            .then(function (response) {
              setProduct(response.data);
              
             
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
  }
  const sortAscending = () => {
    axios.get(`http://192.168.50.220:3000/products_1`, {
        
        })
            .then(function (response) {
              setProduct(response.data);
             
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
  }
  const sortDecrease = () => {
    axios.get(`http://192.168.50.220:3000/products_-1`, {
        
        })
            .then(function (response) {
              setProduct(response.data);
             
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
  }

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
      <ScrollView 
      horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -10,}}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => showMessage(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    );
  };

  const Card = ({product}) => {

    
    return (
      
      <TouchableOpacity
       
        activeOpacity={0.8}
       >
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
          
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: product.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color='black'
                onPress={() => changeColor()}
                
                
              />
            </View>
          </View>
       
          <TouchableOpacity onPress={() => navigation.navigate('Details', product)}
          
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            
            <Image
             
              source={{uri: `http://192.168.50.220:3000/themes/images/cloth/${product.img}`}}
              style={{flex: 1, resizeMode: 'contain', width:500, height:500}}
            />
          </TouchableOpacity>

          <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}} >
            {product.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {product.price}.000đ
            </Text>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="add" size={30} color={COLORS.white}  onPress={() => addOneCart(product._id)}/>
            </View>
          </View>
          
        </View>
      </TouchableOpacity>
     
    );
      
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Chào mừng</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Htrees
          </Text>
        </View>
        <Icon name="shopping-cart" size={28}  onPress={() => navigation.navigate('Cart')}/>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Tìm kiếm" style={style.input}  onChangeText={(text) => searchProduct(text)}/>
        </View>
        <TouchableOpacity style={style.sortBtn} onPress={() => sortAscending()}>
          <Icon2 name="sort-amount-up-alt" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity style={style.sortBtn} onPress={() => sortDecrease()} >
          <Icon2 name="sort-amount-down" size={30} color={COLORS.white} />
        </TouchableOpacity>
        
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={product}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold', marginLeft:10,},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
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
export default HomeScreen;
