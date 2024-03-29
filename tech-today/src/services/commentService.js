import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`
// const baseUrl = 'http://localhost:3030/data/comments'

export const getAll = async(productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    })
    const result = await request.get(`${baseUrl}?${query}`)

      return result;
}

export const add = async ( productId, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        text,
    })

    return newComment
}