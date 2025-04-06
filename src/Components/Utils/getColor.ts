export const getColor = (userName: string) => {
  const colors = [
    "#8B0000", // Dark Red
    "#A52A2A", // Brown
    "#00008B", // Dark Blue
    "#2F4F4F", // Dark Slate Gray
    "#556B2F", // Dark Olive Green
    "#8B4513", // Saddle Brown
    "#483D8B", // Dark Slate Blue
    "#2E8B57", // Sea Green
    "#4B0082", // Indigo
    "#800000", // Maroon
  ];

  const index = userName.charCodeAt(0) % colors.length;
  return colors[index];
};
