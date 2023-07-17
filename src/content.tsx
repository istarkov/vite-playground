import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';

export const Content = () => {
  return (
    <div className="m-4">
      <div className={twMerge('p-3', 'px-6')}>CONTENT</div>
      <div className={twMerge('px-6', 'p-3')}>CONTENT</div>
      <div className="grid gap-2 grid-flow-col">
        <Button variant="destructive">Click me</Button>
        <Button variant="destructive" disabled size="sm">
          Click me
        </Button>
      </div>
    </div>
  );
};
