"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/content/icons";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";


export default function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // On mount, read values directly from DOM inputs (handle autofill)
    if (usernameRef.current?.value) setUsername(usernameRef.current.value);
    if (passwordRef.current?.value) setPassword(passwordRef.current.value);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    
    e.preventDefault();

    const res = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/admin",
    });
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/admin"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-0">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md mx-auto text-center">
              BB Management System
            </h1>
          </div>
          <div className="mb-5 sm:mb-0">
            <h3 className="mb-2 mx-auto text-center">
              Sign In to Continue
            </h3>
          </div>
          <div>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Domain Id/SAP Id <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input 
                          onChange={(e) => setUsername(e.target.value)} 
                          placeholder="Enter your Domain Id or SAP ID" 
                          type="text" 
                          ref={usernameRef}
                          defaultValue={username}/>
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      defaultValue={password}
                      placeholder="Enter your password"
                      ref={passwordRef}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Sign in
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
