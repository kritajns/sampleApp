import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ProductCard from './app/components/ProductCard';

export default function App() {

  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  // filtering the product list based on selected category
  const filteredList = selectedCategory === 'All' ? productList : productList.filter(item => item.category === selectedCategory);

  // function to fetch lists of products
  const fetchProductList = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // console.log('this is data', data);
        setProductList(data);
      })
      .catch(err => {
        console.log('Failed to load data', err);
      })
  };

  // function to get all categories
  const fetchCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => {
        console.log('Categories data error-=-=-', error);
      })
  };

  useEffect(() => {
    fetchProductList();
    fetchCategories();
  }, []);

  console.log('products-=-=-=123', productList);

  // rendering categories list
  const renderCategories = ({item}) => {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={() => setSelectedCategory(item)}>
        <Text style={styles.itemStyle}>{item}</Text>
      </TouchableOpacity>
    )
  };

  // rendering the product lists
  const renderProductItem = ({item}) => {
    return (
      <>
      <ProductCard
        title={item?.title}
        price={item?.price}
        imageURI={item?.image}
      />

      {/* <Button title='Add to Cart' /> */}
      </>
    );
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 35, marginBottom: 10, marginLeft: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
      </View>

      <ScrollView contentContainerStyle={{flexDirection: 'row', justifyContent: 'center'}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.boxContainer} onPress={() => setSelectedCategory('All')}>
          <Text style={styles.itemStyle}>All</Text>
        </TouchableOpacity>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategories}
          keyExtractor={(item, index) => index.toString()}
        />

      </ScrollView>

      <View style={{marginTop: 15, marginBottom: 10, marginLeft: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{selectedCategory === 'All' ? 'My Products' : selectedCategory}</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
    backgroundColor: 'lightgrey',
  },
  boxContainer: {
    // height: '35%',
    width: 140,
    height: 40,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    marginHorizontal: 4,
    // borderRadius: 70,
  },
  itemStyle: {
    color: 'white'
  },
});
