import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <button
        className="dance-button"
        onClick={toggleAnimation}
        aria-label={isAnimating ? 'Stop cat dancing animation' : 'Start cat dancing animation'}
      >
        {isAnimating ? '🛑 Stop Dancing' : '💃 Start Dancing'}
      </button>

      <p style={{
        color: 'white',
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '0.9rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
      }}>
        Press <kbd style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '2px 6px',
          borderRadius: '3px',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>Space</kbd> or click the button to toggle dancing!
      </p>
    </div>
  )
}

export default DancingCat