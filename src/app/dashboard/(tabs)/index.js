import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Cute Dogs Gallery</Text>
        <Text style={styles.subtitle}>
          "Let these adorable dogs brighten your day!"
        </Text>
      </View>

      {/* 4 Image Grid */}
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/4.jpg')}
            style={styles.gridImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/6.jpg')}
            style={styles.gridImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/6.jpg')}
            style={styles.gridImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/5.jpg')}
            style={styles.gridImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Enjoy these lovely dog photos! They’re sure to make you smile.
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4a4a4a',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  gridContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridImage: {
    width: 150,
    height: 150,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  messageContainer: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: '90%',
  },
  messageText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '500',
  },
  actionButton: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: '#1f7a8c',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Home;
