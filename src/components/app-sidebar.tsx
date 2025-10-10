"use client";

import * as React from "react";
import {
  AxeIcon,
  BookOpen,
  Bot,
  Command,
  CreditCard,
  Frame,
  Icon,
  LayoutDashboard,
  LayoutGrid,
  LayoutTemplate,
  LifeBuoy,
  LogOut,
  LogsIcon,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Workflow,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "./ui/button";

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
  { title: "Settings", icon: <PieChart />, href: "/settings" },
  { title: "Connections", icon: <LayoutGrid />, href: "/connections" },
  { title: "Billing", icon: <CreditCard />, href: "/billing" },
  { title: "Templates", icon: <LayoutTemplate />, href: "/templates" },
  { title: "Logs", icon: <LogsIcon />, href: "/logs" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <header className=" flex justify-between w-full  mt-3 mb-3">
              <div>LOGO</div>
              <div>N8N</div>
            </header>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
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

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
