import { Skeleton } from "@/components/ui/skeleton"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const SkeletonCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="grid gap-y-5">
                    <Skeleton className="w-full aspect-video rounded-xl" />

                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-full h-[20px] rounded-full" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </CardContent>
            <CardFooter>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </CardFooter>
        </Card>
    )
}