import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';

// const bookshelvesData = {
//   read: [/* Array of books user has read */],
//   wantToRead: [/* Array of books user wants to read */],
//   favorite: [/* Array of favorite books */],
// };



const bookshelvesData = {
    //Test data, hardcoded
    read: [
      { id: 1, title: 'Book 1', cover: 'https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0' },
      { id: 2, title: 'Book 2', cover: 'https://images.booksense.com/images/221/010/9780545010221.jpg' },
      { id: 3, title: 'Book 3', cover: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_148,c_scale,dpr_1.5/jackets/9781408855676.jpg'},
      { id: 4, title: 'Book 4', cover: 'https://images.booksense.com/images/873/064/9780439064873.jpg'},
      { id: 5, title: 'Book 5', cover: 'https://images.booksense.com/images/427/791/9780545791427.jpg'}
    ],
    wantToRead: [
      { id: 6, title: 'Book 1', cover: '' },
      { id: 7, title: 'Book 2', cover: '' }
    ],
    favorite: [
      { id: 5, title: 'Book 1', cover: '' },
      { id: 6, title: 'Book 2', cover: '' }
    ],
  };
  

  
  // Function to get book information 
const HomePage = ({navigation}) => {
  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.bookCard}>
      <Image source={{ uri: item.cover }} style={styles.bookCover} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bookshelves</Text>
        
        {/* Get book data from each array using renderBook() function */}
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
    textDecorationLine: 'underline'
  },
});

export default HomePage;

