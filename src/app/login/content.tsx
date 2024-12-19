"use client"
import InformationCard from "../components/login/informationCard";

export default function Content(){
    return<div className="flex flex-row justify-between items-center h-full">
    {/* desktop view */}
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <InformationCard/>
    </div>
    <div className="w-full flex flex-col items-center justify-center">2</div>
    </div>
}