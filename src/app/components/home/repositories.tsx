import { Button, Input } from "@nextui-org/react";
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd, IoSearchOutline } from "react-icons/io5";
import RepoCard from "./repoCard";

export default function Repositories() {
  return (
    <div className="bg-white m-4 border w-full h-full max-h-screen rounded-lg shadow-sm flex flex-col overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-col">
          <p className="text-xl font-bold">Repositories</p>
          <p className="text-sm">33 total repositories</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="flat"
            size="md"
            color="default"
            startContent={<FiRefreshCw />}
          >
            Refresh All
          </Button>
          <Button
            startContent={<IoAdd />}
            variant="solid"
            color="primary"
            size="md"
          >
            Add Repository
          </Button>
        </div>
      </div>

    
      <div className="px-4 pb-4">
        <Input
          className="w-full"
          startContent={<IoSearchOutline />}
          size="md"
          variant="bordered"
          placeholder="Search Repositories"
        />
      </div>


      <div className="flex-1 overflow-auto px-4 pb-4">
        <RepoCard />
      </div>
    </div>
  );
}
