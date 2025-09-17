import { Link } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './styles/homeStyles';

export default function Home() {
  return (
    <SafeAreaView style={homeStyles.container}>
      {/* Header Section */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.headerTitle}>TravelShield</Text>
        <Text style={homeStyles.headerSubtitle}>Your Journey, Our Priority</Text>
      </View>

      {/* Hero Section */}
      <View style={homeStyles.hero}>
        <View style={homeStyles.heroContent}>
          <Text style={homeStyles.heroTitle}>Welcome to TravelShield</Text>
          <Text style={homeStyles.heroText}>
            {/* Add your hero text here */}
            [Your compelling hero text will go here]
          </Text>
          
          {/* Get Started Button */}
          <Link href="../(auth)/login" asChild>
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Features Section */}
      <View style={homeStyles.features}>
        <View style={homeStyles.featureCard}>
          <View style={homeStyles.featureIcon}>
            {/* Replace with your icon */}
            <Text style={homeStyles.featureIconText}>✈️</Text>
          </View>
          <Text style={homeStyles.featureTitle}>[Feature 1]</Text>
          <Text style={homeStyles.featureText}>
            [Brief description of feature 1]
          </Text>
        </View>

        <View style={homeStyles.featureCard}>
          <View style={homeStyles.featureIcon}>
            <Text style={homeStyles.featureIconText}>🛡️</Text>
          </View>
          <Text style={homeStyles.featureTitle}>[Feature 2]</Text>
          <Text style={homeStyles.featureText}>
            [Brief description of feature 2]
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
