import * as request  from "../lib/request"

const baseUrl = `${import.meta.env.VITE_API_URL}/users`
// const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    })

    return result
}

export const register = async (email, password, username) => request.post(`${baseUrl}/register`, {
    email,
    password,
    username
})

export const logout = async () => request.get(`${baseUrl}/logout`)

