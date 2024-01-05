import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/data/wishlist'

import { getOne } from './productService'

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