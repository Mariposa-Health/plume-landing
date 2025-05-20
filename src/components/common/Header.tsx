import Image from 'next/image';
import Button from './Button';
import Wrapper from './Wrapper';

export default function Header() {
  return (
    <header className="w-full py-3 lg:py-12">
      <Wrapper>
        <div className="flex items-center justify-between">
          <a href="https://getplume.co/" className="w-[106px] lg:w-[153px] h-[36px] lg:h-[52px]">
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
      </Wrapper>
    </header>
  );
}
