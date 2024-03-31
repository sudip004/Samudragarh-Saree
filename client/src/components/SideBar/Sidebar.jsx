import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const menuItmes =[
        {
            link:"/",
            name:"Sharees"
        },
        {
            link:"/cart",
            name:"Cart"
        },
        {
            link:"/upload",
            name:"upload"
        },
    ]
  return (
    <div className="container">
        {/* heading part in sidebar */}
        <div className="heading-body">
            <div className="heading">SAMUDRAGARH-SHAREES</div>
        </div>
        <div className="divider"></div>
        {/* All Router List */}
        {
            menuItmes.map((items,index)=> (
                <Link to={items.link} key={index} style={{textDecoration:"none"}}>
                    <div className="elements">
                        {/* Icons */}
                        <p>{items.name}</p>
                    </div>
                </Link>
            ))
        }
        
        {/* Add calculator */}
        <Link to={"/calculator"} style={{textDecoration:"none",color:"GrayText"}}>
        <div className="elements">
            <p >Calculator</p>
        </div>
        </Link>
        <Link to={"/Payment"} style={{textDecoration:"none",color:"GrayText"}}>
        <div className="elements">
            <p >Payment</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar