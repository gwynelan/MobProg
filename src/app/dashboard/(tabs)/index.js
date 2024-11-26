import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Don't Lose Hope!</Text>
        <Text style={styles.subtitle}>
          "No matter how tough the journey, we can get through this together."
        </Text>
      </View>

      
      <Image
        source={require('../../../assets/6.jpg')}
        style={styles.illustration}
        resizeMode="contain"
      />

     
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Every small step forward counts. Remember, brighter days are ahead.
        </Text>
      </View>

      
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Take a Step Forward</Text>
      </TouchableOpacity>
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
  illustration: {
    width: 250,
    height: 200,
    marginTop: 20,
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
