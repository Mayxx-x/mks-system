import { useContext } from "react"
import { CarrinhoContext } from "./CarrinhoContext"

//* UI / Types
import { ProdutoCard } from "./ProdutoCard"

export const ProdutosView = () => {
    const { cartContext, setCartContext } = useContext(CarrinhoContext)

    const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC'

    // const { data, isLoading, error } = useQuery('produtos', async () => {
    //     const response = await axios.get(API_URL);
    //     return response.data;
    // });

    const data = {
        "products": [
            {
                "id": 3,
                "name": "Macbook Air",
                "brand": "Apple",
                "description": "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
                "price": "8200.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 4,
                "name": "iPhone 12 64 GB",
                "brand": "Apple",
                "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
                "price": "6500.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 1,
                "name": "Iphone 11 128 GB",
                "brand": "Apple",
                "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
                "price": "5000.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 6,
                "name": "iPad",
                "brand": "Apple",
                "description": "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
                "price": "4200.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 8,
                "name": "Headset Cloud Stinger",
                "brand": "HyperX",
                "description": "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                "price": "600.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 7,
                "name": "Headset Cloud Revolver",
                "brand": "HyperX",
                "description": "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
                "price": "1000.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 5,
                "name": "Apple Watch Series 7",
                "brand": "Apple",
                "description": "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
                "price": "3200.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            },
            {
                "id": 2,
                "name": "AirPods",
                "brand": "Apple",
                "description": "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
                "price": "1200.00",
                "createdAt": "2023-10-30T16:25:01.093Z",
                "updatedAt": "2023-10-30T16:25:01.093Z"
            }
        ],
        "count": 8
    }

    // useEffect(() => {
    //     console.log('data: ', data);

    // }, [data])


    return (
        <div className="grid gap-7 w-full h-auto p-1
            xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
            {/* //* Prototipo do Card de Produto */}
            {data && data.products.map((Product: any, index: number) => (
                <ProdutoCard Product={Product} key={index} />
            ))}


        </div>
    )

}