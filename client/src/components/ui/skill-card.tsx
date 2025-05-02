import React from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const SkillCard = ({ title, description, icon, bgColor }: SkillCardProps) => {
  return (
    <div className="bg-dark-300 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          bgColor
        )}
      >
        {icon}
      </div>
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
