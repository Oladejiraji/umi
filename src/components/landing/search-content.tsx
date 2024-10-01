import React from "react";

export default function SearchContent() {
  return (
    <div className="app_menu_content flex h-full flex-col justify-between px-6 pt-2">
      <div className="app_menu_content__ctt flex flex-1 flex-col gap-10">
        {/* <h5 className="app_menu_content__ctt__title">
          Umi is sill in beta and is constantly being updated
        </h5> */}
        <input
          placeholder="Search anything"
          className="app_search_content__input flex-1"
        />
      </div>
    </div>
  );
}
