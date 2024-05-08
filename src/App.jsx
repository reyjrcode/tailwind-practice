
import './App.css'
import { Nav } from '../src/components/Nav.jsx'
import { ShoeDetail } from '../src/components/ShoeDetail.jsx'
// import { Card } from './components/Card.jsx';
import { SHOE_LIST } from './constant.js';
import { NewArrivalsSection } from './components/NewArrivalSection.jsx';
import { SideBar } from './components/SideBar.jsx';
import { useState } from 'react';
import { CartItem } from './components/CartItem.jsx';

function App() {

  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return <div className='p-10 xl:px-24 animate-fadeIn'>
    <Nav onClickShoppingBtn={() => setSideBarOpen(true)} />
    <ShoeDetail />
    {/* <Card item={SHOE_LIST[0]}/> */}
    <NewArrivalsSection items={SHOE_LIST} />
    <SideBar isOpen={isSideBarOpen} onClickClose={() => setSideBarOpen(false)}>
      <h2 className='mb-10 text-2xl font-bold'>Cart</h2>
      <CartItem item={SHOE_LIST[0]} />
      <CartItem item={SHOE_LIST[1]} />
      <CartItem item={SHOE_LIST[2]} />
    </SideBar>

  </div>;
}

export default App
