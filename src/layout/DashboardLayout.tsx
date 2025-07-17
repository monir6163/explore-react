import { AppSidebar } from "@/components/DashboardUI/Partial/AppSiderBar";
import { ProfileDropdown } from "@/components/DashboardUI/profile-dropdown";
import { ThemeSwitch } from "@/components/DashboardUI/theme-switch";
import { TopNav } from "@/components/DashboardUI/top-nav";
import ProgressBar from "@/components/ProgressBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <ProgressBar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header
            className={cn(
              "bg-background flex h-16 items-center gap-3 p-4 sm:gap-4 transition-shadow duration-300 shadow-sm header-fixed peer/header z-50 w-full rounded-md border border-border",
              offset > 10
                ? "shadow-sm header-fixed peer/header fixed z-50 w-full rounded-md border border-border bg-background"
                : ""
            )}
          >
            <SidebarTrigger
              variant="outline"
              className="scale-125 sm:scale-100"
            />
            <Separator orientation="vertical" className="h-6" />

            <TopNav links={topNav} />

            <div className="flex-1" />

            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <ProfileDropdown />
            </div>
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true,
    disabled: false,
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false,
    disabled: true,
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false,
    disabled: true,
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false,
    disabled: true,
  },
];
