import React from "react";
/**
 *  add an on click event to each group
 *  to render that event in the main content container
 */
const dummy = [
  {
    id: 1,
    name: "EDC Vegas 2027",
    icon: "🎉",
  },
  {
    id: 2,
    name: "Winter Vacation in Hawaii",
    icon: "🏝️",
  },
  {
    id: 3,
    name: "Europe 2025",
    icon: "🗼",
  },
];

const Groups = () => {
  return (
    <div className="groups">
      {dummy.map((group) => (
        <div key={group.id} className="group">
          {group.icon} {group.name}
        </div>
      ))}
    </div>
  );
};

export default Groups;
