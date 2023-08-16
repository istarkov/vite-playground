import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { forwardRef, useEffect, useRef, useState } from 'react';

const Child = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  (props, ref) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
        console.log('ref', ref);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div ref={ref}>
        {props.children} {counter}
      </div>
    );
  }
);

export const Content = () => {
  const [counter, _setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref.current', ref.current);
  }, []);

  return (
    <div className="m-4">
      <h3 ref={ref}>
        <Child ref={ref}>dddd</Child>
      </h3>
      <div className={twMerge('p-3', 'px-6')}>CONTENT</div>
      <div className={twMerge('px-6', 'p-3')}>CONTENT</div>
      <div className="grid gap-2 grid-flow-col">
        <Button variant="destructive">Click me</Button>
        <Button variant="destructive" disabled size="sm">
          Click me
        </Button>
        <TooltipPrimitive.Root open>
          <TooltipPrimitive.Trigger
            data-name="TooltipPrimitive.Trigger"
            asChild
          >
            <Button
              key={counter % 2 === 0 ? 'A' : 'B'}
              variant="destructive"
              size="sm"
            >
              Click me {counter}
            </Button>
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal data-name="TooltipPrimitive.Portal">
            <TooltipPrimitive.Content
              asChild
              sideOffset={5}
              side="left"
              className="rounded-md border px-3 py-1.5 shadow bg-white"
              data-name="TooltipPrimitive.Content"
            >
              <div>Tooltip content</div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </div>
    </div>
  );
};
