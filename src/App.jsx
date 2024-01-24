import { Header } from './components/Header/header'
import { Meme } from './components/Main/mainContent'
import './App.css'


export function App() {
 
  return (
    <div className='meme-generator'>
      <Header />
      <Meme/>
    </div>
  )
}



