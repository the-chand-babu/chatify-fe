"use client";

const Navbar = () => {
  const handleClick = () => {
    console.log("theme");
    document.documentElement.setAttribute("data-bs-theme", "dark");
  };

  return (
    <div className="">
      <div
        style={{
          color: "var(--color-testing)",
          background: "var(--testing-color)",
        }}
        onClick={handleClick}
      >
        theme
      </div>
    </div>
  );
};

export default Navbar;
