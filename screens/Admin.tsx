import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { generateRandomString } from '../Utils';

export const Admin = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');
    const [imageUri, setImageUri] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = () => {
        // You can handle form submission here, e.g., send the data to an API or save it locally
        console.log('Form submitted with the following data:');
        console.log('Title:', title);
        console.log('Subtitle:', subtitle);
        console.log('Price:', price);
        console.log('Image URI:', imageUri);

        if(!title || !subtitle || !price || !imageUri){
            Alert.alert("Please fill out the fields.")
        }else{
            dispatch({
                type: "addToProducts",
                payload: {
                    id: generateRandomString(7),
                    title: title,
                    subtitle: subtitle,
                    price: Number(price),
                    imageUri: imageUri
                }
            })
            Alert.alert("Product added Successfully!")
            navigation.goBack()
            // reset after submission
            setTitle('');
            setSubtitle('');
            setPrice('');
            setImageUri('');
        }
    };

    return (
        <>
            <Text style={{ textAlign: "center", fontSize: 30, marginTop: 80 }}>Add new product</Text>
            <View style={styles.container}>
                <Text>Title:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
                <Text>Subtitle:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSubtitle(text)}
                    value={subtitle}
                />
                <Text>Price:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                    keyboardType="numeric"
                />
                <Text>Image URI:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setImageUri(text)}
                    value={imageUri}
                />
                <View style={styles.btnStyle}>
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Text style={styles.btnTxt}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    formData: {
        marginTop: 20,
        fontSize: 16,
    },
    btnStyle:{
         width: 300,
        height: 40, 
        backgroundColor: "lightblue", 
        marginBottom: 50, 
        borderRadius: 50, 
        justifyContent: "center", 
        marginHorizontal: 50
     },
     btnTxt:{ fontSize: 15, 
        fontWeight: 500, 
        textAlign: "center" }
});