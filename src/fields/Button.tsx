"use client";

import React from "react";
const MyComponent = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = React.useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      await fetch("/update-barbers", { method: "POST" });
      setLoading(false);
    },
    [loading]
  );

  return (
    <button disabled={loading} onClick={handleClick}>
      Fetch from Altegio
    </button>
  );
};

export default MyComponent;
