import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Ionicons";

const Header = ({ rightIcon, title, styleOverride, children, onPress1 }) => {
  return (
    <View style={styles.container}>
      <Icon name="back" size={25} style={styles.iconStyle} onPress={onPress1} />
      <Text style={styles.titleText}>{title}</Text>
      {rightIcon && (
        <Icon
          name="cart"
          size={25}
          style={[styles.iconStyle, { ...styleOverride }]}
        />
      )}
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
  },
  iconStyle: {},
  titleText: {},
});

export default Header;
