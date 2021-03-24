import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className='shape'
    ></motion.div>
  );
}

export default App;
