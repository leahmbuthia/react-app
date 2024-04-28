
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-400">
      <Text className= "text-3xl font-pblack">start working bonieee  !</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}


