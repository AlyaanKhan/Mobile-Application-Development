import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function SignUp({ navigation }) {
  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          //borderWidth: 1,
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
        placeholderTextColor="grey"></TextInput>
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
        placeholderTextColor="grey"></TextInput>
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
        placeholderTextColor="grey"></TextInput>
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
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        style={{
          marginTop: 60,
          marginLeft: 160,
          //borderWidth: 1,
          width: 90,
          textAlign: 'center',
          padding: 6,
          borderRadius: 8,
          backgroundColor: '#f53b3b',
          border: 'None',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            fontFamily: 'monospace',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function LogIn({ navigation }) {
  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          //borderWidth: 1,
          borderRadius: 18,
          padding: 8,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e33434',
          color: 'white',
        }}>
        Welcome to Log In Screen
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
        placeholder="Enter First name"
        placeholderTextColor="grey"></TextInput>
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
        placeholder="Enter Last name"
        placeholderTextColor="grey"
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        style={{
          marginTop: 60,
          marginLeft: 160,
          //borderWidth: 1,
          width: 90,
          textAlign: 'center',
          padding: 6,
          borderRadius: 8,
          backgroundColor: '#f53b3b',
          border: 'None',
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Text
          style={{
            fontFamily: 'monospace',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function ProfilesInfo() {
  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          //borderWidth: 1,
          borderRadius: 18,
          padding: 8,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e06b16',
          color: 'white',
        }}>
        The information you saved is as followes{' '}
      </Text>
      <View>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          Alayaan Amir
        </Text>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          Male
        </Text>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          0309-5239181
        </Text>
      </View>
    </View>
  );
}
function Options() {
  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          //borderWidth: 1,
          borderRadius: 18,
          padding: 8,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e06b16',
          color: 'white',
        }}>
        The desired options are{' '}
      </Text>
      <View>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          + Change Name
        </Text>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          + Change Password
        </Text>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#d9470d',
            color: 'white',
            marginLeft: 10,
            marginRight: 10,
          }}>
          + Add or Update new Phone number
        </Text>
      </View>
    </View>
  );
}
function AboutUs() {
  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          //borderWidth: 1,
          borderRadius: 18,
          padding: 15,
          textAlign: 'center',
          border: 'None',
          backgroundColor: '#e06b16',
          color: 'white',
        }}>
        Welcome to Login Signup Profile, the ultimate application for seamless
        authentication and user management. Our platform offers secure and
        hassle-free login and signup processes, enabling you to create and
        manage profiles effortlessly. Join us today and experience a
        user-friendly interface with robust security features. Sign up and get
        started now!{' '}
      </Text>
    </View>
  );
}
function Welcome() {
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          borderRadius: 8,
          padding: 5,
          backgroundColor: '#d9470d',
          color: 'white',
          marginLeft: 10,
          marginRight: 10,
        }}>
        This is Home Tab
      </Text>
    </View>
  );
}
function Notifications() {
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          borderRadius: 8,
          padding: 5,
          backgroundColor: '#d9470d',
          color: 'white',
          marginLeft: 10,
          marginRight: 10,
        }}>
        This is Notifications Tab
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="ProfilesInfo"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#e8593c',
          width: 240,
        },
        drawerLabelStyle: {
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}>
      <Drawer.Screen
        name="Profile Information"
        component={ProfilesInfo}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="Options"
        component={Options}
        options={{ drawerLabel: 'Options' }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{ drawerLabel: 'About Us' }}
      />
      <Drawer.Screen
        name="Tabs"
        component={MyTabs}
        options={{ drawerLabel: 'Tabs' }}
      />
    </Drawer.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={ProfilesInfo}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 110,
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Already on Signup Page!!')}
                style={{
                  marginRight: 20,
                  borderRadius: 8,
                  padding: 6,
                  width: 70,
                  backgroundColor: '#e06b16',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Sign Up
                </Text>
              </TouchableOpacity>
            ),
          }}>
          >
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 100,
            },
          }}>
          >
        </Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={MyDrawer}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 70,
            },
          }}>
          >
        </Stack.Screen>
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 70,
            },
          }}>
          >
        </Stack.Screen>
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 70,
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{
            headerStyle: {
              backgroundColor: '#962d3b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
              marginLeft: 70,
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
