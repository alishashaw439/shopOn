import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {generateRandomString} from '../Utils';
// import for picking up the images from Gallery
import * as ImagePicker from 'react-native-image-picker';

export const Admin = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // You can handle form submission here, e.g., send the data to an API or save it locally
    console.log('Form submitted with the following data:');
    console.log('Title:', title);
    console.log('Subtitle:', subtitle);
    console.log('Price:', price);
    console.log('Image URI:', selectedImageUri);

    if (!title || !subtitle || !price || !selectedImageUri) {
      Alert.alert('Please fill out the fields.');
    } else {
      dispatch({
        type: 'addToProducts',
        payload: {
          id: generateRandomString(7),
          title: title,
          subtitle: subtitle,
          price: Number(price),
          imageUri: selectedImageUri,
        },
      });
      Alert.alert('Product added Successfully!');
      navigation.goBack();
      // reset after submission
      setTitle('');
      setSubtitle('');
      setPrice('');
      setSelectedImageUri('');
    }
  };

  // function for selecting images from the Gallery
  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        quality : 100
      },
      response => {
        if (!response.didCancel) {
          let imageLink = response.assets[0].uri;
          setSelectedImageUri(imageLink);
        }
      },
    );
  };

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginTop: 80,
          color: '#010101',
        }}>
        Add new product
      </Text>
      <View style={styles.container}>
        <Text style={styles.textColor}>Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <Text style={styles.textColor}>Subtitle:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setSubtitle(text)}
          value={subtitle}
        />
        <Text style={styles.textColor}>Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPrice(text)}
          value={price}
          keyboardType="numeric"
        />
        <Text style={styles.textColor}>Product Image:</Text>
        {/* Button to pick Image from Gallery */}
        <Button title="Upload Image" color={'#020101'} onPress={pickImage} />
        {/* for displaying the fileName of the Image */}
        {selectedImageUri && (
          <Text style={styles.imageText}>
            Image URI: {selectedImageUri.substring(0, 40)}...
          </Text>
        )}
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
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color : '#000000'
  },
  formData: {
    marginTop: 20,
    fontSize: 16,
  },
  btnStyle: {
    width: 300,
    height: 40,
    backgroundColor: 'lightblue',
    marginBottom: 50,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  textColor: {
    color: '#010101',
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#010011',
  },
  imageText: {
    fontSize: 14,
    marginTop: 10,
    color: '#020101',
    fontWeight: '500',
  },
});
