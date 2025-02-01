import axios from 'axios'

const clima = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Clima.')
    }
    const api_key = options.apiKey
    Vue.provide('clima', {
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

      coordenadas: {
        paris: { latitude: 48.8566, longitude: 2.3522 },
        roma: { latitude: 41.9028, longitude: 12.4964 },
        londres: { latitude: 51.5074, longitude: -0.1278 },
        'nova-york': { latitude: 40.7128, longitude: -74.006 },
        tóquio: { latitude: 35.6895, longitude: 139.6917 },
        dubai: { latitude: 25.276, longitude: 55.2962 },
        barcelona: { latitude: 41.3851, longitude: 2.1734 },
        bangkok: { latitude: 13.7563, longitude: 100.5018 },
        'rio-de-janeiro': { latitude: -22.9068, longitude: -43.1729 },
        sidney: { latitude: -33.8688, longitude: 151.2093 },
        istambul: { latitude: 41.0082, longitude: 28.9784 },
        'hong-kong': { latitude: 22.3193, longitude: 114.1694 },
        'los-angeles': { latitude: 34.0522, longitude: -118.2437 },
        berlim: { latitude: 52.52, longitude: 13.405 },
        amsterdã: { latitude: 52.3676, longitude: 4.9041 },
        veneza: { latitude: 45.4408, longitude: 12.3155 },
        'buenos-aires': { latitude: -34.6037, longitude: -58.3816 },
        'las-vegas': { latitude: 36.1699, longitude: -115.1398 },
        santorini: { latitude: 36.3932, longitude: 25.4615 },
        edimburgo: { latitude: 55.9533, longitude: -3.1883 },
        'cidade-do-méxico': { latitude: 19.4326, longitude: -99.1332 },
        seul: { latitude: 37.5665, longitude: 126.978 },
        moscou: { latitude: 55.7558, longitude: 37.6173 },
        xangai: { latitude: 31.2304, longitude: 121.4737 },
        florença: { latitude: 43.7696, longitude: 11.2558 },
        praga: { latitude: 50.0755, longitude: 14.4378 },
        toronto: { latitude: 43.6532, longitude: -79.3832 },
        cingapura: { latitude: 1.3521, longitude: 103.8198 },
        viena: { latitude: 48.2082, longitude: 16.3738 },
        atenas: { latitude: 37.9838, longitude: 23.7275 },
        madri: { latitude: 40.4168, longitude: -3.7038 },
        dublin: { latitude: 53.3498, longitude: -6.2603 },
        'são-francisco': { latitude: 37.7749, longitude: -122.4194 },
        marrakech: { latitude: 31.6295, longitude: -7.9811 },
        munique: { latitude: 48.1351, longitude: 11.582 },
        cairo: { latitude: 30.0444, longitude: 31.2357 },
        havana: { latitude: 23.1136, longitude: -82.3666 },
        capetown: { latitude: -33.9249, longitude: 18.4241 },
        bali: { latitude: -8.3405, longitude: 115.092 },
        hongdae: { latitude: 37.5561, longitude: 126.9256 },
        cartagena: { latitude: 10.391, longitude: -75.4794 },
        quioto: { latitude: 35.0116, longitude: 135.7681 },
        osaka: { latitude: 34.6937, longitude: 135.5023 },
        manila: { latitude: 14.5995, longitude: 120.9842 },
        'kuala-lumpur': { latitude: 3.139, longitude: 101.6869 },
        doha: { latitude: 25.276, longitude: 51.2282 },
        salvador: { latitude: -12.9777, longitude: -38.5016 },
        cusco: { latitude: -13.5319, longitude: -71.9675 },
        bogotá: { latitude: 4.711, longitude: -74.0721 },
        varsóvia: { latitude: 52.2298, longitude: 21.0122 },
        amã: { latitude: 31.9496, longitude: 35.9329 },
      },
    })
  },
}

export default clima
