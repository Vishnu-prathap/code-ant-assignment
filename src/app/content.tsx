'use client'
import Navbar from "./components/home/navbar";
import Repositories from "./components/home/repositories";

export default function Content(){
    return<div className="flex flex-row">
        <Navbar/>
        {/* repo part */}
        <Repositories/>
    </div>
}