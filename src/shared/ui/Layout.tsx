import { Header } from '@/widgets/header';
import { PropsWithChildren } from 'react';

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
