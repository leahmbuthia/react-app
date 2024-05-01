import { useState } from "react";
import { Link, router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, Alert } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
      setIsSubmitting(true)
    }
    try {
      const result= await createUser(form.email, form.password,form.username)
      router.replace('/home')
      
    } catch (error) {
      Alert.alert('Error', error.message) 
    }finally{
      setIsSubmitting(false)
    }
  }
return (
  <SafeAreaView className="bg-primary h-full">
    <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px]" />
        <Text className="text-2xk text-white text-semibold mt-10 font-psemibold">SignUp to Aora

        </Text>
        <FormField
          title='Username'
          value={
            form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles='mt-10'
          // keyboardType='username'
        />
        <FormField
          title='Email'
          value={
            form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles='mt-7'
          keyboardType='email-address'
        />
        <FormField
          title='Password'
          value={
            form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles='mt-7'

        />
        <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}

        />
        <View className="justify-center pt-5 flex-row gap-2"></View>
      <Text className="text-lg text-gray-100 font-pregular">
        Have an Account Already ?
      </Text>
      <Link href='/sign-in' className="text-lg font-psemibold text-secondary">Sign In</Link>
      </View>
    </ScrollView>

  </SafeAreaView>
)
}

export default SignUp