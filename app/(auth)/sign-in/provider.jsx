"use client";

import { Loading } from "@/components/loading";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export const Provider = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      // await signInWithGoogle();
      signIn("google", { callbackUrl: "/home" });
    } catch (error) {
      console.log(error);
      toast.error(
        error.message?.length < 50 ? error.message : "Sign in failed"
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="my-6">
      {/* <div className="flex items-center gap-x-3">
        <div className="bg-highlight h-[3px] flex-1"></div>
        <p className="text-sm font-bold text-slate-600">or</p>
        <div className="bg-highlight h-[3px] flex-1"></div>
      </div> */}

      <Button className="w-full mt-4" variant="outline" onClick={handleClick}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Image
              width={16}
              height={16}
              alt="google"
              src={"/images/google.png"}
              className="mr-4"
            />
            <p>Continue with Google</p>
          </>
        )}
      </Button>
    </div>
  );
};
