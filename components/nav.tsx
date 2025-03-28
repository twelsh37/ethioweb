"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "መነሻ", href: "#hero" },
  { name: "ይዘቶች", href: "#content" },
  { name: "ስለ እኛ", href: "#about" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#006600]/90 backdrop-blur-sm border-b border-[#FDDA0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-serif font-bold text-white">
              ድረ-ገጽ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="text-white hover:text-[#FDDA0D]"
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="mobile-menu-button"
                  className="text-white hover:text-[#FDDA0D]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-[#006600]/95 border-l border-[#FDDA0D] text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">ድረ-ገጽ አስሰር</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start text-white hover:text-[#FDDA0D]"
                      onClick={() => {
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        });
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
