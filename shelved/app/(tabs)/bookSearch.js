import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image } from 'react-native';

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

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
            {item.volumeInfo.imageLinks?.thumbnail ? (
              <Image
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                style={styles.thumbnail}
              />
            ) : (
              <Image
                source={{ uri: 'https://via.placeholder.com/100x150?text=No+Cover' }}
                style={styles.thumbnail}
              />
            )}
            <View style={styles.info}>
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <Text>{item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}</Text>
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
});

export default BookSearch;
