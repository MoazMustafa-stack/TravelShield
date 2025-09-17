import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TravelShield</Text>
        <Text style={styles.headerSubtitle}>Your Journey, Our Priority</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to TravelShield</Text>
          <Text style={styles.heroText}>
            {/* Add your hero text here */}
            [Your compelling hero text will go here]
          </Text>
          
          {/* Get Started Button */}
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.features}>
        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            {/* Replace with your icon */}
            <Text style={styles.featureIconText}>✈️</Text>
          </View>
          <Text style={styles.featureTitle}>[Feature 1]</Text>
          <Text style={styles.featureText}>
            [Brief description of feature 1]
          </Text>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.featureIconText}>🛡️</Text>
          </View>
          <Text style={styles.featureTitle}>[Feature 2]</Text>
          <Text style={styles.featureText}>
            [Brief description of feature 2]
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF6E9', // Light beige
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#118B50', // Dark green
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FBF6E9', // Light beige
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E3F0AF', // Light green
  },
  hero: {
    padding: 20,
    marginBottom: 20,
  },
  heroContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#118B50', // Dark green
    marginBottom: 15,
  },
  heroText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#5DB996', // Medium green
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureIcon: {
    backgroundColor: '#E3F0AF', // Light green
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIconText: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#118B50', // Dark green
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
