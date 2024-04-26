'use client'
import { createContext, useContext, useState } from "react"

interface CarrinhoContextProps {
    carrinhoContext: any
    setCarrinhoContext: React.Dispatch<React.SetStateAction<any>>
}

const CarrinhoContext = createContext<CarrinhoContextProps>(null as any)

//@ts-ignore
export const CarrinhoProvider = ({ children }) => {
    const [carrinhoContext, setCarrinhoContext] = useState({
        carrinho: [],
        setCarrinho: () => {}
    })

    return (
        <CarrinhoContext.Provider value={{carrinhoContext, setCarrinhoContext}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => useContext<CarrinhoContextProps>(CarrinhoContext)