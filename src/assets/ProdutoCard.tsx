import { useContext } from "react";
import { CarrinhoContext } from "@/app/page";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PriceBadge } from "./PriceBadge";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button";


export const ProdutoCard = ({ Product, index }: any) => {
    const {cartContext, setCartContext} = useContext(CarrinhoContext)

    //* Verifica se o Item ja esta no Carrinho, se estiver, aumenta a quantidade, senão, adiciona 1
    const handleAddCarrinho = (product: any) => {
        // Verifica se o produto já está no carrinho pelo ID
        const itemCarrinho = cartContext.find((item: any) => item.id === product.id);

        if (itemCarrinho) {
            // Se o item já existe no carrinho, incrementa a quantidade
            const updatedCart = cartContext.map((item: any) =>
                item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
            );
            setCartContext(updatedCart);
        } else {
            // Se o item não está no carrinho, adiciona o novo item com quantidade 1
            setCartContext((prevState: any) => [...prevState, { ...product, quantidade: 1 }]);
        }
    };

    return (

        <Card key={index} className="grid cursor-pointer group p-0 shadow-xl">
            <CardHeader className="grid  overflow-hidden">
                <img src={Product.photo} alt="" className="h-full transition duration-300 group-hover:scale-105 overflow-hidden select-none" />

            </CardHeader>
            <CardContent className="py-2 px-5 space-y-5">
                <span className="flex justify-between space-x-3">
                    <CardTitle className="font-normal text-"> {Product.name} </CardTitle>

                    <PriceBadge price={Product.price} />
                </span>

                <CardDescription className="text-xs"> {Product.description} </CardDescription>
            </CardContent>

            <CardFooter className="w-full p-0">
                <Button className="w-full rounded-b-xl p-3 h-full rounded-t-none bg-[#0F52BA]"
                    onClick={() => handleAddCarrinho(Product)}
                >
                    <TiShoppingCart className="w-[1rem] h-[1rem]" />
                    <p className="ml-1">
                        Comprar
                    </p>
                </Button>
            </CardFooter>
        </Card>
    )
}