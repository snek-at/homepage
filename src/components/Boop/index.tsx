import {useState, useEffect} from 'react'
import {animated, useSpring} from 'react-spring'

type BoopProps = {
  x: number
  y: number
  rotation: number
  scale: number
  timing: number
}

const Boop: React.FC<Partial<BoopProps>> = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children
}) => {
  const [isBooped, setIsBooped] = useState(false)
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10
    }
  })

  useEffect(() => {
    if (!isBooped) {
      return
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])

  return (
    <animated.span
      onMouseEnter={() => setIsBooped(true)}
      style={style as never}>
      {children}
    </animated.span>
  )
}

export default Boop
