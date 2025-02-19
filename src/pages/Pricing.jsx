import { pricingPlans } from '../libs/constants';
import PatternOne from '../assets/pricing-pattern-right.svg';
import PatternTwo from '../assets/pricing-pattern-left.svg';
import PatternThree from '../assets/pricing-pattern-bottom.svg';
import FAQ from '../components/FAQ';

const Pricing = () => {
  return (
    <div className="relative py-36">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-400 mb-2 font-700 md:text-700">Pricing</h1>
          <p>Tested and trusted to lead the event space</p>
        </div>

        {/* Pricing Plans */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#fff] flex flex-col  shadow-md p-6 rounded-xl"
            >
              <div>
                <h2 className="mb-10 font-700 text-200  capitalize">
                  {plan.name}
                </h2>

                <div className="flex items-center gap-3">
                  <p
                    className={`font-700 ${
                      plan.id === 3 ? 'text-600' : 'text-700'
                    }`}
                  >
                    {plan.id === 3 ? '' : '$'}
                    {plan.price}
                  </p>
                  {plan.tag && (
                    <p
                      className={`md:text-50 ${
                        plan.id === 1
                          ? 'bg-[#292929] text-[#fff] px-4 py-1 rounded-lg'
                          : 'bg-[#E7D1FF] px-4 py-1 rounded-lg'
                      }`}
                    >
                      {plan.tag}
                    </p>
                  )}
                </div>
              </div>

              <ul className="h-full space-y-2 mt-16">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#000] before:rounded-full before:left-0 before:top-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                className={`mt-16 px-4 py-2 rounded-lg  inline-block w-full text-center font-600 ${
                  plan.id === 1
                    ? 'bg-[#292929] text-[#fff]'
                    : plan.id === 2
                    ? 'bg-gradient-to-r from-[#BCD4FF] via-[#DFCCFF] to-[#DBAFF9]  '
                    : 'bg-gradient-to-r from-[#C379EA]  via-[#DA63B1] to-[#F4667D] text-[#fff]'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Faq */}
        <FAQ />

        {/* Patter one */}
        <img
          className="hidden lg:block w-[80px] absolute bottom-[32rem] right-0"
          src={PatternOne}
          alt="Pattern one"
        />

        {/* Patter Two */}
        <img
          className="hidden lg:block w-[100px]  absolute top-[13rem] left-[-2rem]"
          src={PatternTwo}
          alt="Pattern two"
        />

        {/* Patter Three */}
        <img
          className="hidden lg:block w-[140px]  absolute bottom-[-10rem] -z-30 left-[-.5rem]"
          src={PatternThree}
          alt="Pattern three"
        />
      </div>
    </div>
  );
};

export default Pricing;
