import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    {/* <div>Description</div>

      <motion.img 
      width={'15%'}
      src='/img/icon.png'
      alt=''

        //анимация
        animate={{rotate:360}}
        transition={{
          delay:1,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType:'reverse',
          type:'inertia'
        }}
        />

        <motion.p
        initial={{
          x:-1000,
          opacity:0
        }}

        animate={{
            x: 500,
            opacity: 1
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'
        }}
        >
            Текст который появится 
        </motion.p> */}</div>
        
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration: 1
        }}
        >
          <p>Велосипедные туры — это незабываемые впечатления, восхитительные пейзажи и всегда отличная компания.</p>
        </motion.div>
          <div id='divImg'>
          <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            rotate: 180,
            opacity:1
          }}
          transition={{
            type: 'spring'
          }}>
            <motion.img
            src='img/wheel.jpg'
            className='ball'
            width={500}

            initial={{
              opacity:3.6
            }}

            transition={{
              duration:5
            }}

            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}/>

          </motion.div>  
       </div>
    </div>
  )
}

export default Description