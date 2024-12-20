"use client"
import Image from "next/image";
import InformationCard from "../components/login/informationCard";
import IssuesFixedInformationCard from "../components/login/issueFixedInforCard";
import SignUpCard from "../components/login/signupCard";

export default function Content() {
    return (<>
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
           
            <div className="hidden max-w-[447px] h-[455px] flex md:flex-col items-center justify-center relative">
                <InformationCard />
                <IssuesFixedInformationCard position="absolute bottom-5 left-80 z-10" />
            </div>
            <Image src={`/loginpagelogo.png`} alt="login logo" width={142} height={162.5} className="hidden md:absolute md:bottom-0 md:left-0"/>
            <div className="w-[440px] h-[888px] md:w-[50%] md:min-h-screen flex flex-col items-center justify-center md:justify-around bg-gray-50 ">
                <SignUpCard/>
                <p>By signing up you agree to the <span className="font-bold">Privacy Policy</span></p>
            </div>
        </div>
        </>
    );
}
