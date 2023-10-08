import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper"

export const Header = ({ cartPressed }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleTxt}>ShopOn</Text>
            <TouchableOpacity style={styles.cartStyle} onPress={() => cartPressed()}>
                <Image style={{ width: 50, height: 50 }} source={require("../assests/shopping-cart.png")}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 30, fontWeight: 800, marginTop: 100, marginLeft: 10
    },
    cartStyle: { position: "absolute", right: 20, top: 40, zIndex: 10 }
})
