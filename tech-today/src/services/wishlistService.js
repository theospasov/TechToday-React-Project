import * as request  from "../lib/request";

const baseUrl = `${import.meta.env.VITE_API_URL}/data/wishlist`
// const baseUrl = 'http://localhost:3030/data/wishlist'

import { getOne } from './productService'


// Wishlist functionality in Product Page

export async function addToWishlist(userId, productId) {
    try {
         const newWishlistProduct = await request.post(baseUrl, {
            userId,
            productId
         })
         return newWishlistProduct
    } catch (error) {
        console.log(error);
    }
}

export async function removeFromWishlist(userId, productId) {
    try {
        const data = await request.get(`${baseUrl}?where=userId%3D%22${userId}%22%20AND%20productId%3D%22${productId}%22`)
        await request.remove(`${baseUrl}/${data[0]._id}`)
        
   } catch (error) {
       console.log(error);
   }
}

export async function isWishlisted(userId, productId) {
    try {
         const check = await request.get(`${baseUrl}?where=userId%3D%22${userId}%22%20AND%20productId%3D%22${productId}%22`)
         return check
    } catch (error) {
        console.log(error);
    }
}

// Wishlist functionality in Profile Page

export async function getWishlist(userId) {
    const wishlistedProductsDetails = []

    try {
        const result = await request.get(`${baseUrl}?where=userId%3D%22${userId}%22`)

        if (result.length > 0) {
            
            await Promise.all(result.map(async (element) => {
                const res = await getOne(element.productId);
                wishlistedProductsDetails.push(res);
            }));
        }

        return wishlistedProductsDetails
    } catch (error) {
        console.log(error);
    }
}