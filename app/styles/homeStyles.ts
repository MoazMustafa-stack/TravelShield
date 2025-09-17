import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
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
    color: '#333',
    marginBottom: 25,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#118B50', // Dark green
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  features: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#E3F0AF', // Light green
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
    fontWeight: 'bold',
    color: '#118B50', // Dark green
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
