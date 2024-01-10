import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HeaderTop = ({ rightIcon, title, styleOverride, children, onPress2 }) => {
  const countValue = useSelector(state => state.count);
  console.log('counts-=-=-', countValue);

  const navigation = useNavigation();

  // const handleCartPress = () => {
  //   // Navigate to the cart or perform any other cart-related actions
  //   console.log('Navigate to Cart or perform cart-related actions');
  // };
  
  return (
    <View style={styles.container}>
      <Icon name="arrow-back" size={30} style={styles.iconStyle} onPress={() => navigation.goBack()} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      
      {rightIcon && (
        <TouchableOpacity style={{ position: 'relative' }} onPress={onPress2}>
          <Icon
            name="cart"
            size={30}
            style={[styles.cartStyle, { ...styleOverride }]}
          />
          {countValue > 0 && (
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>{countValue}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}


      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10
  },
  cartStyle: {
    alignItems: 'flex-end',
    right: -30
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    // alignSelf: 'center',
    marginLeft: 20
  },
  notificationContainer: {
    position: 'absolute',
    top: 0,
    right: -40,
    height: 20,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 4,
  },

  notificationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
});

export default HeaderTop;
