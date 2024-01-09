import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ title, price, imageURI, onPress }) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={onPress}>
      <Image source={{ uri: imageURI }} style={styles.imageStyle} />
      <Text style={styles.titleText} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.textStyle}>$ {price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    height: 240,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
    color: "grey",
  },
  textStyle: {
    fontSize: 19,
    fontWeight: "bold",
    // fontStyle: 'italic',
    color: "orange",
  },
  imageStyle: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
});

export default ProductCard;
