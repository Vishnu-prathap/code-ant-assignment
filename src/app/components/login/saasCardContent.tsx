import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SAASCardContent(){
    const router =useRouter()
    const buttonData = [{
        logo:'/github.png',
        name:'Github'
    },
    {
        logo:'/bitbucket.png',
        name:'Bitbucket'
    },
    {
        logo:'/azuredev.png',
        name:'Azure Devops'
    },
    {
        logo:'/gitlab.png',
        name:'Gitlab'
    },
]
    return(<div className="flex flex-col items-center justify-center gap-4">
        {/* <Button>Sign in with Github</Button> */}
        {buttonData.map((item)=>{return(
            <Button onPress={()=>router.push('/')} key={item.name} startContent={<Image src={`${item.logo}`} alt={`${item.name}`} width={24} height={24}/>} className="border" size="md" fullWidth variant="light">Sign in with {item.name}</Button>
        )})}
    </div>)
}