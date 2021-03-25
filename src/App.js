import './App.css';
import { motion } from 'framer-motion';

function App() {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: 'easeOut',
      repeatDelay: 0.8,
    },
  };

  return (
    <motion.div
      transition={bounceTransition}
      animate={{
        y: ['100%', '-100%'],
        backgroundColor: ['#ff6699', '#6666ff'],
      }}
      className='shape'
    ></motion.div>
  );
}

export default App;
