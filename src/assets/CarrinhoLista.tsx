import { useContext } from "react";
import { CarrinhoContext } from "./CarrinhoContext"
import { BotaoRemover } from "./BotaoRemover";
import { toast } from "sonner";


export const CarrinhoLista = ({ Product }: any) => {
    const { cartContext, setCartContext } = useContext(CarrinhoContext)

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartContext((prevCart: any) => {
            const updatedCart = prevCart.map((item: any) => {
                if (item.id === id) {
                    //* Verifica se a quantidade é menor que 0, se for, remove o item
                    if (newQuantity === 0) {
                        //* Remove o item
                        toast.info(`${Product.name} removido do Carrinho`)
                        return null;

                    } else {
                        //* Atualiza a quantidade do item
                        return { ...item, quantidade: newQuantity };
                    }
                } else {
                    //* Retorna o item original caso não seja o item a ser atualizado

                    return item;
                }
            });


            // Filter out removed items (if any)
            return updatedCart.filter(Boolean);
        });
    };

    return (
        <>
            {/* exibição de Produto em lista */}
            <div key={Product.id} className="relative flex space-x-5  items-center py-5 text-black p-3 shadow border-black w-full h-[8rem] rounded-xl bg-[aliceblue]">

                {/* Exibir o botão de remover o produto do carrinho */}
                <BotaoRemover id={Product.id} handleQuantityChange={handleQuantityChange} />

                {/* Exibir a foto do produto */}
                <img src={Product.photo} alt="" className="h-full" />

                {/* Exibir o nome e a marca do produto */}
                <div className='flex-grow'>
                    <p> {Product?.name} </p>
                    <p className="text-sm"> {Product.brand} </p>
                </div>

                {/* Botoes de Ajuste de Quantidade do Carrinho */}
                <div className='select-none'>
                    <p> Qtd. </p>
                    <div className='flex divide-x-2 divide-slate-300 border border-slate-300 rounded-xl py-2 *:w-[2rem] *:text-center'>
                        {/* Botao de remover 1 item */}
                        <span onClick={() => handleQuantityChange(Product.id, Product.quantidade - 1)} className='rounded-l-xl active:bg-slate-300 cursor-pointer'>
                            -
                        </span>
                        {/* Exibir a quantidade de itens no carrinho */}
                        <span className=''>
                            {Product.quantidade}
                        </span>
                        {/* Botao de adicionar 1 item a mais */}
                        <span onClick={() => handleQuantityChange(Product.id, Product.quantidade + 1)} className='rounded-r-xl active:bg-slate-300 cursor-pointer'>
                            +
                        </span>
                    </div>
                </div>

                {/* Valor total da quantidade de itens adicionados */}
                <div className="flex h-full items-center">
                    <p className='text-sm my-5'> R$ {Product.price * Product.quantidade} </p>
                </div>
            </div>
        </>
    )
}