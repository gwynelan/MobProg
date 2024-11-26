import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Report a Problem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutContainer}>
        <Button
          mode="contained"
          onPress={() => router.replace('/')}
          style={styles.logoutButton}
          labelStyle={styles.logoutButtonText}
        >
          Logout
        </Button>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f7a8c',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f7a8c',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
    color: '#4a4a4a',
  },
  logoutContainer: {
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#1f7a8c',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
