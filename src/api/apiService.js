import axios from "axios"

const apiService = axios.create({
  baseURL: 'https://app.msrvbattle.ru/tournaments/games/v2/',
  headers: {
    accept: 'application/json'
  }
})

export default apiService
