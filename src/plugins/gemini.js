import { GoogleGenerativeAI } from '@google/generative-ai'

const GeminiPlugin = {
  install(Vue, options) {
    if (!options || !options.apiKey) {
      throw new Error('Você precisa fornecer uma chave de API para o plugin Gemini.')
    }

    const gemini = new GoogleGenerativeAI(options.apiKey)
    const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' })

    Vue.provide('gemini', {
      async getPontosTuristicos(cidade) {
        function removeFirstAndLastLine(str) {
          return str.substring(str.indexOf('\n') + 1, str.lastIndexOf('\n') - 3)
        }

        const prompt =
          'você pode fazer no formato json, os principais pontos turísticos de uma cidade (até 5, não invente novos que podem não ser do lugar certo) no formato:   [{  nome, pequena_descricao,  local},{  nome, pequena_descricao,  local(não precisa incluir nome da cidade ou estado aqui)}]   apenas escreva isso e mais nada na resposta senão vou ter problemas com a api, faça para a cidade: ' +
          cidade
        const result = await model.generateContent(prompt)
        const jsonPart = removeFirstAndLastLine(result.response.text())
        const jsonResult = JSON.parse(jsonPart)
        return jsonResult
      },
    })
  },
}

export default GeminiPlugin
