import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <h1 style={{
        color: 'white',
        textAlign: 'center',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        🐱 Dancing Cat 🐱
      </h1>
      <DancingCat />
    </div>
  )
}

export default App
