import './App.css'
import AppContainer from "./components/specific/appContainer/AppContainer"
import { GlobalProvider } from './contexts/GlobalContext'

function App() {

  return (
    <>
      <GlobalProvider >
        <AppContainer />
      </GlobalProvider>
    </>
  )
}

export default App
