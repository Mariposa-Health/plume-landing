import Image from 'next/image';
import Button from '@/components/common/Button';

export default function Essentials() {
  return (
    <section className="bg-white">
      <div className="hidden lg:flex w-full max-w-[1440px] mx-auto px-[120px] py-[100px] justify-center items-center gap-[80px]">
        <div className="flex-1 max-w-[480px]">
          <h2 className="text-[#3A0469] font-cooper text-[60px] font-light leading-[72px] mb-6">
            Essentials for your
            <br />
            gender journey
          </h2>
          <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
            Whether you are just starting your transition or are years in, we're here to get you the care you need.
          </p>
          <Button 
            variant="hero" 
            href="https://getplume.co/get-started"
            className="w-[378px] h-[48px] px-5 py-[10px]"
          >
            Get started
          </Button>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-8">
            <div>
              <div className="w-[300px] h-[290px] rounded-[20px] overflow-hidden mb-4">
                <Image
                  src="/essentials-1.jpg"
                  alt="Gender-affirming care expert"
                  width={300}
                  height={290}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#111] font-fibra text-base font-normal leading-6">
                Gender-affirming care
                <br />
                from experts in transgender health
              </p>
            </div>

            <div>
              <div className="w-[300px] h-[290px] rounded-[20px] overflow-hidden mb-4">
                <Image
                  src="/essentials-2.jpg"
                  alt="Quick appointments"
                  width={300}
                  height={290}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#111] font-fibra text-base font-normal leading-6">
                Appointments are available in days,
                <br />
                not months
              </p>
            </div>

            <div>
              <div className="w-[300px] h-[290px] rounded-[20px] overflow-hidden mb-4">
                <Image
                  src="/essentials-3.jpg"
                  alt="Phone consultations"
                  width={300}
                  height={290}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#111] font-fibra text-base font-normal leading-6">
                Affirming care right from your phone
              </p>
            </div>

            <div>
              <div className="w-[300px] h-[290px] rounded-[20px] overflow-hidden mb-4">
                <Image
                  src="/essentials-4.jpg"
                  alt="Community support"
                  width={300}
                  height={290}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#111] font-fibra text-base font-normal leading-6">
                Access support, our exclusive
                <br />
                community, and wellness resources
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden px-4 py-16">
        <h2 className="text-[#3A0469] font-cooper text-[36px] font-light leading-[38px] text-center mb-6">
          Essentials you need
          <br />
          for your gender
          <br />
          journey
        </h2>
        <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 text-center mb-8">
          Whether you are just starting your transition or are years in, we're here to get you the care you need.
        </p>
        <div className="flex justify-center mb-8">
          <Button 
            variant="hero" 
            href="https://getplume.co/get-started"
            className="w-[312px] h-[48px] px-5 py-[10px]"
          >
            Get started
          </Button>
        </div>

        {/* Mobile images stack */}
        <div className="space-y-[34px]">
          <div>
            <div className="w-[330px] h-[320px] rounded-[20px] overflow-hidden mx-auto mb-4">
              <Image
                src="/essentials-1.jpg"
                alt="Gender-affirming care expert"
                width={330}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#111] font-fibra text-base font-normal leading-6 text-center">
              Gender-affirming care
              <br />
              from experts in transgender health
            </p>
          </div>

          <div>
            <div className="w-[330px] h-[320px] rounded-[20px] overflow-hidden mx-auto mb-4">
              <Image
                src="/essentials-2.jpg"
                alt="Quick appointments"
                width={330}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#111] font-fibra text-base font-normal leading-6 text-center">
              Appointments are available in days,
              <br />
              not months
            </p>
          </div>

          <div>
            <div className="w-[330px] h-[320px] rounded-[20px] overflow-hidden mx-auto mb-4">
              <Image
                src="/essentials-3.jpg"
                alt="Phone consultations"
                width={330}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#111] font-fibra text-base font-normal leading-6 text-center">
              Affirming care right from your phone
            </p>
          </div>

          <div>
            <div className="w-[330px] h-[320px] rounded-[20px] overflow-hidden mx-auto mb-4">
              <Image
                src="/essentials-4.jpg"
                alt="Community support"
                width={330}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#111] font-fibra text-base font-normal leading-6 text-center">
              Access support, our exclusive
              <br />
              community, and wellness resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}