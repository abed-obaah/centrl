import { useLocation } from 'react-router-dom';
import LocateIcon from '../../assets/sample-locate.png';

const SampleTheme = () => {
  const location = useLocation();
  const { backgroundColor } = location.state || {
    backgroundColor: 'bg-[#FFF5EA]',
  };

  return (
    <div className={`min-h-screen py-20 z-[800] ${backgroundColor}`}>
      <div className="container lg:max-w-3xl lg:mx-auto">
        <div className="lg:flex lg:gap-16">
          <div>
            <div className="size-[200px] mb-4 rounded-lg bg-card" />
            <div className="size-[200px] rounded-lg bg-card" />
          </div>

          <div>
            <div>
              <h1 className="text-600 font-600 mb-6">Sample Event</h1>

              <div className="flex gap-6 mb-6">
                <div className="rounded-xl border size-[50px] border-[#000]/15 bg-card p-4">
                  <img src={LocateIcon} alt="Locate" />
                </div>

                <div className="text-100">
                  <p className="font-600">Monday, June 3</p>
                  <p>9:00 AM - Jun 7, 5:00 PM EDT</p>
                  <p>85 E King St Lamar, Arkansas(AR), US</p>
                </div>
              </div>

              <div className="bg-card mb-10 p-6 rounded-xl border border-[#000]/15">
                <h2 className="text-200 font-600 mb-8">Registration</h2>
                <div>
                  <div className="flex gap-4 mb-6">
                    <div className="size-[30px] rounded-full bg-[#000]/15" />
                    <p>Favourakpor2017@gmail.com</p>
                  </div>

                  <button className="w-full rounded-lg bg-primary py-2 text-100 font-500 text-white">
                    Click to Register
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-200 font-600 mb-4">About Event</h2>

                <hr className="text-[#000]/15" />

                <p className="pt-6 leading-7">
                  In partnership with Verifiers, this special weeklong edition
                  of the House will offer 50 founders access to a house tour and
                  time shared NY Tech Week events. - dedicated to supporting New
                  York's next superior startups. Learn how NY startups built
                  their companies. The event is part of Founders - a week of
                  events, panels and activations celebrating the NY startup
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleTheme;
