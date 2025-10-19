
import ProfileForm from "@/components/forms/profile-form";
import React from "react";

const page = () => {
  return (
    <div>
      <header>
        <div className=" text-xl font-medium">User Profile</div>
        <div className=" text-muted-foreground text-sm">
          Add or update your profile information
        </div>
      </header>
      <section className=" mt-5">
        <ProfileForm />
      </section>
    </div>
  );
};

export default page;
