import { Layout } from '@/layout';
import { StrictMode } from 'react';
import type { PageContext } from './types';
import './index.css';

export const PageShell = ({
  children,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => {
  return (
    <StrictMode>
      <Layout>{children}</Layout>
    </StrictMode>
  );
};
