import { config } from 'node-config-ts';

import { Header } from './Header';

export const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header enableAuth={config.enableAuth} />
      <main className="bg-blue-10 grow p-4 lg:p-10">{children}</main>
    </div>
  );
};
