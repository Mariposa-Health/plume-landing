import Image from 'next/image';
import Button from '@/components/common/Button';

export default function AboutUs() {
  return (
    <section className="bg-[#F0E8F7] pb-16 lg:py-16">
      <div className="hidden lg:block">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center gap-[72px]">
          <div className="flex-1">
            <h2 className="text-[#3A0469] font-cooper text-[60px] font-light leading-[72px] mb-6">
              About Us
            </h2>
            <h3 className="text-[#3A0469] font-fibra text-[20px] font-bold leading-[30px] mb-6">
              Our vision is to transform care for every trans life.
            </h3>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
              Plume Health is a virtual gender-affirming care clinic and a trusted source of community, 
              wellness resources, and support for the trans and gender non-conforming community.
            </p>
            <Button 
              variant="hero" 
              href="https://getplume.co/get-started"
              className="w-[378px] h-[48px] px-5 py-[10px]"
            >
              Get started
            </Button>
          </div>
          
          <div className="w-[616px] h-[413px] rounded-[18px] overflow-hidden">
            <Image
              src="/about-us-image.png"
              alt="About Plume Health"
              width={616}
              height={413}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {/* Full width image without borders */}
        <div className="w-full h-[240px] overflow-hidden">
          <Image
            src="/about-us-image.png"
            alt="About Plume Health"
            width={400}
            height={240}
            className="w-full h-full object-fill"
          />
        </div>
        
        {/* Content with padding */}
        <div className="px-4 py-8">
          <h2 className="text-[#3A0469] text-center font-cooper text-[60px] font-light leading-[72px] mb-6">
            About Us
          </h2>
          <h3 className="text-[#3A0469] text-center font-fibra text-[20px] font-bold leading-[30px] mb-6">
            Our vision is to transform care for every trans life.
          </h3>
          <p className="text-[#1F292E] text-center font-fibra text-base font-normal leading-6 mb-8">
            Plume Health is a virtual gender-affirming care clinic and a trusted source of community, 
            wellness resources, and support for the trans and gender non-conforming community.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              href="https://getplume.co/get-started"
              className="w-[312px] h-[48px] px-5 py-[10px]"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}