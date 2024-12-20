"use client"
import Image from "next/image";
import InformationCard from "../components/login/informationCard";
import IssuesFixedInformationCard from "../components/login/issueFixedInforCard";
import SignUpCard from "../components/login/signupCard";

export default function Content() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center min-h-screen relative">
            
            <div className="hidden md:flex max-w-[447px] h-[455px] relative pb-10">
  <InformationCard />
  <IssuesFixedInformationCard position="absolute top-[160px] left-[380px] z-10" />
</div>

            
            <Image 
                src={`/loginpagelogo.png`} 
                alt="login logo" 
                width={284} 
                height={319} 
                className="hidden md:block md:absolute md:bottom-0 left-0"
            />
            
            
            <div className="w-full md:w-[50%] min-h-screen flex flex-col items-center justify-center border-t-10 bg-gray-50 pb-16">


                <SignUpCard/>
                <p className="text-sm fixed bottom-16 text-center">
                    By signing up you agree to the <span className="font-bold">Privacy Policy.</span>
                </p>
            </div>
        </div>
    );
}