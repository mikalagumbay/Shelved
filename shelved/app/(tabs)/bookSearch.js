import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${API_URL}${query}`);
      const result = await response.json();
      if (result.items) {
        setBooks(result.items);
      } else {
        setBooks([]); // No results
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addToShelf = (shelfType, book) => {
    navigation.navigate('landingPage', { 
      shelfType, 
      newBook: {
        id: book.id,
        title: book.volumeInfo.title,
        cover: book.volumeInfo.imageLinks?.thumbnail || 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
      }
    });

    // Display an alert to confirm the addition
    Alert.alert(
      "Success",
      `"${book.volumeInfo.title}" has been added to your ${shelfType === 'read' ? 'Read' : shelfType === 'wantToRead' ? 'Want to Read' : 'Favorites'} shelf.`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for books"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={fetchBooks} />

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image
              source={{ uri: item.volumeInfo.imageLinks?.thumbnail}}
              style={styles.thumbnail}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <Text>{item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}</Text>
              
              {/* Add buttons to select which shelf to add the book to */}
              <TouchableOpacity onPress={() => addToShelf('read', item)}>
                <Text style={styles.button}>Add to Read</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => addToShelf('wantToRead', item)}>
                <Text style={styles.button}>Add to Want to Read</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => addToShelf('favorite', item)}>
                <Text style={styles.button}>Add to Favorites</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  bookItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    color: 'blue',
    marginTop: 5,
  },
});

export default BookSearch;
