
import './App.css'
import { Nav } from '../src/components/Nav.jsx'
import {ShoeDetail} from '../src/components/ShoeDetail.jsx'
import { Card } from './components/Card.jsx';
import { SHOE_LIST } from './constant.js';

function App() {
  return <div className='p-10 xl:px-24 animate-fadeIn'>
    {/* <Nav/>
    <ShoeDetail/> */}
    <Card item={SHOE_LIST[0]}/>
  </div>;
}

export default App
