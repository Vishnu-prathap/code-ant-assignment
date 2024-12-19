import Image from "next/image"

export default function InformationCard(){
    const loginPageDetails =[{
        description:'Language Support',
        count:'30+'
    },
    {
        description:'Developers',
        count:'10k+'
    },
    {
        description:'Hours Saved',
        count:'100k+'
    },
]
    return<div className="w-[447px] h-[170px] border shadow-xl rounded-xl flex flex-col">
<div className="flex flex-row items-center justify-start w-full gap-2 py-[21px] pl-[22px]">
    {/* <Image href="/public/image.png"/> */}
    <Image src={`/imagelogin.png`} alt={"logo"} width={28} height={31} className=""/>
     

    <p className="font-bold">AI to Detect & Autofix Bad Code</p>
</div>
<hr className="border-t border-gray-300"></hr>
<div className="flex flex-row items-center justify-around w-full h-full">
    
    {loginPageDetails.map((items)=>{
        return(
            <div key={items.description} className="flex flex-col items-center justify-center">
                <p className="font-bold">{items.count}</p>
                <p>{items.description}</p>
                </div>
        )
    })}
</div>
    </div>
}