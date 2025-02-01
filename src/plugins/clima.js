import axios from 'axios'

const clima = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Clima.')
    }
    const api_key = options.apiKey
    Vue.provide('clima', {
      async getCoordenadas(cidade) {
        try {
          const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${api_key}`,
          )
          if (response.data.length > 0) {
            return {
              latitude: response.data[0].lat,
              longitude: response.data[0].lon,
            }
          } else {
            throw new Error('Cidade não encontrada.')
          }
        } catch (error) {
          console.error('Erro ao obter coordenadas:', error)
          throw error
        }
      },
      async getTempo(latitude, longitude) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=pt_br`,
          )
          return response.data
        } catch (error) {
          console.error('Erro ao obter o clima:', error)
          throw error
        }
      },
    })
  },
}

export default clima
