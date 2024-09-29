"use client";
import { Button, Search } from "@/components/shared";
import { default as SearchSvg } from "@/lib/svg/dashboard/Search";
import React, { useState } from "react";
import { Bell, Filter } from "@/lib/svg/dashboard";
import Publish from "@/lib/svg/dashboard/Publish";
import Save from "@/lib/svg/dashboard/Save";

const HomeHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="mx-auto flex h-full max-w-[1050px] items-center justify-between px-10">
      <div className="flex h-8 items-center gap-[18px]">
        <Search
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search your gallery"
          lefticon={<SearchSvg color="#868686" width="10" height="10" />}
          command="K"
        />
        <div className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-primary-300 drop-shadow-xl">
          <div className="">
            <Filter color="#868686" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 font-geist-medium text-grey-1200">
        <Button className="h-full gap-1 border-none bg-primary-100 drop-shadow-xl">
          <Publish color="#868686" />
          <p className="text-xs">Publish your gallery</p>
        </Button>
        <Button className="h-full gap-1 border-none bg-primary-400 drop-shadow-xl">
          <Save color="#868686" />
          <p className="text-xs">Save as Draft</p>
        </Button>
        <Button className="h-8 w-8 gap-1 border-none bg-primary-400 px-0 drop-shadow-xl">
          <Bell color="#868686" width="12" height="15" />
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
