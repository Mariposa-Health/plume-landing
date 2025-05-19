import Image from 'next/image';
import Button from '@/components/common/Button';

export default function Essentials() {
  return (
    <section className="bg-[#F0E8F7]">
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto px-[120px] py-[100px]">
        <div className="flex flex-col items-start gap-[60px]">
          <div className="flex w-full gap-[120px]">
            <div className="flex-1 max-w-[480px]">
              <h2 className="text-[#3A0469] font-cooper text-[60px] font-light leading-[72px] mb-6">
                Essentials for your
                <br />
                gender journey
              </h2>
              <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
                Whether you are just beginning your transition or are years into your journey, we're here to connect you with the care and support you deserve.
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
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-[20px]">
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src="/images/essentials/essentials-1.png"
                      alt="Gender-affirming care icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
                    Gender-affirming care from experts in transgender health
                  </p>
                </div>

                <div className="p-6 rounded-[20px]">
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src="/images/essentials/essentials-2.png"
                      alt="Appointments icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
                    Appointments available in days, not months
                  </p>
                </div>

                <div className="p-6 rounded-[20px]">
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src="/images/essentials/essentials-3.png"
                      alt="Phone care icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
                    Affirming care right from your phone
                  </p>
                </div>

                <div className="p-6 rounded-[20px]">
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src="/images/essentials/essentials-4.png"
                      alt="Community icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
                    An online community with support groups, transition resources, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden px-4 py-16 bg-[#F0E8F7]">
        <h2 className="text-[#3A0469] font-cooper text-[36px] font-light leading-[38px] text-center mb-6">
          Essentials for your
          <br />
          gender journey
        </h2>
        <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 text-center mb-8">
          Whether you are just beginning your transition or are years into your journey, we're here to connect you with the care and support you deserve.
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

        <div className="space-y-4">
          <div className="text-center">
            <div className="w-12 h-12 mb-4 mx-auto">
              <Image
                src="/images/essentials/essentials-1.png"
                alt="Gender-affirming care icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
              Gender-affirming care from experts in transgender health
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mb-4 mx-auto text-c">
              <Image
                src="/images/essentials/essentials-2.png"
                alt="Appointments icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
              Appointments available in days, not months
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mb-4 mx-auto">
              <Image
                src="/images/essentials/essentials-3.png"
                alt="Phone care icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
              Affirming care right from your phone
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mb-4 mx-auto">
              <Image
                src="/images/essentials/essentials-4.png"
                alt="Community icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6">
              An online community with support groups, transition resources, and more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}