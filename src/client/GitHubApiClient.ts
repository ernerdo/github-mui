import axios from 'axios'

const baseApiClient = axios.create({
  baseURL: 'https://api.github.com',
})

export const getUserByName = async (name: string) => {
  try {
    const response = await baseApiClient.get(`/users/${name}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
