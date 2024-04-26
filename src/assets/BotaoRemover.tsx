import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from "sonner";


export const BotaoRemover = ({ id, handleQuantityChange }: any) => {
    return (
        <>
            {/* Modal de Cofirmalçao de Exclusao */}
            <AlertDialog>
                <AlertDialogTrigger>
                    <div className="absolute -top-2 -right-4 rounded-full px-2 cursor-pointer">
                        <IoIosCloseCircle className="w-[2rem] h-[2rem] hover:scale-105 bg-[aliceblue] rounded-full" />
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="z-[101]">
                    <AlertDialogHeader>
                        <AlertDialogTitle> Deseja Remover o Item? </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel> Cancelar </AlertDialogCancel>
                        {/* Botao para confirmar exclusao do item no carrinho */}
                        <AlertDialogAction onClick={() => { handleQuantityChange(id, 0), toast.error('Produto Removido do Carrinho') }} > Remover </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}