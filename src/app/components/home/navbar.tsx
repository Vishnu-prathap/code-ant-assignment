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
// import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Navbar() {
    const router = useRouter();
    const [activeKey, setActiveKey] = useState("repositories");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const buttonContent = [
        { title: "Repositories", logo: <AiOutlineHome className="w-[18px] h-[18px]" />, key: "repositories" },
        { title: "AI Code Review", logo: <IoCodeSlashOutline className="w-[18px] h-[18px]"  />, key: "aicodereview" },
        { title: "Cloud Security", logo: <IoMdCloudOutline className="w-[18px] h-[18px]"  />, key: "cloudsecurity" },
        { title: "How to Use", logo: <LuBookText className="w-[18px] h-[18px]"  />, key: "howtouse" },
        { title: "Settings", logo: <LuSettings className="w-[18px] h-[18px]"  />, key: "settings" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-2">
                        <Image src={`/imagelogin.png`} alt="antlog" width={24} height={24} />
                        <p className="text-xl font-medium">CodeAnt AI</p>
                    </div>
                    <Button 
                        isIconOnly
                        variant="light" 
                        onPress={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? 
                            <IoClose className="w-6 h-6" /> : 
                            <RxHamburgerMenu className="w-6 h-6"/>

                        }
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-[72px] left-0 w-full bg-white z-40 shadow-lg transition-transform duration-300 ${
                isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="p-4">
                    <Button variant="bordered" endContent={<IoIosArrowDown />}fullWidth className=" shadow-sm w-full mb-4 items-center justify-start">
                        <p>UtkarshDhairyaPanwar</p>
                    </Button>

                    <div className="flex flex-col gap-2">
                        {buttonContent.map((item) => (
                            <Button
                                key={item.key}
                                color={activeKey === item.key ? "primary" : "default"}
                                variant={activeKey === item.key ? "solid" : "light"}
                                fullWidth
                                radius="sm"
                                className={`flex items-center justify-start p-4 ${
                                    activeKey === item.key ? "bg-blue-600 text-white" : ""
                                }`}
                                startContent={item.logo}
                                onPress={() => {
                                    setActiveKey(item.key);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <p className="text-medium font-bold">{item.title}</p>
                            </Button>
                        ))}
                        
                        <Button 
                            fullWidth 
                            variant="light" 
                            radius="sm"
                            className="flex items-center justify-start text-medium font-bold" 
                            startContent={<IoCallOutline className="w-[18px] h-[18px]"  />}
                        >
                            Support
                        </Button>
                        <Button 
                            fullWidth 
                            variant="light" 
                            radius="sm" 
                            onPress={() => router.push('/login')}  
                            className="flex items-center justify-start text-medium font-bold" 
                            startContent={<LuLogOut className="w-[18px] h-[18px]" />}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Sidebar - Unchanged */}
            <div className="hidden md:flex bg-white md:flex-col md:justify-between md:p-4 md:w-[242px] md:h-screen md:border-r">
                <div>
                    <div className="flex flex-row items-baseline gap-3 mb-6">
                        <Image src={`/imagelogin.png`} alt="antlog" width={28.5} height={32} />
                        <p className="text-2xl font-medium">CodeAnt AI</p>
                    </div>

                    <Button variant="bordered" size="sm" fullWidth endContent={<IoIosArrowDown />}>
                        <p>UtkarshDhairyaPanwar</p>
                    </Button>

                    <div className="w-full flex flex-col items-baseline gap-2 mt-4">
                        {buttonContent.map((item) => (
                            <Button
                                key={item.key}
                                color={activeKey === item.key ? "primary" : "default"}
                                variant={activeKey === item.key ? "solid" : "light"}
                                fullWidth
                                size="sm"
                                className={`flex items-center max-w-75% justify-start p-4 ${
                                    activeKey === item.key ? "bg-blue-600 text-white" : ""
                                }`}
                                startContent={item.logo}
                                onPress={() => setActiveKey(item.key)}
                            >
                                <p className="text-medium font-medium">{item.title}</p>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-2 mt-4">
                    <Button 
                        fullWidth 
                        variant="light" 
                        className="flex items-center justify-start text-medium font-medium" 
                        startContent={<IoCallOutline className="w-[24px] h-[24px]" />}
                    >
                        Support
                    </Button>
                    <Button 
                        fullWidth 
                        variant="light" 
                        onPress={() => router.push('/login')}  
                        className="flex items-center justify-start text-medium font-medium" 
                        startContent={<LuLogOut className="w-[24px] h-[24px]"/>}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </>
    );
}