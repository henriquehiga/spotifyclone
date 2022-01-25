import { NavLateral } from './components/NavLateral'
import { Home } from './pages/Home'
import './app.css'
import { NavPlayer } from './components/NavPlayer'
import { NavMobile } from './components/NavMobile'

export const App = () => {
  return(
    <main>
      <NavLateral/>
      <Home />
      <NavPlayer/>
      <NavMobile/>
    </main>
  )
}