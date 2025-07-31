import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  const stepsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (stepsRef.current) observer.observe(stepsRef.current)
    return () => {
      if (stepsRef.current) observer.unobserve(stepsRef.current)
    }
  }, [])

  return (
    <motion.div
      ref={stepsRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center justify-center my-32 px-4'
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works</h1>
      <p className='text-lg text-gray-600 mb-8 text-center'>
        Unlock the Power of AI Creativity in 3 Simple Steps
      </p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
