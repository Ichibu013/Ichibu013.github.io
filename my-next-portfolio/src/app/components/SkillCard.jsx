// components/SkillCard.jsx
import React from "react";

const SkillCard = ({ name, icon, proficiency, colorClass }) => {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-lg  transition-transform transform hover:scale-105 backdrop-blur-md"
      style={{
        backgroundColor: "rgb(1 19 33/ 39%)",
        boxShadow:
          "0 10px 15px -3px rgb(3 76 133 / 100%), 0 4px 6px -4px rgb(0 188 212 / 100%)",
      }}
    >
      {/* Skill Icon Container */}
      <div className="w-20 h-20 mb-4 flex items-center justify-center ">
        {/* Conditional rendering based on the 'icon' prop type */}
        {typeof icon === "string" ? (
          // If 'icon' is a string, assume it's an image path (PNG, JPG, GIF, etc.)
          <img
            src={icon}
            alt={`${name} Icon`}
            // Use object-contain to ensure the image/gif fits within the container without cropping
            // If you want it to fill the container and potentially crop, use object-cover
            className="w-full h-full object-contain"
          />
        ) : // If 'icon' is a React component (e.g., an imported FontAwesome or Lucide icon)
        React.isValidElement(icon) ? (
          // If it's a valid React element, clone it to add className
          // This ensures the colorClass applies to FontAwesome icons and other SVG components
          React.cloneElement(icon, {
            className: `w-full h-full ${colorClass}`,
            // For FontAwesome icons, you might also pass a 'size' prop here if needed,
            // e.g., size="2x" or size="3x" if 'w-full h-full' isn't sufficient for your design.
          })
        ) : (
          // Fallback if icon is neither a string nor a valid React element
          <div
            className={`w-full h-full flex items-center justify-center text-gray-400 ${colorClass}`}
          >
            ?
          </div>
        )}
      </div>

      {/* Skill Name */}
      <span className="text-lg font-semibold text-white mb-2">
        {name.toUpperCase()}
      </span>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        {" "}
        {/* Added overflow-hidden for safety */}
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
