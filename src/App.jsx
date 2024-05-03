
import './App.css'
import { Nav } from '../src/components/Nav.jsx'
import {ShoeDetail} from '../src/components/ShoeDetail.jsx'

function App() {
  return <div className='p-10 xl:px-24'>
    <Nav/>
    <ShoeDetail/>
  </div>;
}

export default App
