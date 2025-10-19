"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "@/lib/types";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import ProfilePicture from "@/app/(main)/(pages)/settings/components/profilepicture";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

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

  const { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Spinner />;
  }

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const values = form.getValues();
      console.log("Form Values:", values);
      // Here you would typically send the values to your backend API
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className=" flex gap-4  mb-4  items-center">
        <Image
          src={user.imageUrl || ""}
          alt="pfp"
          height={50}
          width={50}
          className=" rounded-full"
        />
        <ProfilePicture />
      </section>
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
                <Input placeholder={user.fullName || "Name"} {...field} />
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
                <Input
                  type="email"
                  placeholder={user.emailAddresses[0]?.emailAddress || "Email"}
                  {...field}
                />
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
