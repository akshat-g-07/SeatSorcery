"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition, useState } from "react";
import { login } from "@/actions/login";
import CardWrapper from "../components/CardWrapper";
import { CircularProgress } from "@mui/material";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormData) => {
    setError("");
    const { email, password } = values;
    if (!email) {
      setError("Email is required!");
      return null;
    }

    if (!password) {
      setError("Password is required!");
      return null;
    }

    startTransition(async () => {
      login(values).then((data) => {
        setError(data?.error);
      });
    });
  };

  return (
    <>
      <CardWrapper
        cardTitle={"Login"}
        cardDescription={"Welcome Back!"}
        showSocial
        footerButtonLink={"/auth/register"}
        footerButtonLabel={"Don't have an account?"}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
