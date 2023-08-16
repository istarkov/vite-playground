import { ReactNode } from 'react';
import { Header } from './header';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipPrimitive.Provider>
      <div className="grid grid-rows-[auto_1fr_auto] bg-background text-foreground">
        <div>
          <Header />
        </div>
        <div>{children}</div>
        <div className="bg-red-500 h-20">3</div>
      </div>
    </TooltipPrimitive.Provider>
  );
};
