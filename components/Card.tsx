import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Card = (props) => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 200, height: 200 }} source={{
                uri: props.item.imageUri
            }}></Image>
            <View style={{ flexDirection: "column", margin: 7 }}>
                <Text style={styles.titleTxt}>{props.item.title}</Text>
                <Text style={styles.subTitleTxt}>{props.item.subtitle}</Text>
                <Text style={styles.priceTxt}>₹{props.item.price}</Text>
                <View style={styles.btnStyle}>
                    <TouchableOpacity onPress={()=>props.productBtnTapped(props.item)}>
                        <Text style={{ textAlign: "center" }}>{props.btnTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{width: 200, height: 200, margin: 6, backgroundColor: "lightpink", flexWrap: "wrap", flexDirection: "column"
    },
    titleTxt:{
        fontSize: 20, fontWeight: 600
    },
    subTitleTxt:{
        fontSize: 16, fontWeight: 300
    },
    priceTxt:{
        fontSize: 16, fontWeight: 300
    },
    btnStyle:{ marginTop: 80, backgroundColor: "lightblue", width: 150, height: 30, borderRadius: 50, alignItems: "center", justifyContent: "center" }
})
