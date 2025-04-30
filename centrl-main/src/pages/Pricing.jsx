import { pricingPlans } from "../libs/constants";
import PatternOne from "../assets/pricing-pattern-right.svg";
import PatternTwo from "../assets/pricing-pattern-left.svg";
import PatternThree from "../assets/pricing-pattern-bottom.svg";
import FAQ from "../components/FAQ";

const Pricing = () => {
  return (
    <div className="relative py-36">
      <div className="container 2xl:max-w-[1200px]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-400 font-700 md:text-700">Pricing</h1>
          <p>Tested and trusted to lead the event space</p>
        </div>

        {/* Pricing Plans */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-xl bg-white p-6 shadow-md"
            >
              <div>
                <h2 className="mb-10 text-200 font-700 capitalize">
                  {plan.name}
                </h2>

                <div className="flex items-center gap-3">
                  <p
                    className={`font-700 ${
                      plan.id === 3 ? "text-600" : "text-700"
                    }`}
                  >
                    {plan.id === 3 ? "" : "$"}
                    {plan.price}
                  </p>
                  {plan.tag && (
                    <p
                      className={`md:text-50 ${
                        plan.id === 1
                          ? "rounded-lg bg-[#292929] px-4 py-1 text-[#fff]"
                          : "rounded-lg bg-[#E7D1FF] px-4 py-1"
                      }`}
                    >
                      {plan.tag}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-16 h-full space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#000] before:content-['']"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                className={`mt-16 inline-block w-full rounded-lg px-4 py-2 text-center font-600 ${
                  plan.id === 1
                    ? "bg-[#292929] text-[#fff]"
                    : plan.id === 2
                      ? "bg-gradient-to-r from-[#BCD4FF] via-[#DFCCFF] to-[#DBAFF9]"
                      : "bg-gradient-to-r from-[#C379EA] via-[#DA63B1] to-[#F4667D] text-[#fff]"
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
          className="absolute bottom-[32rem] right-0 hidden w-[80px] lg:block"
          src={PatternOne}
          alt="Pattern one"
        />

        {/* Patter Two */}
        <img
          className="absolute left-[-.5rem] top-[13rem] hidden w-[100px] lg:block"
          src={PatternTwo}
          alt="Pattern two"
        />

        {/* Patter Three */}
        <img
          className="absolute bottom-[-10rem] left-[-.5rem] -z-30 hidden w-[140px] lg:block"
          src={PatternThree}
          alt="Pattern three"
        />
      </div>
    </div>
  );
};

export default Pricing;
