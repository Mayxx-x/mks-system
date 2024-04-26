import { Badge } from "@/components/ui/badge"


export const PriceBadge = ({ price }: { price: string }) => {
    // Convertendo a string para número
    const precoNumerico = parseFloat(price);

    // Verificando se o valor é um número válido
    if (isNaN(precoNumerico)) {
        return <Badge>Valor inválido</Badge>; // Caso o valor não seja um número válido
    }

    // Arredondando para baixo para obter o valor inteiro
    const precoInteiro = Math.floor(precoNumerico);

    // Formatando o valor inteiro para Real (BRL)
    const precoFormatado = precoInteiro.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return <Badge className="py-2">R${precoInteiro}</Badge>;
};
