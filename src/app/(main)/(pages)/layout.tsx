import React from "react";

import { AppSidebar } from "@/components/global/sidebar/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="p-4 ">
        <div className=" flex   items-center gap-4 mb-5">
          <SidebarTrigger /> <div className="">Name</div>
        </div>
        {props.children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
