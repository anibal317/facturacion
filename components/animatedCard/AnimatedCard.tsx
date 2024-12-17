'use client'

import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  highlightedWords: string[]
}

export default function AnimatedCard({ 
  title = "Nuestra", 
  description = "nos permite abordar una amplia proyectos para industrias, empresas, organizaciones e instituciones de sectores.", 
  highlightedWords = ["extensa experiencia", "diversidad de", "diferentes"]
}: CardProps) {
  // Function to wrap highlighted words in bold
  const highlightText = (text: string) => {
    let result = text
    highlightedWords.forEach(word => {
      result = result.replace(word, `<strong class="font-semibold">${word}</strong>`)
    })
    return result
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-100 dark:from-purple-950 to-pink-100 dark:to-pink-950 shadow-lg mx-auto p-8 rounded-2xl w-full max-w-3xl"
    >
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-800 text-lg md:text-xl dark:text-gray-200 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: `${title} ${highlightText(description)}`
        }}
      />
    </motion.div>
  )
}

