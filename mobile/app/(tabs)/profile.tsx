import {View,Text,ScrollView} from "react-native";


const ProfileTab = () =>{
     return(
        <ScrollView 
            className="bg-surface"
            contentInsetAdjustmentBehavior="automatic" 
        >
               <Text className= "text-white">Profile tab</Text>
        </ScrollView>
    )
}

export default ProfileTab;