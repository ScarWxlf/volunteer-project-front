'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "/public/logo.svg";
import facebook from '/public/social/facebook.svg';
import instagram from '/public/social/instagram.svg';
import x from '/public/social/x.svg';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <footer className="bg-black text-white py-10">
      <div className="xl:mx-20 lg:mx-14 md:mx-8 mx-4 px-4">
        <div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-16">
          <div className="flex flex-col gap-3 lg:w-1/4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={20} height={20} />
              <h1 className="text-lg font-semibold">CHARITY</h1>
            </div>
            <p className="text-gray-400 text-sm">
              Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed sit egestas enim consectetur donec faucibus. Ornare ac dolor porta tellus viverra arcu a ridiculus.
            </p>
            <div className="text-sm">
              <p>Phone: <span className="text-gray-400">+380665334163</span></p>
              <p>Address: <span className="text-gray-400">Mukachevo, Luchki, Golovna 135</span></p>
            </div>
          </div>

          <div className="flex flex-row gap-32 lg:w-1/2 max-[400px]:gap-10 lg:justify-around">
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold">About us</h1>
              <ul className="text-sm space-y-1">
                <li>About Us</li>
                <li>Causes</li>
                <li>Volunteers</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold">Useful links</h1>
              <ul className="text-sm space-y-1">
                <li>F.A.Q</li>
                <li>News</li>
                <li>Reports</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <div className="flex gap-4">
            <Image className="h-auto w-8" src={facebook} alt="facebook" width={30} height={30} />
            <Image className="h-auto w-8" src={instagram} alt="instagram" width={30} height={30} />
            <Image className="h-auto w-8" src={x} alt="x" width={30} height={30} />
          </div>
          <p className="text-gray-400 text-sm mt-4 lg:mt-0">
            © Copyright Charity {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
