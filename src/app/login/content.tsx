"use client"
import Image from "next/image";
import InformationCard from "../components/login/informationCard";
import IssuesFixedInformationCard from "../components/login/issueFixedInforCard";
import SignUpCard from "../components/login/signupCard";

export default function Content() {
    return (<>
        <div className="flex flex-row justify-between items-center h-full">
            {/* desktop view */}
            <div className="max-w-[447px] h-[455px] flex flex-col items-center justify-center relative">
                <InformationCard />
                <IssuesFixedInformationCard position="absolute bottom-5 left-80 z-10" />
            </div>
            <Image src={`/loginpagelogo.png`} alt="login logo" width={284} height={319} className="absolute bottom-0 left-0"/>
            <div className="w-[50%] min-h-screen flex flex-col items-center justify-around bg-gray-50 ">
                <SignUpCard/>
                <p>By signing up you agree to the <span className="font-bold">Privacy Policy</span></p>
            </div>
        </div>
        </>
    );
}
