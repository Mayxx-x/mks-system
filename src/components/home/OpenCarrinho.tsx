'use client'
import 'react-modern-drawer/dist/index.css'
import { CarrinhoContext } from "@/app/page"
import { useContext, useEffect, useState } from "react"

//* UI / Types
import { Button } from "@/components/ui/button"
import { TiShoppingCart } from "react-icons/ti"
import Drawer from 'react-modern-drawer'
import { ScrollArea } from "../ui/scroll-area"
import { CarrinhoLista } from '@/assets/CarrinhoLista'


export const OpenCarrinho = () => {

    //* estado do Carrinho (aberto ou fechado)
    const [isOpen, setIsOpen] = useState(false)

    const { cartContext, setCartContext } = useContext(CarrinhoContext)
    const [totalItens, setTotalItens] = useState(0)

    const totalPrice = cartContext.reduce((total: any, product: any) => {
        return total + (product.price * product.quantidade);
    }, 0);

    const formatPrice = (price: any) => {
        // Use toFixed(2) to format the price with 2 decimal places
        const formattedPrice = price.toFixed(2);

        // Replace the decimal point with a comma for Brazilian real
        return formattedPrice.replace('.', ',');
    };

    useEffect(() => {
        const totalItens = cartContext.reduce((total: any, item: { quantidade: any }) => total + item.quantidade, 0);
        setTotalItens(totalItens);

    }, [cartContext])

    return (
        <>
            {/* //* Drawer do Carrinho */}
            <Drawer style={{ width: '40%' }} open={isOpen} direction={"right"} onClose={() => setIsOpen(false)} className="carrinho bg-transparent rounded-l-xl ">
                <article className="w-full grid h-full px- bg-[#0F52BA] border-sky-700 text-white rounded-l-xl shadow-xl">
                    <header className="flex justify-between grid-rows-1 p-5">
                        <div>
                            <h1 className="text-4xl font-light"> Carrinho de Compras: </h1>
                            {/* //todo Exibir aqui o total de produtos no carrinho */}
                            <p className="text-white font-light"> {totalItens} Itens no Carrinho </p>
                        </div>

                        <Button className='xl:hidden' onClick={() => setIsOpen(false)}> Fechar </Button>
                    </header>

                    {/* //* Listegem de Produtos no Carrinho  */}
                    <ScrollArea className="min-h-[20rem] h-full w-full border-black">

                        <div className="grid gap-y-5 p-10  rounded-xl">
                            {Array.isArray(cartContext) && cartContext.length === 0 ?
                                (
                                    <div className='flex items-center justify-center w-full'>
                                        <img src="/empty_cart.png" alt="" className='w-1/2' />
                                    </div>
                                )
                                :
                                cartContext?.map((Product: any) => (
                                    <CarrinhoLista Product={Product} />
                                ))
                            }

                        </div>

                        {/* <pre className="overflow-y-scroll">
                        {JSON.stringify(cartContext, null, 2)}

                    </pre> */}
                    </ScrollArea>

                    <footer className="flex flex-col h-[10rem] w-full row-span- shadow-[0_0_1rem_#0004]">
                        <div className='flex items-center w-full h-full text-3xl font-light px-8 py-5'>
                            <h1 className=''> Total: R$ {formatPrice(totalPrice)} </h1>

                        </div>

                        <Button className='w-full h-[5rem]'> Finalizar Compra </Button>
                    </footer>
                </article>
            </Drawer>

            {/* //* Botão para Abrir o Carrinho */}
            <div className="flex items-center shadow-xl" onClick={() => setIsOpen(true)}>
                <Button className="px-3 py-2 fill-black bg-white text-black hover:bg-slate-200">
                    <TiShoppingCart className="p-0 h-[1.5em] w-[1.5em]" />
                    {/* Exibir Quantidate de Produtos no Carrinho */}
                    <p className="mx-2 font-bold">
                        {/* soma a quantidade de produtos em cartContext[item].quantidade */}
                        {totalItens}
                    </p>
                </Button>
            </div>
        </>
    )
}