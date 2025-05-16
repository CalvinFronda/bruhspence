
import LandingPage from "@/components/landing-page";
import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
export default async function Home() {
  return (
    <>
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              Bruhspence
            </div>
            <HeaderAuth />
          </div>
        </nav>
      </div>
      <main className="flex-1 flex flex-col gap-6 px-4">Hello world</main>
    </>
  );
}
