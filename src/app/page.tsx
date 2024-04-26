'use client'
import { CarrinhoContext } from "@/assets/CarrinhoContext";
import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from "@/components/ui/sonner"

//* Componentes
import { ProdutosView } from "@/assets/ProdutosView";
import { OpenCarrinho } from "@/components/home/OpenCarrinho";


//* UI / Types


const queryClient = new QueryClient()

//* Função Principal
export default function Home() {

  //* Contexto do Carrinho
  const [cartContext, setCartContext] = useState([])

  useEffect(() => {
    console.log('Situação do carrinho: ', cartContext);

  }, [cartContext])

  return (
    <>
      {/* //* Provider do React Query */}
      <QueryClientProvider client={queryClient}>

        {/* //* Provider do Contexto do Carrinho */}
        <CarrinhoContext.Provider value={{ cartContext, setCartContext }}>

          <main className="min-h-screen items-center justify-between bg-[aliceblue]">

            {/* //* Menu de Navegação no Topo da Tela */}
            <nav className="title flex justify-between w-full h-full items-center p-8 text-white bg-[#0F52BA]">
              {/* Label da Pagina: MKS Sistemas */}
              <figure className="flex items-end space-x-2 h-full cursor-pointer select-none">
                <span className="text-4xl font-semibold"> MKS </span>
                <p className="text-xl font-light"> Sistemas </p>
              </figure>

              {/* //* O Botao para abrir o carrinho vai aqui abaixo */}
              <OpenCarrinho />
            </nav>

            <section className="flex justify-center items-center w-full min-h-screen border">
              <div className="border border-slate-200 aspect-video p-5
                w-3/4
              ">
                <ProdutosView />
              </div>
            </section>

            <p className="text-center text-sm h-10">
              MKS Sistemas & Alvaro Nascimento &copy; Todos os Direitos Reservados
            </p>
          </main>
        </CarrinhoContext.Provider>
      </QueryClientProvider>

      <Toaster richColors />
    </>
  );
}
