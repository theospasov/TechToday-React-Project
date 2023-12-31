import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/products'

export async function getAll() {
    const result = await request.get( baseUrl )
    
    return result
}

export async function getOne(productId) {
try {
    const result = await request.get(`${baseUrl}/${productId}`)
    
    return result
} catch (error) {
    console.log(error);
}
}

export async function getAllUserCreated(userId) {
    try {
        const result = await request.get(`${baseUrl}?where=_ownerId%3D"${userId}"`)
        
        return result
    } catch (error) {
        console.log(error);
    }
}

export async function addToWishlist(userId, productId) {
    try {
        
    } catch (error) {
        
    }
}


export async function getWishlist(wishlistedProducts) {
    const wishlistedProductsDetails = []

    try {
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


export async function add(productData) {
    const result = await request.post(baseUrl, productData)
    
    return result;
}

export async function edit(productId, productData) {
    const result = await request.put(`${baseUrl}/${productId}`, productData)
    
    return result;
}

export async function remove(productId) {
    request.remove(`${baseUrl}/${productId}`)
}



// Version without request
// export async function add(productData) {

    // const response = await fetch(`${baseUrl}`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(productData)
    // })

    // const result = await response.json()
    // return result;
// }