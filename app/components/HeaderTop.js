import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HeaderTop = ({ rightIcon, title, styleOverride, children, onPress2 }) => {
  const countValue = useSelector((state) => state.count);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back"
        size={30}
        style={styles.iconStyle}
        onPress={() => navigation.goBack()}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {rightIcon && (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={onPress2}
        >
          <Icon name="cart" size={30} />
          {countValue > 0 && (
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>{countValue}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
  // cartStyle: {
  //   alignItems: "flex-end",
  //   right: -30,
  // },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
  },
  notificationContainer: {
    // position: "absolute",
    top: -12,
    right: 10,
    height: 20,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 4,
  },

  notificationText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default HeaderTop;
