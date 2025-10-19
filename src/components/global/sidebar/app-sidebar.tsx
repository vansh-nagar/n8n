"use client";

import * as React from "react";
import {
  Cable,
  CreditCard,
  LayoutDashboard,
  LayoutTemplate,
  LifeBuoy,
  LogsIcon,
  PieChart,
  Send,
  Settings,
  Workflow,
} from "lucide-react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export const menuOptions = [
  { title: "Dashboard", icon: <LayoutDashboard />, href: "/dashboard" },
  { title: "Workflows", icon: <Workflow />, href: "/workflows" },
  { title: "Settings", icon: <Settings />, href: "/settings" },
  { title: "Connections", icon: <Cable />, href: "/connections" },
  { title: "Billing", icon: <CreditCard />, href: "/billing" },
  { title: "Templates", icon: <LayoutTemplate />, href: "/templates" },
  { title: "Logs", icon: <LogsIcon />, href: "/logs" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme } = useTheme();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <header className=" flex justify-between w-full  mt-3 mb-3">
              <Link href={"/"} className="  text-2xl font-bold cursor-pointer">
                <div>LOGO</div>
              </Link>
              <SidebarTrigger  />
            </header>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className=" flex justify-between">
        <div className=" flex  flex-col gap-2">
          {
            menuOptions.map((option) => (
              <Link key={option.href} href={option.href}>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="  justify-start w-full"
                >
                  {option.icon} {option.title}
                </Button>
              </Link>
            ))
            // <NavMain items={menuOptions} className="mt-6" />
          }
        </div>

        <div className=" flex flex-col gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="  justify-start">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="block dark:hidden">Light</span>
                <span className="hidden dark:block">Dark</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <footer className=" flex  gap-3  items-center  px-3 bg-accent rounded-xl h-13">
            <UserButton />
            <div className=" leading-4 text-sm">
              vansh nagar <br />
              <span className="text-xs"> Catalazyz@gmail.com</span>
            </div>
          </footer>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
