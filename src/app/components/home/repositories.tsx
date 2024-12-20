import { Button, Input } from "@nextui-org/react";
import { FiRefreshCw } from "react-icons/fi";
import {  IoSearchOutline } from "react-icons/io5";
import RepoCard from "./repoCard";
import { IoIosAdd } from "react-icons/io";


export default function Repositories() {
  return (
    <div className="bg-white border w-full h-[calc(100vh-32px)] rounded-lg shadow-sm flex flex-col overflow-hidden md:m-4 md:pt-0 pt-16">
      {/* Header Section - Fixed */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 space-y-4 md:space-y-0 bg-white">
        <div className="flex flex-col pt-6">
          <p className="text-xl font-bold">Repositories</p>
          <p className="text-sm font-light">33 total repositories</p>
        </div>
        <div className="flex flex-row items-center gap-2 w-50% md:w-auto">
          <Button
            variant="bordered"
            size="md"
            color="default"
            startContent={<FiRefreshCw className="w-5 h-5 md:w-4 md:h-4"/>}
            className="flex-1 md:flex-none font-light"
          >
            Refresh All
          </Button>
          <Button
            startContent={ <IoIosAdd className="w-5 h-5 md:w-4 md:h-4"/>}
            variant="solid"
            color="primary"
            size="md"
            className="flex-1 md:flex-none font-semibold"
          >
            Add Repository
          </Button>
        </div>
      </div>

      {/* Search Section - Fixed */}
      <div className="px-4  bg-white">
        <Input
          className="max-w-[366px]"
          startContent={<IoSearchOutline />}
          size="md"
          variant="bordered"
          placeholder="Search Repositories"
        />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto pt-2">
        <div className="pb-4">
          <RepoCard />
          <RepoCard />
          
        </div>
      </div>

      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}