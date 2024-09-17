import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/shelved-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>What is Shelved?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.sectionTitle}>About Shelved</Text>
      <Text style={styles.paragraph}>
        Shelved is your personal digital library app, designed to help you organize, 
        discover, and enjoy your book collection like never before.
      </Text>
      
      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.paragraph}>
        • Scan or search for books using the Google Books API{'\n'}
        • Organize your books into custom shelves{'\n'}
        • Track your reading progress{'\n'}
      </Text>
      
      <Text style={styles.sectionTitle}>How It Works</Text>
      <Text style={styles.paragraph}>
        Shelved utilizes the powerful Google Books API to provide you with accurate 
        and comprehensive book information. 
      </Text>
      
      <Text style={styles.sectionTitle}>Get Started</Text>
      <Text style={styles.paragraph}>
        Start building your digital library today! {'\n\n'}
        <a href="https://www.flaticon.com/free-icons/study" title="study icons">Study icons created by Icon Hubs - Flaticon</a>
      </Text>
      
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      
      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 15,
  },
  version: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
  },
});