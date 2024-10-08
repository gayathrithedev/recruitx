"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import { DotsIcon } from "../../components/icons/accounts/dots-icon";
import { InfoIcon } from "../../components/icons/accounts/info-icon";
import { TrashIcon } from "../../components/icons/accounts/trash-icon";
import { HouseIcon } from "../../components/icons/breadcrumb/house-icon";
import { UsersIcon } from "../../components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "../../components/icons/sidebar/settings-icon";

export const Accounts = () => {
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Users</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Shivam</span>
        </li>
      </ul>
    </div>
  );
};
