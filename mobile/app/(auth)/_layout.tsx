import {View,Text} from "react-native";
import {Redirect} from "expo-router";

const AuthLayout = () =>{
    const isauth = true;
    if (isauth)  return <Redirecthref href={"/(tabs)"} />;
    return(
        <View className = 'flex-1 mt-20'> 
               <Text>AuthLayout</Text>
        </View>
    )
}

export default AuthLayout;