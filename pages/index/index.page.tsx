import { CSSProperties, useEffect, useRef } from 'react';
import './index.css';

export const Page = () => {
  const size = 30;
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    if (!scrollable) return;

    const handleScroll = () => {
      scrollable.style.setProperty(
        '--scroll',
        `${
          scrollable.scrollLeft /
          (scrollable.scrollWidth - scrollable.clientWidth)
        }`
      );
    };

    handleScroll();

    scrollable.addEventListener('scroll', handleScroll, { passive: true });

    return () => scrollable.removeEventListener('scroll', handleScroll);
  }, []);

  const style = {
    '--size': size,
  } as CSSProperties;

  return (
    <>
      <h1 className="font-bold">Index</h1>

      <div className="m-4">
        <div
          style={style}
          ref={scrollableRef}
          className="
          snap-mandatory snap-x
          w-52 aspect-[3/4]
          overflow-x-auto
          grid gap-4 auto-cols-[100%] grid-flow-col
          bg-yellow-400 scrollbar-hide
          test"
        >
          {Array.from(Array(size), (_, index) => (
            <div
              key={index}
              className="bg-red-400 snap-start grid justify-center items-center"
            >
              {index}
              <div className="w-[var(--hello,10)] bg-blue-600">.</div>
            </div>
          ))}
        </div>
      </div>

      <a className="btn" href="/content">
        Content
      </a>
    </>
  );
};
