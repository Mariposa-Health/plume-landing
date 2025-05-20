import Image from 'next/image';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export default function HowItWorks() {
  const steps = [
    { number: 1, title: "Choose Your\nMembership" },
    { number: 2, title: "Scheduling and\nintake" },
    { number: 3, title: "Join the Plume\nCommunity Hub" },
    { number: 4, title: "Meet with your\nprovider" },
    { number: 5, title: "Begin your\ntreatment" }
  ];

  return (
    <Section className='!pt-[0px]'>
      <div className="hidden lg:block relative w-full">
        <div className="absolute inset-0 h-[442px]">
          <Image
            src="/how-it-works-bg.jpg"
            alt="How Plume Health works background"
            width={1440}
            height={442}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full pt-64">
          <div className="inline-flex flex-col items-center gap-[97px] px-16 py-[46px] bg-[#FFF8F0] rounded-[18px] max-w-[1200px] w-full mx-8">
            <h2 className="text-[#3A0469] text-center font-cooper text-[48px] font-light leading-[60px]">
              How Plume Health works
            </h2>
            
            <div className="flex items-center justify-between w-full max-w-[900px] relative">
              <div className="absolute top-7 left-0 right-0 h-[2px] bg-[#25827C] z-0"></div>
              
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center z-10">
                  <div className="w-14 h-14 rounded-full bg-[#25827C] flex items-center justify-center mb-4">
                    <span className="text-white font-fibra text-lg font-semibold">
                      {step.number}
                    </span>
                  </div>
                  
                  <p className="text-[#1F292E] text-center font-fibra text-base font-bold leading-6 whitespace-pre-line max-w-[140px]">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
            
            <Button 
              variant="hero" 
              href="https://getplume.co/get-started"
              className="w-[378px] h-[48px] px-5 py-[10px]"
            >
              Start your journey
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="w-full h-[201px] relative">
          <Image
            src="/how-it-works-bg.jpg"
            alt="How Plume Health works background"
            width={390}
            height={201}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="px-4 py-8 bg-[#FFF8F0] -mt-4 rounded-t-[18px]">
          <h2 className="text-[#3A0469] text-center font-cooper text-[36px] font-light leading-[48px] mb-8">
            How Plume Health works
          </h2>
          
          <div className="space-y-6 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-[38px] h-[38px] rounded-full bg-[#25827C] flex items-center justify-center mb-3">
                  <span className="text-white font-fibra text-sm font-semibold">
                    {step.number}
                  </span>
                </div>
                
                <p className="text-[#1F292E] text-center font-fibra text-base font-bold leading-6 whitespace-pre-line">
                  {step.title}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-8 bg-[#25827C] mt-6"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              href="https://getplume.co/get-started"
              className="w-[330px] h-[48px] px-5 py-[10px]"
            >
              Start your journey
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
