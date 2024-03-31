/* eslint-disable react/prop-types */
import {createContext,useContext, useState} from 'react'

const ContextProvider = createContext()

export const useGlobalContext = () => {
    return useContext(ContextProvider)
}

export const UseProvider = ({children}) => {
    // for cart data
    const [cartData,setCartData]=useState([])
    // for sharee data
    const [sareeData,setSareeData] = useState([])
    // filterdata
    const [filterdata,setfilterdata] = useState([])

    return (
        <ContextProvider.Provider value={{cartData,setCartData,sareeData,setSareeData,filterdata,setfilterdata}}>
            {children}
        </ContextProvider.Provider>
    )
}


