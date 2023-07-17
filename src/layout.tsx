import { Content } from './content';
import { Header } from './header';

export const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-background text-foreground">
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div className="bg-red-500 h-20">3</div>
    </div>
  );
};
