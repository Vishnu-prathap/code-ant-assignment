import { Chip, Image } from "@nextui-org/react";
import { GrStorage } from "react-icons/gr";

export default function RepoCard() {
    const repositoryInfo = [
        {
            name:"design-system",
            languageUsed:'React',
            dataUtilised:'7320',
            lastUpdated:1,
            viewingPermission:'Public'
        },
        {
            name:"codeant-ci-app",
            languageUsed:'Javascript',
            dataUtilised:'5871',
            lastUpdated:2,
            viewingPermission:'Private'
        },{
            name:"analytics-dashboard",
            languageUsed:'Python',
            dataUtilised:'4521',
            lastUpdated:5,
            viewingPermission:'Private'
        },
        {
            name:"mobile-app",
            languageUsed:'Swift',
            dataUtilised:'3096',
            lastUpdated:3,
            viewingPermission:'Public'
        },{
            name:"e-commerce-platform",
            languageUsed:'Java',
            dataUtilised:'6210',
            lastUpdated:6,
            viewingPermission:'Private'
        },{
            name:"blog-website",
            languageUsed:'HTML/CSS',
            dataUtilised:'1876',
            lastUpdated:4,
            viewingPermission:'Public'
        },{
            name:"social-network",
            languageUsed:'PHP',
            dataUtilised:'5432',
            lastUpdated:7,
            viewingPermission:'Private'
        },
    ]


  return (<>
    {repositoryInfo.map((item)=>{return(
        <div key={item.name} className='w-full border-t-1 max-h-[108px] hover:bg-gray-50 flex flex-col'>
        <div className='flex flex-row p-4 gap-x-2'>
          <p className='font-bold'>{item.name}</p>
          <Chip size='sm' variant='faded' color='primary' className="border-blue-500">
            {item.viewingPermission}
          </Chip>
        </div>
        <div className='flex flex-row pl-4 gap-x-6 text-sm items-center justify-start'>
          <div className='flex flex-row items-center justify-center gap-1'>
            <p className=''>{item.languageUsed}</p>
            <Image
              src='/bluedot.png'
              alt='dot'
              width={8}
              height={8}
            />
          </div>
          <div className='flex flex-row md:flex-row items-center justify-center gap-1'>
            {/* <Image src="/programminglanguagedot.png" alt="dot" width={8} height={8}/> */}
            <GrStorage />
            <p>{item.dataUtilised} KB</p>
          </div>
          {item.lastUpdated === 1 ?(<p>Updated {item.lastUpdated} day ago</p>):(<p>Updated {item.lastUpdated} days ago</p>)}
          
        </div>
      </div>
    )})}</>
  );
}
