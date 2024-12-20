'use client'
import Navbar from "./components/home/navbar";
import Repositories from "./components/home/repositories";

export default function Content(){
    return<div className="flex flex-row bg-gray-50">
        <Navbar/>
        {/* repo part */}
        <Repositories/>
    </div>
}