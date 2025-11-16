"use client";

import { Button } from "../../../components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

import Link from "next/link";
import Image from "next/image";
import SideImage from "../../../assets/signInImage.jpg";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ extract callbackUrl from URL query
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  /** ✅ Redirect user if already signed in */
  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl);
    }
  }, [status, callbackUrl, router]);

  /** ✅ Form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl, // ✅ pass callback url
    });

    if (res?.ok) {
      toast.success("Login successful");
      router.push(callbackUrl);  // ✅ return where user wanted to go
    } else if (res?.status === 401) {
      setError("Invalid Credentials");
    } else {
      setError("Something went wrong");
    }

    setPending(false);
  };

  /** ✅ OAuth Providers */
  const handleProvider = async (event: React.MouseEvent<HTMLButtonElement>, value: "google") => {
    event.preventDefault();
    signIn(value, { callbackUrl }); // ✅ return to same page
  };

  if (status === "loading") return <div></div>;

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="hidden lg:flex lg:w-2/5 relative overflow-hidden">
        <Image src={SideImage} alt="Sign-in illustration" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b0918]/30"></div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-black px-4">
        <Card className="w-full max-w-md p-4 sm:p-8">
          <CardHeader>
            <CardTitle className="text-center">Sign in</CardTitle>
            <CardDescription className="text-sm text-center">
              Use email or Google to sign in
            </CardDescription>
          </CardHeader>

          {error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-4">
              <TriangleAlert />
              <p>{error}</p>
            </div>
          )}

          <CardContent className="px-2 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                disabled={pending}
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                disabled={pending}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button className="w-full" size="lg" disabled={pending}>
                Continue
              </Button>
            </form>

            <Separator className="my-4" />

            <div className="flex justify-center">
              <Button
                disabled={pending}
                onClick={(e) => handleProvider(e, "google")}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-105 transition-transform"
              >
                <FcGoogle className="size-8" />
              </Button>
            </div>

            <p className="text-center text-sm mt-4 text-muted-foreground">
              Create new account
              <Link href="/sign-up" className="text-sky-700 ml-2 hover:underline">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
