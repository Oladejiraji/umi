"use client";
import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, Logo, Menu, Search } from "@/lib/svg/icons";
import { RenderIf } from "../shared";
import MenuContent from "./menu-content";
import SearchContent from "./search-content";

const menuStateMap = {
  closed: {
    height: "52px",
    maxWidth: "172px",
  },
  menu: {
    height: "383px",
    maxWidth: "446px",
  },
  search: {
    height: "95px",
    maxWidth: "446px",
  },
};

type IMenuState = "closed" | "menu" | "search";

interface IMenuWrapper {
  isOpen: boolean;
  children: ReactNode;
}

const MenuWrapper = (props: IMenuWrapper) => {
  const { isOpen, children } = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-full"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: {
              filter: "blur(0px)",
              transition: { duration: 0.2, delay: 0.3 },
              opacity: 1,
            },
            collapsed: {
              filter: "blur(20px)",
              transition: { duration: 0.1 },
              opacity: 1,
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function MenuCon() {
  const [menuState, setMenuState] = useState<IMenuState>("closed");

  return (
    <div className="app_landing_menu">
      <motion.div
        className="app_landing_menu__ctt flex flex-col"
        animate={{
          maxWidth: menuStateMap[menuState].maxWidth,
          height: menuStateMap[menuState].height,
          transition: { type: "spring", stiffness: 300, damping: 27 },
        }}
      >
        <div className="app_landing_menu__ctt__action flex items-center justify-between">
          <RenderIf condition={menuState === "closed"}>
            <button
              type="button"
              onClick={() => {
                setMenuState("menu");
              }}
            >
              <Menu />
            </button>
          </RenderIf>

          <RenderIf condition={menuState !== "closed"}>
            <button
              type="button"
              onClick={() => {
                setMenuState("closed");
              }}
            >
              <Close />
            </button>
          </RenderIf>

          <Logo />

          <button
            type="button"
            onClick={() => {
              setMenuState("search");
            }}
          >
            <Search />
          </button>
        </div>

        <MenuWrapper isOpen={menuState === "menu"}>
          <MenuContent />
        </MenuWrapper>

        <MenuWrapper isOpen={menuState === "search"}>
          <SearchContent />
        </MenuWrapper>
      </motion.div>
    </div>
  );
}
