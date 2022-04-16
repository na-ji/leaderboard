import { signOut } from 'next-auth/react';

import { Logo } from './Logo';
import Link from 'next/link';

export interface HeaderProps {
  enableAuth: boolean;
}

export const Header = ({ enableAuth }: HeaderProps): JSX.Element => {
  return (
    <header className="flex items-center justify-between bg-gradient lg:h-20 h-15 px-4 lg:px-10 py-2.5 lg:py-5 text-white-100 text-[22px] font-normal">
      <Link href="/">
        <a className="flex items-center">
          <Logo />
          <div className="ml-1.5 lg:ml-2.5">PokemonGo</div>
        </a>
      </Link>
      {enableAuth && (
        <a href="#!" className="justify-self-end" onClick={() => signOut()}>
          Sign out
        </a>
      )}
    </header>
  );
};
