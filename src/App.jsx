import './App.css'
import Home from './components/Home/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  library.add(fas)
  library.add(far)
  return (
    <div className="App">
     <Home />
    </div>
  )
}

export default App
