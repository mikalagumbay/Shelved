import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const LandingPage = () => {
  const route = useRoute();

  // Manage each bookshelf
  const [bookshelvesData, setBookshelvesData] = useState({
    read: [],
    wantToRead: [],
    favorite: [],
  });
  
  // Add the book to the correct bookshelf based on the param
  useEffect(() => {
    if (route.params?.newBook && route.params?.shelfType) {
      const { newBook, shelfType } = route.params;
      setBookshelvesData((prevState) => ({
        ...prevState,
        [shelfType]: [...prevState[shelfType], newBook],
      }));
    }
  }, [route.params]);

  // Render each book 
  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.bookCard}>
      <Image source={{ uri: item.cover}} style={styles.bookCover} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bookshelves</Text>

        {/* Bookshelves */}
        <Text style={styles.sectionTitle}>Read</Text>
        <FlatList
          data={bookshelvesData.read}
          renderItem={renderBook}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.bookshelf}
        />

        <Text style={styles.sectionTitle}>Want to Read</Text>
        <FlatList
          data={bookshelvesData.wantToRead}
          renderItem={renderBook}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.bookshelf}
        />

        <Text style={styles.sectionTitle}>Favorites</Text>
        <FlatList
          data={bookshelvesData.favorite}
          renderItem={renderBook}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.bookshelf}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45, // Not go over phone notch
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    marginVertical: 10,
  },
  bookshelf: {
    paddingLeft: 15,
    marginBottom: 20,
  },
  bookCard: {
    width: 100,
    marginRight: 15,
    alignItems: 'center',
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  bookTitle: {
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LandingPage;
