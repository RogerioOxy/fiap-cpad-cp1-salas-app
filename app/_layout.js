import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Layout principal do app com navegacao por Tabs (abas inferiores)
// Conceito visto na Aula 05 - Expo Router com Tabs
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ED145B',
        tabBarInactiveTintColor: '#8E8E9A',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F5',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#ED145B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="salas"
        options={{
          title: 'Salas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
