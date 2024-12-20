"use client"
import Image from "next/image";
import InformationCard from "../components/login/informationCard";
import IssuesFixedInformationCard from "../components/login/issueFixedInforCard";
import SignUpCard from "../components/login/signupCard";

export default function Content() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-screen">
            {/* Information cards container - hidden on mobile */}
            <div className="hidden md:flex max-w-[447px] h-[475px] flex-col items-start justify-center relative">
                <InformationCard />
                <IssuesFixedInformationCard position="absolute bottom-5 left-80 z-10" />
            </div>
            
            {/* Logo - hidden on mobile */}
            <Image 
                src={`/loginpagelogo.png`} 
                alt="login logo" 
                width={284} 
                height={319} 
                className="hidden md:block md:absolute md:bottom-0 left-0"
            />
            
            {/* Sign up section - full width on mobile */}
            <div className="w-full md:w-[50%] min-h-screen flex flex-col items-center justify-around bg-gray-50">
                <SignUpCard/>
                <p className="text-sm">
                    By signing up you agree to the <span className="font-bold">Privacy Policy</span>
                </p>
            </div>
        </div>
    );
}