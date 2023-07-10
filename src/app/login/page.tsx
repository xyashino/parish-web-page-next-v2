"use client";
import React, { HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const LoginPage = ({ className, ...props }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div
      className={cn(
        "flex h-screen w-full items-center justify-center bg-gradient-to-bl from-accent-foreground to-neutral-800",
        className
      )}
      {...props}
    >
      <form onSubmit={onSubmit}>
        <Card>
          <CardHeader className="mx-4 pb-2 space-y-1">
            <CardTitle className="text-2xl italic">Witaj Ponownie !</CardTitle>
            <CardDescription>
              Najprawdopodbniej sesja wygasła musisz się zalogować.
            </CardDescription>
          </CardHeader>
          {/*<Separator/>*/}
          <CardContent className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button disabled={isLoading}>Sign In with Email</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;
