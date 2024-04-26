import axios from 'axios'
import { useContext } from "react"
import { CarrinhoContext } from "./CarrinhoContext"

//* UI / Types
import { ProdutoCard } from "./ProdutoCard"
import { useQuery } from "react-query"
import { SkeletonCard } from './SkeletonCard'

export const ProdutosView = () => {
    const { cartContext, setCartContext } = useContext(CarrinhoContext)

    const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC'

    const { data, isLoading, error } = useQuery('produtos', async () => {
        const response = await axios.get(API_URL);
        return response.data;
    });

    // useEffect(() => {
    //     console.log('data: ', data);

    // }, [data])


    return (
        <div className="grid gap-7 w-full h-auto p-1
            xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
            {/* //* Prototipo do Card de Produto */}
            {isLoading && Array.from({ length: 8 }).map(() => (
                <SkeletonCard key={Math.random()} />
            ))}

            {data && data.products.map((Product: any, index: number) => (
                <ProdutoCard Product={Product} key={index} />
            ))}


        </div>
    )

}