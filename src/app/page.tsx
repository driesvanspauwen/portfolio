import Image from "next/image";

export default function Home() {
  return (
      <main>
          <div className="h-screen flex items-center justify-center">
              <Image
                  alt="Mountains"
                  src={"/mesh-gradient.png"}
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                      objectFit: "cover",
                      zIndex: "-10",
                  }}
              />
              <div className="">
                  <h1 className="text-6xl font-bold text-white">DRIES VANSPAUWEN</h1>
              </div>
          </div>
      </main>
  );
}
