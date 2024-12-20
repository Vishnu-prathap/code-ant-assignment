import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function IssuesFixedInformationCard({ position }: { position: string }) {
  return (
    <div className={`${position}  bg-white w-[265px] h-[164px] border shadow-xl rounded-3xl flex flex-col items-start justify-center p-6`}>
      <div className="flex flex-row w-[204px] relative items-center justify-between">
        <div className="relative w-[56px] h-[56.77px]">
          <Image
            src="/loginpieouter.png"
            alt="pie"
            width={56}
            height={56.77}
            className="absolute top-0 left-0"
          />
          <Image
            src="/loginpieinner.png"
            alt="pie"
            width={28}
            height={28.38}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-start gap-x-1">
            <FaArrowUp className="text-blue-800" />
            <p className="font-bold text-blue-800">14%</p>
          </div>
          <p>This week</p>
        </div>
      </div>

      {/* Centered Issues Fixed Section */}
      <div className="flex flex-col items-start justify-start h-full mt-4">
        <p className="font-semibold text-lg">Issues Fixed</p>
        <p className="text-2xl font-bold">500k +</p>
      </div>
    </div>
  );
}
