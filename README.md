# Guia Turístico

Este projeto é um guia turístico que fornece informações sobre pontos turísticos, clima, taxa de câmbio e imagens de várias cidades ao redor do mundo.
Veja no [Netlify!](https://guia-turistico-app.netlify.app/ )

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/guia-turistico.git
   cd guia-turistico
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione suas chaves de API:
   ```properties
   VITE_GEMINI_API_KEY="sua-chave-gemini"
   VITE_UNSPLASH_API_KEY="sua-chave-unsplash"
   VITE_EXCHANGE_RATE_API_KEY="sua-chave-exchange-rate"
   VITE_CLIMA_API_KEY="sua-chave-clima"
   ```

## Uso

1. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

2. Abra o navegador e acesse `http://localhost:5137`.

## Estrutura do Projeto

- `src/main.js`: Arquivo principal onde os plugins e o Vuetify são configurados.
- `src/plugins/`: Diretório contendo os plugins para integração com APIs externas.
- `src/views/DestinoView.vue`: Componente de visualização dos detalhes de um destino específico.
- `src/views/InicioView.vue`: Componente de visualização da página principal.
- `src/components/`: Diretório contendo componentes reutilizáveis, como `ClimaTempoSheet.vue` e `CambioSheet.vue`.

## Funcionalidades

- **Pontos Turísticos**: Exibe informações sobre pontos turísticos de uma cidade.
- **Clima**: Mostra o clima atual da cidade.
- **Taxa de Câmbio**: Exibe a taxa de câmbio entre a moeda local e a moeda do destino.
- **Imagens**: Mostra imagens da cidade obtidas da API Unsplash.
