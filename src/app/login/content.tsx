"use client"
import Image from "next/image";
import InformationCard from "../components/login/informationCard";
import IssuesFixedInformationCard from "../components/login/issueFixedInforCard";

export default function Content() {
    return (<>
        <div className="flex flex-row justify-between items-center h-full">
            {/* desktop view */}
            <div className="max-w-[447px] h-[455px] flex flex-col items-center justify-center relative">
                <InformationCard />
                <IssuesFixedInformationCard position="absolute bottom-5 left-80 z-10" />
            </div>
            <Image src={`/loginpagelogo.png`} alt="login logo" width={284} height={319} className="absolute bottom-0 left-0"/>
            <div className="w-full flex flex-col items-center justify-center ">2</div>
        </div>
        </>
    );
}
