import axios from 'axios'

const unsplashPlugin = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Unsplash.')
    }
    const client_id = options.apiKey
    Vue.provide('unsplash', {
      async getFotos(query) {
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: query, client_id, orientation: 'landscape' },
          })

          console.log(response.data)
          return response.data
        } catch (error) {
          console.error('Error fetching photos:', error)
        }
      },
      async getFotoAleatoria(query) {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: { query: query, client_id, orientation: 'landscape' },
          })

          console.log(response.data)
          return response.data
        } catch (error) {
          console.error('Error fetching photos:', error)
        }
      },
    })
  },
}

export default unsplashPlugin
