import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">YourBrand</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link
            to="#pricing"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Link to="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link
            to="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
