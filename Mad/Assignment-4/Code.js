import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// AsyncStorage keys
const PROFILE_KEY = 'profile';

// Utility function to save data to AsyncStorage
const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log('Data saved successfully.');
  } catch (error) {
    console.log('Error saving data: ', error);
  }
};

// Utility function to retrieve data from AsyncStorage
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error retrieving data: ', error);
    return null;
  }
};

function SignUp({ navigation }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    // Save the user's profile information
    const profileData = { firstName, lastName, email, password };
    saveData(PROFILE_KEY, profileData);
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          borderRadius: 18,
          padding: 8,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e33434',
          color: 'white',
        }}>
        Welcome to Sign Up Screen
      </Text>
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        First Name:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter First name"
        placeholderTextColor="grey"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        Last Name:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter Last name"
        placeholderTextColor="grey"
        value={lastName}
        onChangeText={setLastName}
      />
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        Email:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        Password:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter Password"
        placeholderTextColor="grey"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: 180,
          backgroundColor: '#2a44bd',
          padding: 5,
          width: 100,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#fff',
          alignItems: 'center',
        }}
        onPress={handleSignUp}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
      </TouchableOpacity>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function LogIn({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    // Retrieve the user's profile information
    const profileData = await getData(PROFILE_KEY);
    if (profileData && profileData.email === email && profileData.password === password) {
      navigation.navigate('Tabs');
    } else {
      console.log('Invalid email or password.');
    }
  };

  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          borderRadius: 18,
          padding: 8,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e33434',
          color: 'white',
        }}>
        Welcome to Login Screen
      </Text>
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        Email:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{ marginTop: 30, marginLeft: 60, fontWeight: 'bold' }}>
        Password:{' '}
      </Text>
      <TextInput
        style={{
          width: 170,
          borderWidth: 1,
          marginLeft: 160,
          marginTop: -20,
          borderRadius: 5,
          padding: 2,
          textAlign: 'center',
        }}
        placeholder="Enter Password"
        placeholderTextColor="grey"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: 180,
          backgroundColor: '#2a44bd',
          padding: 5,
          width: 100,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#fff',
          alignItems: 'center',
        }}
        onPress={handleLogin}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Tabs" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
