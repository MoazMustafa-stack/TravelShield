import { Link } from 'expo-router';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginStyles } from '../styles/loginStyles';

export default function Login() {
  return (
    <SafeAreaView style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Text style={loginStyles.headerTitle}>Welcome Back</Text>
        <Text style={loginStyles.headerSubtitle}>Sign in to continue</Text>
      </View>

      <View style={loginStyles.form}>
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
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={loginStyles.forgotPassword}>
          <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginStyles.loginButton}>
          <Text style={loginStyles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={loginStyles.signupContainer}>
          <Text style={loginStyles.signupText}>Don't have an account? </Text>
          <Link href="./signup" asChild>
            <TouchableOpacity>
              <Text style={loginStyles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}