import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {IntlProvider} from "react-intl"
import detectBrowserLanguage from "detect-browser-language"

import localeEnMessages from "./locales/en"
import localeEsMessages from "./locales/es"
import apiCallService from "./api/api-calls"
import Movies from "./components/Movies"

const urlEn = "/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
const urlEs = "/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"  

const getApiUrl = (language) => 
  /en-{1,}/.test(language) ? urlEn :
  /es-{1,}/.test(language) ? urlEs :
  urlEn

function Index () {
  const [language, setLanguage] = useState(detectBrowserLanguage())
  const [movies, setMovies] = useState([])
  useEffect(() => {
    apiCallService("http://localhost:3000/").get(getApiUrl(language)).then(
      movies => {
        setMovies(movies)
      }
    )
  })
  const locale = 
    /en-{1,}/.test(language) ? localeEnMessages :
    /es-{1,}/.test(language) ? localeEsMessages :
    localeEsMessages
  
  return (
    <IntlProvider locale={language} messages={locale}>
      <Movies language={language} movies={movies}/>
    </IntlProvider>
  )

}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
