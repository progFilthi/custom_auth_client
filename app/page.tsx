import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Button>
        <Link href={"/auth/sign-in"}>Get Started</Link>
      </Button>
    </div>
  );
}
