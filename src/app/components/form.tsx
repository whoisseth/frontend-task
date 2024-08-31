"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const profileFormSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters."
      })
      .regex(/^[a-zA-Z\s-]+$/, {
        message: "Name should only contain letters, spaces, and hyphens."
      }),
    email: z.string().email({
      message: "Please enter a valid email address."
    }),
    password: z.string().min(8, {
      message: "Password must contain at least 8 characters."
    }),
    confirm_password: z.string().min(8, {
      message: "Confirm password must contain at least 8 characters."
    })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"]
  });

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function UserFrom() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),

    mode: "onChange"
  });

  function onSubmit(data: ProfileFormValues) {
    console.log("data", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <div className="max-w-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div>
            <h2 className="text-xl font-semibold">Create User</h2>
          </div>

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User *</FormLabel>

                <FormControl>
                  <Input placeholder="Josh" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>

                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>

                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password *</FormLabel>

                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className=" w-20">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
