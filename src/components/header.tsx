import { FileText } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <FileText className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">UPLIFT</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/howitworks"
        >
          How it Works
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
