import Image from "next/image";
import logo from "/public/logo.svg";
import facebook from '/public/social/facebook.svg'
import instagram from '/public/social/instagram.svg'
import x from '/public/social/x.svg'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center gap-12 h-80 bg-black text-white">
      <div className="flex justify-center gap-56 px-20">
        <div className="flex flex-col gap-3 w-1/4">
          <div className="flex gap-1">
            <Image className="" src={logo} alt="beb" width={20} height={20} />
            <h1 className="text-md">CHARITY</h1>
          </div>
          <div>
            <p>
              Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
              sit egestas enim consectetur donec faucibus. Ornare ac dolor
              porta tellus viverra arcu a ridiculus.
            </p>
          </div>
          <div>
            <p>Phone: <span className="text-gray-400">+380665334163</span></p>
            <p>Address: <span className="text-gray-400">Mukachevo, Luchki, Golovna 135</span></p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg">About us</h1>
          <div>
            <p>About Us</p>
            <p>Causes</p>
            <p>Volunteers</p>
            <p>Partners</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg">Useful links</h1>
          <div>
            <p>F.A.Q</p>
            <p>News</p>
            <p>Reports</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-56">
        <div className="flex gap-2 ml-16">
            <Image src={facebook} alt="facebook" width={30} height={30}/>
            <Image src={instagram} alt="instagram" width={30} height={30}/>
            <Image src={x} alt="x" width={30} height={30}/>
        </div>
        <div className="text-gray-400">
            © Copyright Charity {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
