
import './App.css'
import { Nav } from '../src/components/Nav.jsx'
import { ShoeDetail } from '../src/components/ShoeDetail.jsx'
// import { Card } from './components/Card.jsx';
import { SHOE_LIST } from './constant.js';
import { NewArrivalsSection } from './components/NewArrivalSection.jsx';
import { SideBar } from './components/SideBar.jsx';
import { useEffect, useState } from 'react';
import { Cart } from './components/Cart.jsx';
import { BiMoon, BiSun } from 'react-icons/bi';
// import { CartItem } from './components/CartItem.jsx';


const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 14
  }
})

function App() {

  const [isSideBarOpen, setSideBarOpen] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode == "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, [])
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
      localStorage.setItem(
        "isDarkMode",
        window.document.documentElement.classList.contains("dark"),
      )
    );
  };

  return <div className='p-10 xl:px-24 animate-fadeIn dark:bg-night'>
    <Nav onClickShoppingBtn={() => setSideBarOpen(true)} />
    <ShoeDetail />
    {/* <Card item={SHOE_LIST[0]}/> */}
    <NewArrivalsSection items={SHOE_LIST} />
    <SideBar isOpen={isSideBarOpen} onClickClose={() => setSideBarOpen(false)}>
      <h2 className='mb-10 text-2xl font-bold'>Cart</h2>
      {/* <CartItem item={SHOE_LIST[0]} />
      <CartItem item={SHOE_LIST[1]} />
      <CartItem item={SHOE_LIST[2]} /> */}
      <Cart cartItems={FAKE_CART_ITEMS} />
    </SideBar>
    <div className="fixed bottom-4 right-4 ">
      <button
        onClick={toggleDarkMode}
        className='bg-night-50  text-white  rounded-full px-4 py-2 dark:bg-white dark:text-night shadow-lg'>
        <BiSun className='hidden dark:block' />
        <BiMoon className='dark:hidden' />
      </button>
    </div>
  </div>;
}

export default App
