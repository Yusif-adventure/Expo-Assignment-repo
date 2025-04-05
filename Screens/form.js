import { View ,Text,Image, TextInput, FlatList, Pressable, ImageBackground,Button,ScrollView} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import man from '../assets/man.png';
const Form = () => {

    const personalDetails=[{
        id:1,
        name:"yusif",
        age:25,
        image:man,
    },
    {
        id:2,
        name:"ibrahim",
        age:5,
        image:man,


    },
    {
        id:3,
        name:"ama",
        age:2,
        image:man,


    },




]
    return (  
        <ScrollView >
            <Text style={myStyle.heading}>Hello dear , you welcome to my store</Text>
            <View>

            <TextInput placeholder="search..." style={myStyle.search} />
            <AntDesign name="search1" size={24} color="black" style={myStyle.searchIcon}/></View>
            <FlatList 
            data={personalDetails}
            renderItem={({item})=>(
              <Pressable>
                  <Text>{item.name}</Text>
                  <Text>{item.age}</Text>
                  <Image source={item.image} />
              </Pressable>

            )}
            keyExtractor={(item)=>{item.id}}
            horizontal
            showsHorizontalScrollIndicator={false}
            
            
            
            />
            <Image source={man} style={myStyle.man}/>
            <Button title="increase" />

        </ScrollView>
    );
}
const myStyle=({
    heading:{
        margin:60,
        fontSize:20,
        backgroundColor:"lightblue",
        color:"green"

    },
    man:{
        marginLeft:60,
        width:240,
        height:300
    },
    search:{
        height:50,
        width:240,
        marginLeft:60,
        fontSize:20,
        color:"blue",
        backgroundColor:"lightblue",
        paddingLeft:40
    },
    searchIcon:{
        marginLeft:70,
        marginTop:15,
position:"absolute"
    }
}
)
 
export default Form;