'use client'
import { useTypewriter } from 'react-simple-typewriter'
function TypeWriter({words}) {
    const [text] = useTypewriter({
      words: words,
      loop: Infinity
    })

  return text
}

export default TypeWriter