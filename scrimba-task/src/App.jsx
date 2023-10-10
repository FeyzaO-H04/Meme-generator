import { Header } from './components/Header/header'
import { MainContent } from './components/Main/mainContent';
import { Footer } from './components/Footer/footer';

import './App.css'

export function App() {
 

  return (
    <div className='meme-generator'>
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  )
}


