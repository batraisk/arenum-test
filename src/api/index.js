import apiService from './apiService'
import tournamentsModule from './tournaments'

export default {
  tournaments: tournamentsModule(apiService)
}