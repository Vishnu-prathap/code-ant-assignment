import { Button, Input } from "@nextui-org/react";
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd, IoSearchOutline } from "react-icons/io5";
import RepoCard from "./repoCard";

export default function Repositories() {
  return (
    <div className="bg-white border w-full h-[calc(100vh-32px)] rounded-lg shadow-sm flex flex-col overflow-hidden md:pt-0 pt-16">
      {/* Header Section - Fixed */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 space-y-4 md:space-y-0 bg-white">
        <div className="flex flex-col">
          <p className="text-xl font-bold">Repositories</p>
          <p className="text-sm">33 total repositories</p>
        </div>
        <div className="flex flex-row items-center gap-2 w-full md:w-auto">
          <Button
            variant="flat"
            size="md"
            color="default"
            startContent={<FiRefreshCw />}
            className="flex-1 md:flex-none"
          >
            Refresh All
          </Button>
          <Button
            startContent={<IoAdd />}
            variant="solid"
            color="primary"
            size="md"
            className="flex-1 md:flex-none"
          >
            Add Repository
          </Button>
        </div>
      </div>

      {/* Search Section - Fixed */}
      <div className="px-4 pb-4 bg-white">
        <Input
          className="max-w-[366px]"
          startContent={<IoSearchOutline />}
          size="md"
          variant="bordered"
          placeholder="Search Repositories"
        />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4">
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