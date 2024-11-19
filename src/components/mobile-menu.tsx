"use client"

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background md:hidden">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Owen</span>
        </Link>
        <Button
          variant="ghost"
          className="inline-flex items-center justify-center rounded-md"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav className="container grid gap-6 p-6">
        <Link
          href="#about"
          className="text-lg font-medium"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-lg font-medium"
          onClick={() => setOpen(false)}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-lg font-medium"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-lg font-medium"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
