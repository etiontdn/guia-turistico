import axios from 'axios'

const exchangeRate = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Exchange Rate.')
    }
    const api_key = options.apiKey
    Vue.provide('exchange_rate', {
      async par(de, para) {
        try {
          const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/${api_key}/pair/${de}/${para}`,
          )
          return response.data.conversion_rate
        } catch (error) {
          console.error('Erro ao obter taxa de câmbio:', error)
          throw error
        }
      },

      moedas: {
        paris: 'EUR',
        roma: 'EUR',
        londres: 'GBP',
        'nova-york': 'USD',
        tóquio: 'JPY',
        dubai: 'AED',
        barcelona: 'EUR',
        bangkok: 'THB',
        'rio-de-janeiro': 'BRL',
        sidney: 'AUD',
        istambul: 'TRY',
        'hong-kong': 'HKD',
        'los-angeles': 'USD',
        berlim: 'EUR',
        amsterdã: 'EUR',
        veneza: 'EUR',
        'buenos-aires': 'ARS',
        'las-vegas': 'USD',
        santorini: 'EUR',
        edimburgo: 'GBP',
        'cidade-do-méxico': 'MXN',
        seul: 'KRW',
        moscou: 'RUB',
        xangai: 'CNY',
        florença: 'EUR',
        praga: 'CZK',
        toronto: 'CAD',
        cingapura: 'SGD',
        viena: 'EUR',
        atenas: 'EUR',
        madri: 'EUR',
        dublin: 'EUR',
        'são-francisco': 'USD',
        marrakech: 'MAD',
        munique: 'EUR',
        cairo: 'EGP',
        havana: 'CUP',
        capetown: 'ZAR',
        bali: 'IDR',
        hongdae: 'KRW',
        cartagena: 'COP',
        quioto: 'JPY',
        osaka: 'JPY',
        manila: 'PHP',
        'kuala-lumpur': 'MYR',
        doha: 'QAR',
        salvador: 'BRL',
        cusco: 'PEN',
        bogotá: 'COP',
        varsóvia: 'PLN',
        amã: 'JOD',
      },

      paises: {
        paris: 'França',
        roma: 'Itália',
        londres: 'Reino Unido',
        'nova-york': 'Estados Unidos',
        tóquio: 'Japão',
        dubai: 'Emirados Árabes Unidos',
        barcelona: 'Espanha',
        bangkok: 'Tailândia',
        'rio-de-janeiro': 'Brasil',
        sidney: 'Austrália',
        istambul: 'Turquia',
        'hong-kong': 'China',
        'los-angeles': 'Estados Unidos',
        berlim: 'Alemanha',
        amsterdã: 'Países Baixos',
        veneza: 'Itália',
        'buenos-aires': 'Argentina',
        'las-vegas': 'Estados Unidos',
        santorini: 'Grécia',
        edimburgo: 'Escócia',
        'cidade-do-méxico': 'México',
        seul: 'Coreia do Sul',
        moscou: 'Rússia',
        xangai: 'China',
        florença: 'Itália',
        praga: 'República Tcheca',
        toronto: 'Canadá',
        cingapura: 'Cingapura',
        viena: 'Áustria',
        atenas: 'Grécia',
        madri: 'Espanha',
        dublin: 'Irlanda',
        'são-francisco': 'Estados Unidos',
        marrakech: 'Marrocos',
        munique: 'Alemanha',
        cairo: 'Egito',
        havana: 'Cuba',
        capetown: 'África do Sul',
        bali: 'Indonésia',
        hongdae: 'Coreia do Sul',
        cartagena: 'Colômbia',
        quioto: 'Japão',
        osaka: 'Japão',
        manila: 'Filipinas',
        'kuala-lumpur': 'Malásia',
        doha: 'Catar',
        salvador: 'Brasil',
        cusco: 'Peru',
        bogotá: 'Colômbia',
        varsóvia: 'Polônia',
        amã: 'Jordânia',
      },
    })
  },
}

export default exchangeRate
