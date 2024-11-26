import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/me.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Gwyn Elan</Text>
        <Text style={styles.bio}>Dog Lover 🐶 | Food Lover 🍣 | Tech Enthusiast 💻</Text>
      </View>

      {/* Profile Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>300</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
          <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f4f6', 
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#1f7a8c',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  bio: {
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statLabel: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#1f7a8c',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#1f7a8c',
  },
  secondaryButtonText: {
    color: '#1f7a8c',
  },
});
