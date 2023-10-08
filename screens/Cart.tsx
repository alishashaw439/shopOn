
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../components/Card"

export const Cart = ({ navigation }) => {
    const { cartItems } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const calculatePrice = () => {
        let totalPrice = 0
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price
        }
        return totalPrice
    }
    const backBtnClicked = () => {
        navigation.goBack()
    }
    const removeItem = (item) => {
        dispatch({
            type: "removeFromCart",
            payload: {
                item
            }
        })
    }
    const checkOutBtnClicked = () => {
        if (cartItems.length > 0) {
            Alert.alert("Thanks for shopping!")
            dispatch({
                type: "clearCart"
            })
        } else {
            Alert.alert("Cart is empty :/")
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.backBtn} onPress={() => backBtnClicked()}>
                    <Image style={{ width: 40, height: 40 }} source={require("../assests/backBtn.png")}></Image>
                </TouchableOpacity>
                <Text style={styles.titleTxt}>Your Cart</Text>
                <FlatList data={cartItems} renderItem={({ item }) => <Card productBtnTapped={removeItem} btnTitle={"Remove Item"} item={item}></Card>} keyExtractor={item => item.id}></FlatList>
            </View>
            <View style={styles.priceCalculationContainer}>
                <Text>Your Total</Text>
                <Text>₹{calculatePrice()}</Text>
            </View>
            <View style={styles.checkoutBtn}>
                <TouchableOpacity onPress={() => checkOutBtnClicked()}>
                    <Text style={styles.checkoutTxt}>Proceed to checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginTop: 30, flex: 1 },
    backBtn: { left: 20, marginTop: 30 },
    titleTxt: { textAlign: "center", fontSize: 30 },
    priceCalculationContainer: { flexDirection: "row", justifyContent: "space-between", margin: 20, marginBottom: 60 },
    checkoutBtn: { width: 300, height: 40, backgroundColor: "lightblue", marginBottom: 50, borderRadius: 50, justifyContent: "center", marginHorizontal: 50 },
    checkoutTxt: { fontSize: 15, fontWeight: 500, textAlign: "center" }
})