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
    <div className="w-full h-auto min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <Card className="shadow-lg w-80">
        <CardHeader className="text-center">
          <CardTitle className="font-semibold text-xl">
            {cardTitle.toUpperCase()}
          </CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex-col">
          {showSocial && (
            <>
              <Button variant="outline">
                <GoogleIcon />
                &nbsp;&nbsp; {cardTitle} With Google
              </Button>
            </>
          )}
          <Button variant="link" className="mt-2">
            <Link href={footerButtonLink}>{footerButtonLabel}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
