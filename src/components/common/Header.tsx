import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <header className="w-full">
      <div className="hidden lg:block w-full max-w-[1440px] h-[169px] mx-auto px-[174px] py-12">
        <div className="flex items-center justify-between">
          <a href="https://getplume.co/" className="w-[153px] h-[52px]">
            <Image
              src="/logo.svg"
              alt="Plume logo"
              width={153}
              height={52}
              className="w-full h-full"
            />
          </a>

          <Button variant="primary" href="https://getplume.co/get-started">
            Get Started
          </Button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <a href="https://getplume.co/" className="w-[106px] h-[36px]">
          <Image
            src="/logo.svg"
            alt="Plume logo"
            width={106}
            height={36}
            className="w-full h-full"
          />
        </a>

        <Button variant="primary" href="https://getplume.co/get-started">
          Get Started
        </Button>
      </div>
    </header>
  );
}