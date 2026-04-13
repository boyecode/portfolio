import React from "react";

const SkillBadge = ({ skill }) => (
  <span className="bg-[#1F2937] text-[#F9FAFB] px-3 py-1 rounded-full shadow-[0_0_10px_#3B82F6] text-sm font-semibold">
    {skill}
  </span>
);

export default SkillBadge;