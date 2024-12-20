import { Button } from "@nextui-org/react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { LuBookText, LuSettings } from "react-icons/lu";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";

import { IoCallOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
  const [activeKey, setActiveKey] = useState("repositories");

  const buttonContent = [
    { title: "Repositories", logo: <AiOutlineHome className="w-[24px] h-[24px]" />, key: "repositories" },
    { title: "AI Code Review", logo: <IoCodeSlashOutline className="w-[24px] h-[24px]" />, key: "aicodereview" },
    { title: "Cloud Security", logo: <IoMdCloudOutline className="w-[24px] h-[24px]" />, key: "cloudsecurity" },
    { title: "How to Use", logo: <LuBookText className="w-[24px] h-[24px]" />, key: "howtouse" },
    { title: "Settings", logo: <LuSettings className="w-[24px] h-[24px]" />, key: "settings" },
  ];

  return (
    <div className="flex bg-white flex-col justify-between p-4 w-[242px] h-screen border-r">
      
      {/* Top Section */}
      <div>
        <div className="flex flex-row items-baseline gap-3 mb-6">
          <Image src={`/imagelogin.png`} alt="antlog" width={28.5} height={32} />
          <p className="text-2xl font-medium">CodeAnt AI</p>
        </div>

        <Button variant="bordered" endContent={<IoIosArrowDown />}>
          <p>UtkarshDhairyaPanwar</p>
        </Button>

        {/* Main Buttons Section */}
        <div className="w-full flex flex-col items-baseline gap-2 mt-4">
          {buttonContent.map((item) => (
            <Button
              key={item.key}
              color={activeKey === item.key ? "primary" : "default"}
              variant={activeKey === item.key ? "solid" : "light"}
              fullWidth
              className={`flex items-center justify-start p-4 ${
                activeKey === item.key ? "bg-blue-600 text-white" : ""
              }`}
              startContent={item.logo}
              onPress={() => setActiveKey(item.key)}
            >
              <p className="text-medium font-bold">{item.title}</p>
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center gap-2 mt-4">
        <Button fullWidth variant="light" className="flex items-center justify-start text-medium font-bold" startContent={<IoCallOutline className="w-[24px] h-[24px]" />
}>Support</Button>
        <Button fullWidth variant="light" onPress={()=>router.push('/login')}  className="flex items-center justify-start text-medium font-bold" startContent={<LuLogOut className="w-[24px] h-[24px]"/>
}>Logout</Button>
      </div>
    </div> 
  );
}
