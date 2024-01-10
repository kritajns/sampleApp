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
      <View style={styles.textContainer}>
        <Text style={styles.longText}>{desc}</Text>
        <View style={styles.priceContent}>
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    // flex: 1,
    backgroundColor: "white",
    height: 400,
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
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
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
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    lineHeight: 22,
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  priceContent: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 80,
    height: 30,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default SingleProduct;
