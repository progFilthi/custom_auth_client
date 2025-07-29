import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href={"/auth/sign-in"}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
