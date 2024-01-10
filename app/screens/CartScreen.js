import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Actions";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CartScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // to remove items from cart
  const handleRemoveItem = (id) => {
    console.log("item removed");
    dispatch(removeFromCart(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Icon name="arrow-left" size={30} onPress={() => navigation.goBack()} />
        <View style={{ alignItems: "center", width: 350 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            My Carts
          </Text>
        </View>
      </View>
      {cartItems.length == 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            No cart items found.
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item?.image }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.headerText}>
                  {item.title}
                </Text>
                <Text style={styles.textStyle}>Quantity: {item.quantity}</Text>
                <Text style={styles.textStyle}>Price: ${item.price}</Text>
                <Text
                  style={[
                    styles.textStyle,
                    { fontWeight: "bold", color: "green", fontSize: 16 },
                  ]}
                >
                  Total: ${item.price * item.quantity}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Icon name="delete" size={30} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    marginTop: 30,
    backgroundColor: "white",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  textStyle: {
    marginTop: 5,
    fontSize: 14,
  },
  totalContainer: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 10,
  },
  totalText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
