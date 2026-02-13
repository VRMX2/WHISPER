import {View,Text,ScrollView} from "react-native";

const ChatsTab = () =>{
    return(
        <ScrollView 
            className="bg-surface"
            contentInsetAdjustmentBehavior="automatic" 
        >
               <Text className= "text-white">chat tab</Text>
        </ScrollView>
    )
}

export default ChatsTab;