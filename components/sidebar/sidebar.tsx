import React from "react";
import { Avatar, Tooltip } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { Logo } from "../icons";

import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { CompaniesDropdown } from "./companies-dropdown";
import { Sidebar } from "./sidebar.styles";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {/* <CompaniesDropdown /> */}
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">RECRUITX</p>
          </NextLink>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              href="/"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              title="Home"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                href="profile"
                icon={<AccountsIcon />}
                isActive={pathname === "/accounts"}
                title="Profile"
              />
              <SidebarItem
                icon={<PaymentsIcon />}
                isActive={pathname === "/companies"}
                title="Companies"
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["European Countries", "Asian Countries", "Others"]}
                title="Jobs"
              />
              <SidebarItem
                icon={<ProductsIcon />}
                isActive={pathname === "/blogs"}
                title="Blogs"
              />
              <SidebarItem
                icon={<ReportsIcon />}
                isActive={pathname === "/reports"}
                title="Reports"
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                icon={<DevIcon />}
                isActive={pathname === "/contact"}
                title="Contact US"
              />
              <SidebarItem
                icon={<ViewIcon />}
                isActive={pathname === "/help"}
                title="Help"
              />
              <SidebarItem
                icon={<SettingsIcon />}
                isActive={pathname === "/settings"}
                title="Settings"
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                icon={<ChangeLogIcon />}
                isActive={pathname === "/preferences"}
                title="Preferences"
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip color="primary" content={"Settings"}>
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip color="primary" content={"Adjustments"}>
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip color="primary" content={"Profile"}>
              <Avatar
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
