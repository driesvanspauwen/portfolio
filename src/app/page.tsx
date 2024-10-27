import Image from "next/image";
import NavBar from "@/components/navbar/NavigationMenu";

export default function Home() {
  return (
      <main>
          <div className="h-screen flex flex-col space-y-32 items-center justify-center">
              <div className="flex-none">
                  <h1 className="text-6xl font-bold">DRIES VANSPAUWEN</h1>
              </div>
              <div className="flex-none">
                  <NavBar/>
              </div>
          </div>
      </main>
  );
}
