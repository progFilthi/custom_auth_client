"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-between py-2 px-4">
      <ul>
        <Link href={"/"}>
          <li>Custom Auth</li>
        </Link>
      </ul>
      <div className="gap-4 flex">
        {theme === "dark" ? (
          <Button onClick={() => setTheme("light")}>
            <Sun />
          </Button>
        ) : (
          <Button onClick={() => setTheme("dark")}>
            <Moon />
          </Button>
        )}
      </div>
    </div>
  );
}
