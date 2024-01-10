import React from "react";
import {SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import HeaderTop from "../components/HeaderTop";

const CartScreen = ({ navigation, route }) => {
  const cartItems = useSelector((state) => state.items);
  console.log('this is cart items-=-=-', cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = () => {
    console.log('item removed');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderTop title={'My Carts'} /> */}
      <Text style={{fontWeight: 'bold', fontSize: 18}}>My Carts</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartContainer}>
            <View style={{marginLeft: 20}}>
              <Image source={{uri: item?.image}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text numberOfLines={2}>{item.title}</Text>
              <Text>Quantity: 1</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Total: ${item.price * 1}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
      {cartItems.length > 0 && (
        <View>
          <Text>Total Price: ${totalPrice}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 10,
    marginTop: 30,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  textContainer: {
    width: 300,
    marginHorizontal: 10
  },
});

export default CartScreen;
