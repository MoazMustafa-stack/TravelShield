import { useRouter } from 'expo-router';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginStyles } from './styles/loginStyles';

export default function Signup() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Text style={loginStyles.headerTitle}>Create Account</Text>
        <Text style={loginStyles.headerSubtitle}>Sign up to get started</Text>
      </View>

      <View style={loginStyles.form}>
        <View style={loginStyles.inputContainer}>
          <Text style={loginStyles.label}>Full Name</Text>
          <TextInput
            style={loginStyles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            autoCapitalize="words"
          />
        </View>

        <View style={loginStyles.inputContainer}>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            style={loginStyles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={loginStyles.inputContainer}>
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            style={loginStyles.input}
            placeholder="Create a password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={loginStyles.loginButton}>
          <Text style={loginStyles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={loginStyles.signupContainer}>
          <Text style={loginStyles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
            <Text style={loginStyles.signupLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
