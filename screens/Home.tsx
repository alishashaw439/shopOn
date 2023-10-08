import { Alert, FlatList, View } from "react-native"
import { Card } from "../components/Card"
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

export const Home = ({navigation}) => {
   const {products} = useSelector((state)=>state.product)
   const dispatch = useDispatch()
   //cart icon pressed
    const cartPressed = ()=>{
        navigation.navigate("cart")
    }
    //add item to the cart function
    const addToCartBtn = (item)=>{
      dispatch({
        type:"addToCart",
        payload:{
           id:item.id,
            title: item.title,
            subtitle:item.subtitle,
            price:item.price,
            quantity:1,
            imageUri:item.imageUri
        }
    })
    Alert.alert("Product added to cart!")
}
    return (
        <>
        <Header cartPressed={cartPressed}></Header>
        <View style={{marginTop:30,paddingBottom:30,flex:1}}>
           <FlatList data={products} renderItem={({item}) => <Card 
            btnTitle={"Add to cart"}
            item= {item}
            productBtnTapped={addToCartBtn}
            ></Card>} keyExtractor={item => item.id}></FlatList>
        </View>
        </>
    )
}