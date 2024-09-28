import React from "react";

export default function SearchContent() {
  return (
    <div className="app_search_content h-full px-7 pb-3 pt-4">
      <input
        className="app_search_content__input"
        placeholder="Search anything"
        autoFocus
      />
    </div>
  );
}
