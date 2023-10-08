import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer({
    products: [
        {
            id: '8d7acbea',
            title: 'Nike Cortez SE',
            subtitle: "Inspired by the '72 original",
            price: 3362,
            quantity: 0,
            imageUri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        },
        {
            id: 'bd7acbea',
            title: 'Nike Air Force 1',
            subtitle: "Air Force 1 07 LV8",
            price: 10795,
            quantity: 0,
            imageUri: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc="
        },
        {
            id: 'bdterebea',
            title: 'Nike Tech Hera',
            subtitle: "Style: FQ8107-133",
            price: 96954,
            quantity: 0,
            imageUri: "https://media.istockphoto.com/id/1301394040/photo/fashion-white-sneakers-in-neon-light-sport-shoes-for-training-in-the-gym-creative-minimalism.jpg?s=612x612&w=0&k=20&c=PfRc6jcouhs7Pbv06XldVVOJcI1UtB-6gZB0whPhFfE="
        },
    ],
    cartItems: []
}, builder => {
    builder.addCase("addToCart", (state, action) => {
        const item = action.payload
        const isExist = state.cartItems.find(i => i.id === item.id)
        if (isExist) {
            state.cartItems = state.cartItems.filter(i => i.id === isExist.id ? item : i)
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === isExist.id) {
                    state.cartItems[i] = item
                }
            }
        } else {
            state.cartItems.push(item)
        }
    }).addCase("clearCart", (state) => {
        state.cartItems = []
    }).addCase("addToProducts", (state, action) => {
        state.products.push(action.payload)
    }).addCase("removeFromCart", (state, action) => {
        const id = action.payload.item.id
        state.cartItems = state.cartItems.filter((i) => i.id !== id)
    })
}
)