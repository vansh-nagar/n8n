import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset className="p-4 ">
          <div className=" flex   items-center gap-4">
            <SidebarTrigger /> <div className="">Name</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default page;
