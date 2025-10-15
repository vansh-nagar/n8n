"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "@/lib/types";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import ProfilePicture from "@/app/(main)/(pages)/settings/components/profilepicture";

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <>
      <ProfilePicture />
      <Form {...form}>
        <form
          className=" flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();

            console.log("form submitted");
          }}
        >
          <FormField
            disabled={isLoading}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User full name</FormLabel>
                <Input placeholder="Name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isLoading || true}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User email</FormLabel>
                <Input type="email" placeholder="Email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Update Profile"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ProfileForm;
