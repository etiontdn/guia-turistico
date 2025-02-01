import { GoogleGenerativeAI } from '@google/generative-ai'

const GeminiPlugin = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Gemini.')
    }

    const gemini = new GoogleGenerativeAI(options.apiKey)
    const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' })

    Vue.config.globalProperties.$gemini = {
      async getPontosTuristicos(cidade) {
        const prompt =
          'você pode fazer no formato json, os 5 principais pontos turísticos de uma cidade no formato:   [{  nome,  pequena_descricao,  local},{  nome,  pequena_descricao,  local(não precisa incluir nome da cidade ou estado aqui)}]   apenas escreva isso e mais nada na resposta senão vou ter problemas com a api, faça para a cidade: ' +
          cidade
        const result = await model.generateContent(prompt)
        const jsonResult = JSON.parse(result.response.text())
        return jsonResult
      },
    }
  },
}

export default GeminiPlugin
