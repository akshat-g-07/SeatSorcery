"use client";

import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import Link from "next/link";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export default function CardWrapper({
  cardTitle,
  cardDescription,
  children,
  showSocial = true,
  footerButtonLink,
  footerButtonLabel,
}: {
  cardTitle: string;
  cardDescription: string;
  children: ReactNode;
  showSocial: Boolean;
  footerButtonLink: string;
  footerButtonLabel: string;
}) {
  return (
    <div className="w-full h-auto my-10 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <Card className="shadow-lg w-fit min-w-80">
        <CardHeader className="text-center">
          <CardTitle className="font-semibold text-xl">
            {cardTitle.toUpperCase()}
          </CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footerButtonLabel && footerButtonLink && (
          <CardFooter className="flex-col">
            {showSocial && (
              <>
                <Button
                  variant="outline"
                  onClick={() => {
                    signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
                  }}
                >
                  <GoogleIcon />
                  &nbsp; Continue With Google
                </Button>
              </>
            )}
            <Button variant="link" className="mt-2">
              <Link href={footerButtonLink}>{footerButtonLabel}</Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
