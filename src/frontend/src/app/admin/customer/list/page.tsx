import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Ecommerce() {

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      This is a customer list page.
    </div>
  );
}
