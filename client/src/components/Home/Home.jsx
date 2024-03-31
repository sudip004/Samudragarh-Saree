import {useState} from 'react'

import './Home.css'
import Sidebar from '../SideBar/Sidebar';
import Productcontainer from '../ProductContainer/Productcontainer';

const Home = () => {
    const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "DarkMode-main" : "LightMode-main"}>
        <Sidebar/>
        <Productcontainer/>
    </div>
  )
}

export default Home