import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Navbar = () => (
  <nav className="lg:sticky lg:top-0 lg:z-10 flex w-full flex-row justify-between bg-transparent p-6 text-white">
    <Link href="/" className="text-2xl font-semibold">
      <h1>
        nevaeh<span className="text-[#7f56da]">.dev</span>
      </h1>
    </Link>
    <Link href={"#contact"}>
      <Button 
        variant="secondary" 
        size="lg" 
        className="rounded-xl bg-white/15 px-6 py-2 text-white hover:bg-white/10"
      >
        Contact
      </Button>
    </Link>
  </nav>
);