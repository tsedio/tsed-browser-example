import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HttpClient} from "./services/HttpClient.js";
import {inject} from "@tsed/di";

function App() {
  const [count, setCount] = useState(0)
  const [tsedApi, setTsedApi] = useState<{ version: string; modules: Record<string, any> } | null>(null)

  useEffect(() => {
    const httpClient = inject(HttpClient)

    httpClient.get("https://tsed.dev/api.json")
      .then((value) => {
        setTsedApi(value)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
        <a href="https://tsed.dev" target="_blank">
          <img src="https://tsed.dev/tsed.svg" className="logo tsed" alt="Ts.ED logo"/>
        </a>
      </div>
      <h1>Vite + React + Ts.ED </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h2>Ts.ED {tsedApi?.version}</h2>

        <p>
          Use @tsed/di to inject create and inject services like <code>HttpClient</code> and fetch data from your backend.
        </p>

        <h3>Modules</h3>

        <ul>
        {
          Object.entries(tsedApi?.modules || {}).map(([name]) => (
            <li key={name}>
              <span>{name}</span>
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default App
