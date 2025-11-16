"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button"; // Assuming this is your Shadcn Button component
import { useSession, signOut } from "next-auth/react";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    // Styling the loader to match the button size and general alignment
    return <Loader className="size-6 animate-spin text-cyan-400" />;
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  if (session) {
    // When logged in, show the avatar dropdown
    const avatarFallback = session.user?.name?.charAt(0).toUpperCase() || "A";
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex gap-3 items-center"> {/* Added a wrapper for consistent spacing if needed */}
            <span className="hidden sm:inline text-white">{session.user?.name}</span> {/* Optionally show name */}
            <Avatar className="size-10 border-2 border-transparent transition hover:border-cyan-400">
              <AvatarImage src={session.user?.image || undefined} />
              <AvatarFallback className="bg-sky-900 text-white">{avatarFallback}</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem className="h-10 cursor-pointer" onClick={handleSignOut}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-4"> {/* Increased gap slightly to match image */}
      {/* Login Button */}
      <Button asChild
        className="
          px-6 py-3 
          border-2 border-cyan-400  
          bg-transparent  // Transparent background
          text-cyan-400  // Cyan text
          font-semibold  // Font size and weight
          rounded-xl 
          hover:bg-cyan-400  // Subtle hover background
          hover:text-black  // Text color on hover
          transition-all duration-300 ease-in-out
        "
      >
        <Link href="/auth/sign-in">Login</Link>
      </Button>

      {/* Sign Up Button */}
      <Button asChild
        className="
          px-6 py-3  // Generous padding
          bg-gradient-to-r from-cyan-400 to-fuchsia-600  // Gradient background
          text-black  // Black text
           font-semibold  // Font size and weight
          rounded-xl  
          shadow-lg hover:shadow-xl hover:shadow-cyan-500/30  // Shadow for depth
          transition-all duration-300 ease-in-out
          transform hover:scale-105 // Slight scale on hover for interactivity
        "
      >
        <Link href="/auth/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
}