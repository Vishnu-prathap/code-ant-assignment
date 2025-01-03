import { Button } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
// import Router from "next/router"

export default function SelfHostedTabContent(){
    const router = useRouter()
    const buttonData = [
    
    {
        logo:'/gitlab.png',
        name:'Gitlab'
    },
    {
        logo:'/ssokey.png',
        name:'SSO'
    },
]
    return(<div className="flex flex-col items-center justify-start gap-4 h-[250px]">
        {/* <Button>Sign in with Github</Button> */}
        {buttonData.map((item)=>{return(
            <Button onPress={()=>router.push('/')} key={item.name} startContent={<Image src={`${item.logo}`} alt={`${item.name}`} width={24} height={24}/>} radius="sm" className="border w-[300px]" size="md" fullWidth variant="light">Sign in with {item.name}</Button>
        )})}
    </div>)
}