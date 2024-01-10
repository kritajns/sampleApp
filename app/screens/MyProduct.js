import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SingleProduct from "../components/SingleProduct";
import HeaderTop from "../components/HeaderTop";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Actions";

const MyProduct = ({ navigation, route }) => {

  const newProduct = route?.params?.data;
  const dispatch = useDispatch();

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const cartState = useSelector((state) => state);
  console.log('testing-cart-state', cartState);


  // function to check if the item is in the cart
  const cartItemCheck = () => {
    const isInCart = cartItems.some((item) => item.id === newProduct.id);
    return isInCart;
  };

  // adding items to cart
  const handlePress = () => {
    const isInCart = cartItemCheck();

    if (!isInCart) {
      // setCartItems([...cartItems, newProduct]);
      // setCartCount(cartCount + 1); 
      dispatch(addToCart(newProduct));
      console.log('Item added to the cart');
    } else {
      console.log('Item already in the cart');
    }
  };
  console.log('cart-count', cartCount);

  const navigateToCart = () => {
    navigation.navigate('MyCart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <HeaderTop
        title={newProduct?.category}
        rightIcon
        // cartCount={cartCount}
        onPress2={navigateToCart}
      />
      <SingleProduct
        imageURL={newProduct?.image}
        title={newProduct?.title}
        price={newProduct?.price}
        desc={newProduct?.description}
      />
      <TouchableOpacity style={styles.cartContainer} onPress={handlePress}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: "flex-start",
    backgroundColor: "lightgrey",
    marginTop: 25,
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'orange',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 10
  },
  cartText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
});

export default MyProduct;
