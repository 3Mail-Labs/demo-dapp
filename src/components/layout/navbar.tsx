import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

import { Container } from "./container";

export const Navbar = async () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <Button>Get started</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
