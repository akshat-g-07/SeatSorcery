"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CardWrapper from "../components/CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";
import { CircularProgress } from "@mui/material";

export default function RegisterPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegisterFormData) => {
    setError("");
    setSuccess("");

    const { name, email, password } = values;
    if (!name) {
      setError("Name is required!");
      return null;
    }

    if (!email) {
      setError("Email is required!");
      return null;
    }

    if (!password) {
      setError("Password is required!");
      return null;
    }

    if (password.length < 8) {
      setError("Password length should be at least 8!");
      return null;
    }

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <>
      <CardWrapper
        cardTitle={"Signup"}
        cardDescription={"Welcome!"}
        showSocial
        footerButtonLink={"/auth/login"}
        footerButtonLabel={"Already have an account?"}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              disabled={isPending}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isPending}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@mail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isPending}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <FormMessage className="rounded-sm bg-destructive/90 p-2">
                <span className="text-destructive-foreground">{error}</span>
              </FormMessage>
            )}
            {success && (
              <FormMessage className="rounded-sm bg-emerald-500/90 p-2">
                <span className="text-white">{success}</span>
              </FormMessage>
            )}
            <Button disabled={isPending} type="submit" className="w-full">
              {isPending ? (
                <>
                  <div className="scale-50">
                    <CircularProgress className="text-white" />
                  </div>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
}
