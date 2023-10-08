# React Native ShopOn E-commerce App

Welcome to the ShopOn App! This is a simple mobile application built using React Native and Redux that allows users to browse a list of products, add them to a cart, and also includes an admin section for adding new products.

## Table of Contents

- [Product Images](#product-images)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [User](#user)
  - [Admin](#admin)
- [What more could I have done](#what-more-could-i-have-done)

## Product Images
<img src="https://github.com/alishashaw439/shopOn/assets/43449528/6786042b-06f8-4225-b4bb-4efbf68a35d6" width="300">
<img src="https://github.com/alishashaw439/shopOn/assets/43449528/766a69cf-e99d-4f8c-88f4-c4f61e9692d5" width="300">
<img src="https://github.com/alishashaw439/shopOn/assets/43449528/ec1d02f3-0e88-4d3c-bcc2-13debb3bc516" width="300">
<img src="https://github.com/alishashaw439/shopOn/assets/43449528/3157f34c-9d8d-4291-b0cc-e295c78625ec" width="300">

## Features

- User Section:
  - Browse a list of products
  - Add products to the cart
  - Remove products from the cart
  - Checkout and place orders

- Admin Section:
  - Add new products to the store

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- React Native development environment set up
- Knowledge of React Native and Redux basics

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alishashaw439/shopOn.git
   ```

2. Change into the project directory:

   ```bash
   cd shopOn
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

To run the app on an emulator or physical device, follow these steps:

1. Start your emulator or connect your physical device to your computer.

2. Run the development server:

   ```bash
   npm start
   ```

3. In a new terminal window, build and run the app on the emulator or device:

   - For Android:

     ```bash
     npm run android
     ```

   - For iOS:

     ```bash
     npm run ios
     ```

Now you should see the React Native E-commerce App running on your emulator or device.

## Project Structure

The project structure is organized as follows:

```
├── src
│   ├── components          # React components
│   ├── redux            # Redux reducers
│   ├── screens             # App screens
│   ├── routes         # Navigation configuration
├── App.js                  # App entry point
├── ...
└── README.md
```

## Usage

### User

- Open the app on your device or emulator.
- Browse the list of products.
- Add products to your cart.
- Remove products from your cart.
- View your cart.
- Proceed to checkout to place orders.

### Admin

- Access the admin section.
- Add new products to the store.

## What more could I have done
- Admin can delete/edit the products
- Authentication for admin using Async storage
- react-native-picker library to pick images from the gallery
- Increment/Decrement the products from product listing and cart
- Payment integration using stripe
- Uploading/hosting images on cloudinary

