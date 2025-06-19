import LogInForm from "@/components/auth/LogInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in into your account.",
  description: "By logging in, you can access your account and manage your settings.",
};

export default function LogInPage() { 
  return <LogInForm />;
}
