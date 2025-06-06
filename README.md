<p style="text-align: center" align="center">
  <a href="https://tsed.io" target="_blank"><img src="https://tsed.dev/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">
  <h1>@tsed/di + React.js</h1>
  <br />
  <div align="center">
    <a href="https://tsed.dev/">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://tsed.dev/getting-started.html">Getting started</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://api.tsed.dev/rest/slack/tsedio/tsed">Slack</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://twitter.com/TsED_io">Twitter</a>
  </div>
  <hr />
</div>

> Use @tsed/di with React.js to build your website with Vite 4 and Ts.ED.

## Features

- Ts.ED
- Vite
- React 19

## Example

```tsx
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
          Use @tsed/di to inject create and inject services like <code>HttpClient</code> and fetch data from your
          backend.
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
```

## Contributors

Please read [contributing guidelines here](./CONTRIBUTING.md).

<a href="https://github.com/tsedio/tsed/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your
website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - Today Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
