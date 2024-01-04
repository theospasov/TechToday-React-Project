import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/data/wishlist'

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
        const result = await request.get(`${baseUrl}?where=userId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22&load=author%3D_ownerId%3Ausers`)

        if (wishlistedProducts.length > 0) {
            
            await Promise.all(wishlistedProducts.map(async (element) => {
                const res = await getOne(element);
                wishlistedProductsDetails.push(res);
            }));
        }

        return wishlistedProductsDetails
    } catch (error) {
        console.log(error);
    }
}