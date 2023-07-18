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
        <NavigationMenuList data-tag="NavigationMenuList">
          <NavigationMenuItem data-tag="NavigationMenuItem">
            <NavigationMenuTrigger data-tag="NavigationMenuTrigger">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent data-tag="NavigationMenuContent">
              <div className="flex gap-2 m-4">
                <div className="min-w-0 flex-1">
                  <NavigationMenuLink data-tag="NavigationMenuLink" href="/">
                    Introduction
                  </NavigationMenuLink>
                  <div className="text-sm text-gray-500">
                    Although the phrase is nonsense, it does have a long history
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <NavigationMenuLink href="/">Link 1.2</NavigationMenuLink>
                  <NavigationMenuLink href="/">Link 1.3</NavigationMenuLink>
                  <NavigationMenuLink href="/">Link 1.4</NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
