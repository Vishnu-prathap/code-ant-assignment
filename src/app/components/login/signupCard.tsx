import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import SAASCardContent from "./saasCardContent";
import SelfHostedTabContent from "./selfHostedTabContent";

export default function SignUpCard() {
    return (
        <div className="flex flex-col bg-white items-center justify-center p-4 gap-4 w-[408px] max-h-[582.34px] md:w-[672px] md:max-h-[960px] rounded-xl border ">

            <div className="flex flex-row items-center justify-center gap-2">
                <Image src={`/imagelogin.png`} alt={"logo"} width={33.62} height={40} className="" />
                <p className="text-xl text-center">CodeAnt AI</p>
            </div>
            <p className="text-xl font-bold">Welcome to CodeAnt AI</p>

            <Tabs aria-label="Tabs with custom colors" variant="solid" size="md" color="primary" className="flex md:items-center md:justify-center">
                <Tab key="SAAS" title="SAAS" className=" md:w-[311px]  font-bold">
                    <SAASCardContent/>
                </Tab>
                <Tab key="Self-hosted" title="Self Hosted" className="md:w-[311px] font-bold">
                    <SelfHostedTabContent/>
                </Tab>
            </Tabs>
            <hr className="border-t border-gray-300"></hr>
                
                
            
        </div>
    );
}
