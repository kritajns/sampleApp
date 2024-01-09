import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SingleProduct from "../components/SingleProduct";

const MyProduct = ({ navigation, route }) => {
  const newProduct = route?.params?.data;

  const handlePress = () => {
    console.log("inside-press-cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <SingleProduct
        imageURL={newProduct?.image}
        title={newProduct?.title}
        price={newProduct?.price}
        desc={newProduct?.description}
        category={newProduct?.category}
      />
      <TouchableOpacity style={styles.cartContainer} onPress={handlePress}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "flex-start",
    margin: 5,
    backgroundColor: "lightgrey",
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cartText: {
    color: "white",
    fontWeight: "600",
  },
});

export default MyProduct;
