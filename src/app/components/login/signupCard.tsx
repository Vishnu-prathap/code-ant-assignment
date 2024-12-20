import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import SAASCardContent from "./saasCardContent";
import SelfHostedTabContent from "./selfHostedTabContent";

export default function SignUpCard() {
    return (
        <div className="flex flex-col bg-white items-center justify-center p-4 gap-4 w-[408px] max-h-[582.34px] md:w-[672px] md:max-h-[960px] rounded-xl border">
            <div className="flex flex-row items-center justify-center gap-2">
                <Image src={`/imagelogin.png`} alt={"logo"} width={33.62} height={40} className="" />
                <p className="text-xl text-center">CodeAnt AI</p>
            </div>
            <p className="text-xl font-bold">Welcome to CodeAnt AI</p>

            {/* Mobile view */}
            <div className="block w-full md:hidden">
                <Tabs 
                    aria-label="Tabs with custom colors" 
                    variant="solid" 
                    size="md"  
                    color="primary" 
                    className="w-full"
                    classNames={{
                        tabList: "w-full",
                        tab: "flex-1",
                        panel: "w-full",
                        base: "w-full",
                        tabContent: "w-full"
                    }}
                >
                    <Tab key="SAAS" title="SAAS" className="w-full font-bold">
                        <div className="w-full">
                            <SAASCardContent/>
                        </div>
                    </Tab>
                    <Tab key="Self-hosted" title="Self Hosted" className="w-full font-bold">
                        <div className="w-full">
                            <SelfHostedTabContent/>
                        </div>
                    </Tab>
                </Tabs>
            </div>

            {/* Desktop view */}
            <div className="hidden md:block md:w-full flex  items-center justify-center">
    <Tabs 
        aria-label="Tabs with custom colors" 
        variant="solid" 
        size="lg"  
        classNames={{
            tabList: "w-full flex items-center justify-center",
            tab: "flex-1 text-center",
            panel: "w-full flex items-center justify-center",
            base: "w-full",
            tabContent: "w-full text-center"
        }}
        color="primary" 
        className="flex items-center justify-center w-full"
    >
        <Tab key="SAAS" title="SAAS" className="w-full font-bold flex items-center justify-center text-center">
            <SAASCardContent />
        </Tab>
        <Tab key="Self-hosted" title="Self Hosted" className="w-full font-bold flex items-center justify-center text-center">
            <SelfHostedTabContent />
        </Tab>
    </Tabs>
</div>

        </div>
    );
}