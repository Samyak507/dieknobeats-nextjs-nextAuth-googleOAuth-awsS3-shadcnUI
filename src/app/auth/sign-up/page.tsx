"use client";

// shadcn ui
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


// react icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("confirmPassword", form.confirmPassword);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (res.ok) {
      setPending(false);
      toast.success(data.message);
      router.push("/sign-in");
    } else {
      setError(data.message || "An unexpected error occurred.");
      setPending(false);
    }
  };

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-2/5 relative overflow-hidden">
        <Image
          src={SideImage} // 👈 REPLACE THIS WITH YOUR IMAGE PATH
          alt="Music stage with instruments"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b0918]/30"></div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-black px-4">
        <Card className="md:h-auto w-full max-w-md p-4 sm:p-8">
          <CardHeader>
            <CardTitle className="text-center">Sign up</CardTitle>
            <CardDescription className="text-sm text-center text-accent-foreground">
              Use email or service, to create account
            </CardDescription>
          </CardHeader>
          {!!error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
              <TriangleAlert />
              <p>{error}</p>
            </div>
          )}
          <CardContent className="px-2 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                name="name"
                disabled={pending}
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                name="email"
                disabled={pending}
                placeholder="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                type="password"
                name="password"
                disabled={pending}
                placeholder="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <Input
                type="password"
                name="confirmPassword"
                disabled={pending}
                placeholder="confirm password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                required
              />
              <Button className="w-full" size="lg" disabled={pending}>
                {pending ? "Signing up..." : "Continue"}
              </Button>
            </form>

            <Separator className="my-4" />
            <div className="flex my-2 w-full justify-evenly mx-auto items-center">
              <Button
                disabled={pending}
                onClick={(e) => handleProvider(e, "google")}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-110 transition-transform"
              >
                <FcGoogle className="size-8" />
              </Button>
            </div>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              Already have an account?
              <Link
                className="text-sky-700 ml-4 hover:underline cursor-pointer"
                href="/sign-in"
              >
                Sign in{" "}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;