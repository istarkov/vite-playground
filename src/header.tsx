import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
  // NavigationMenuIndicator,
} from '@/components/ui/navigation-menu';

export const Header = () => {
  return (
    <div className="grid justify-items-center">
      <NavigationMenu data-tag="NavigationMenu">
        <NavigationMenuItem data-tag="NavigationMenuItem">
          <NavigationMenuTrigger data-tag="NavigationMenuTrigger">
            Item 1
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="flex gap-4 flex-col p-4"
            data-tag="NavigationMenuContent"
          >
            <NavigationMenuLink data-tag="NavigationMenuLink" href="/">
              Link 1.1
            </NavigationMenuLink>
            <NavigationMenuLink href="/">
              Link 1.2 --- kskdjskjdskd s
            </NavigationMenuLink>
            <NavigationMenuLink href="/">Link 1.3</NavigationMenuLink>
            <NavigationMenuLink href="/">Link 1.4</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-4 flex-col p-4">
            <NavigationMenuLink>Link 1 sdd sd sd s dsd sd</NavigationMenuLink>
            <NavigationMenuLink>Link 2 sd sd s ds ds ds ds</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 3</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-4 flex-col p-4">
            <NavigationMenuLink>Link 1</NavigationMenuLink>
            <NavigationMenuLink>Link 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};
