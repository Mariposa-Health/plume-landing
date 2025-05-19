import Image from 'next/image';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hidden lg:flex w-full max-w-[1440px] mx-auto relative">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Hero background"
            width={1440}
            height={720}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 flex items-center w-full">
          <div className="ml-[120px] mt-[107px] mb-[309px] max-w-[399px]">
            <h1 className="text-[#3A0469] font-cooper text-[60px] font-light leading-[72px] mb-6">
            Level Up Your
              <br />
              Gender Transition
            </h1>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
            Join thousands of trans folks getting gender-affirming care created by trans people, for trans people.
            </p>
            <Button 
              variant="hero" 
              href="https://getplume.co/get-started"
              className="w-[378px] h-[48px] px-5 py-[10px]"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col">
        <div className="w-full h-[400px] relative">
          <Image
            src="/hero-image.jpg"
            alt="Hero background"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <div className="px-4 py-8 text-center">
          <h1 className="text-[#3A0469] font-cooper text-[36px] font-light leading-[38px] mb-6">
          $32 per month plus copay with insurance, 
          </h1>
          <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
          or $99 per month if self-paid
          </p>
          <Button 
            variant="hero" 
            href="https://getplume.co/get-started"
            className="w-[312px] h-[48px] px-5 py-[10px] mx-auto"
          >
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}