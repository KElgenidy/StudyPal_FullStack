// import './App.css'
import { Box } from '@mui/material';
import Intro from './components/Landing/Intro';
import Navbar from './components/Landing/Navbar';

export default function App() {
  return (
    <>
     <Box component={'header'}>
      <Navbar />
     </Box>
      
      <Box component={'main'}>
        <Intro />
      </Box>
    </>
  );
}


