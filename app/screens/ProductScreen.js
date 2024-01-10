import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // filtering the product list based on selected category
  const filteredList =
    selectedCategory === "All"
      ? productList
      : productList.filter((item) => item.category === selectedCategory);

  // function to fetch lists of products
  const fetchProductList = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log('this is data', data);
        setProductList(data);
      })
      .catch((err) => {
        console.log("Failed to load data", err);
      });
  };

  // function to get all categories
  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log("Categories data error-=-=-", error);
      });
  };

  useEffect(() => {
    fetchProductList();
    fetchCategories();
  }, []);

  console.log("products-=-=-=123", productList);

  // rendering categories list
  const renderCategories = ({ item }) => {
    console.log("this is items-=-=-", item);
    const isSelected = selectedCategory == item;
    return (
      <TouchableOpacity
        style={[
          styles.boxContainer,
          { backgroundColor: isSelected ? "darkblue" : "white" },
        ]}
        onPress={() => setSelectedCategory(item)}
      >
        <Text
          style={[
            styles.itemStyle,
            { color: isSelected ? "white" : "darkblue" },
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  console.log("selected-=-=-", selectedCategory);

  // rendering the product lists
  const renderProductItem = ({ item }) => {
    return (
      <>
        <ProductCard
          title={item?.title}
          price={item?.price}
          imageURI={item?.image}
          onPress={() => {
            navigation.navigate("MyProduct", {
              data: item,
            });
          }}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 35, marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
      </View>

      <ScrollView
        // contentContainerStyle={{
        //   flexDirection: "row",
        //   justifyContent: "center",
        // }}
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[
            styles.boxContainer,
            {
              backgroundColor:
                selectedCategory === "All" ? "darkblue" : "white",
            },
          ]}
          onPress={() => setSelectedCategory("All")}
        >
          <Text
            style={[
              styles.itemStyle,
              { color: selectedCategory === "All" ? "white" : "darkblue" },
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategories}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>

      <View style={{ marginTop: 15, marginBottom: 10, marginLeft: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {selectedCategory === "All" ? "My Products" : selectedCategory}
        </Text>
      </View>

      <FlatList
        data={filteredList}
        // horizontal
        renderItem={renderProductItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
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
  scrollView: {},
  boxContainer: {
    // height: '35%',
    width: 140,
    height: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "darkblue",
    marginHorizontal: 4,
    borderRadius: 30,
  },
  itemStyle: {
    color: "darkblue",
  },
});

export default ProductScreen;
