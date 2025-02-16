import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../assets/icons/icon.png";

export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="relative mr-2">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
                <Image
                  src={LogoImage}
                  alt="Shawty Logo"
                  className="relative mt-1 h-12 w-12"
                />
              </div>
              <span className="text-white text-xl font-bold">Shawty</span>
            </Link>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <Link
                href="/features"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Pricing
              </Link>

              <Link
                href="/support"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Support
              </Link>
              <Link
                href="/Creation"
                className="bg-gradient-to-r from-[#F7AABE] via-[#B57CEC] to-[#E472D1] py-2 px-4 rounded-lg text-black font-semibold"
              >
                Start Creating
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
