
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View,Image } from 'react-native';
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
 import {images} from '../constants';
import CustomButton from '../components/CustomButton';
export default function App() {
  return (
<SafeAreaView className="bg-primary h-full">
  <ScrollView contentContainerStyle ={{height: '100%'}}> 
  <View className=" w-full justify-center items-center h-[85vh] min-h-min px-4">
      {/* <Text className= "text-3xl font-pblack">Aora !</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Link href="/home" style={{color: 'blue'}}>Go to Home Leah</Link> */}
   <Image
   source={images.logo}
   className="w-[130px] h-[84px]"
   resizeMode="contain"
    />
   <Image
   source={images.cards}
   className="max-w-[380px] w-full h-[300px]"
   resizeMode="contain" 
   />
   <View className="relative mt-5">
    <Text className="text-3xl text-white font-bold text-center">Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
            source={images.path}
            className="w-[136] h-[15px] absolute-bottom-2 rigth-8"
            resizeMode="contain"
            />

   </View>
   <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where Creativity meets Innovation: 
   embark on journey of limitless Exploration with Aora </Text>
   <CustomButton
   title="Continue with Email"
   handlePress={() => router.push('/sign-in')}
   containerStyles="w-full mt-7"/>
    </View>
    </ScrollView>
<StatusBar backgroundColor='#161622'
style='light' />
 
</SafeAreaView>
 
  );
}



