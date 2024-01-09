import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SingleProduct = ({ imageURL, title, price, desc, category }) => {
  console.log("title, price, desc", title, price);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text styles={styles.textStyle}>{category}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.longText}>{desc}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    // flex: 1,
    backgroundColor: "white",
    height: 400,
    marginTop: 10,
    // borderRadius: 20,
    marginVertical: 10,
  },
  imageStyle: {
    width: "60%",
    height: "90%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
    // marginBottom: 10,
  },
  textContainer: {
    marginVertical: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  container2: {
    marginVertical: 10,
  },
  longText: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SingleProduct;
