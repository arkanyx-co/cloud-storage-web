import { PropsWithChildren } from 'react';
import { Header } from './Header';

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
