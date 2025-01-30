import {HomeNavigationMenu, ThemeTogglerNavigationMenu} from "@/components/navbar/NavigationMenu";

export default function Home() {
    return (
      <main>
          <div className="h-screen">
              <ThemeTogglerNavigationMenu />

              <div className="h-[calc(100vh-4rem)] flex flex-col space-y-32 items-center justify-center">
                  <div className="flex-none">
                      <h1 className="text-6xl font-bold">DRIES VANSPAUWEN</h1>
                  </div>
                  <div className="flex-none">
                      <HomeNavigationMenu />
                  </div>
              </div>
          </div>
      </main>
  );
}
