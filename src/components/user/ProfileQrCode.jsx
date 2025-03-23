import EvenImg from '../../assets/Even.png';
import BlueTick from '../../assets/blue-tick.png';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import UserAddImg from '../../assets/user-add.png';
import Telegram from '../../assets/telegram.png';
import ViewList from '../../assets/view-list.png';
import GroupImg from '../../assets/group.png';
import TicketImg from '../../assets/ticket-use.png';
import Message from '../../assets/message.png';
import Centrl from '../../assets/dsds-1.png';

const ProfileQRCode = ({
  joinedDate = 'Joined 2023',
  followers = '803,024',
  profileShares = 429,
  competitions = 26,
  eventsBooked = 45,
  collaborators = 30,
  profileUrl = 'your.profile/evenintheday',
  email = 'email@evenintheday',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="cursor-pointer flex items-center gap-6 bg-white rounded-md px-6 py-2"
        onClick={openModal}
        title="Show QR Code"
      >
        <QRCode value={window.location.href} size={80} className="rounded-md" />
        <p className="font-600">Profile Info</p>
      </div>

      {isOpen && (
        <div className="fixed z-[600]  inset-0  flex items-center justify-center p-4">
          <div
            className="fixed inset-0 backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50"
            onClick={closeModal}
          />
          <div className="w-full rounded-xl p-2 max-w-lg relative overflow-hidden  bg-gradient-to-r from-[#F4667D] via-[#DA63B1] to-[#C379EA]">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4">
                <img className="size-16" src={EvenImg} alt="Even in the day" />

                <div className="flex gap-2">
                  <div>
                    <h2 className="text-200 font-700">Even In the Day</h2>
                    <p className="text-50">{joinedDate}</p>
                  </div>
                  <img className="size-5" src={BlueTick} alt="Blue tick" />
                </div>
              </div>

              <hr className="text-[#000]/15 mt-6 border-[1.2px]" />

              <div className="flex py-4  justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <img className="size-6" src={UserAddImg} alt="User add" />
                      <p className="text-foreground font-500">
                        <span className="font-700 text-black">{followers}</span>{' '}
                        followers
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <img className="size-6" src={Telegram} alt="telegram" />

                      <p className="text-foreground font-500">
                        <span className="font-700 text-black">
                          {profileShares}
                        </span>{' '}
                        Profile Shares
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <img className="size-6" src={ViewList} alt="view list" />

                      <p className="text-foreground font-500">
                        <span className="font-700 text-black">
                          {competitions}
                        </span>{' '}
                        Competitions{' '}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <img className="size-6" src={TicketImg} alt="ticket" />
                      <p className="text-foreground font-500">
                        <span className="font-700 text-black">
                          {eventsBooked}
                        </span>{' '}
                        Events Booked{' '}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <img className="size-6" src={GroupImg} alt="group img" />

                      <p className="text-foreground font-500">
                        <span className="font-700 text-black">
                          {collaborators}
                        </span>{' '}
                        Collaborators{' '}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <QRCode
                    value={window.location.href}
                    size={180}
                    className="rounded-md"
                  />
                </div>
              </div>

              <hr className="text-[#000]/15  border-[1.2px]" />

              <div className="mt-4">
                <div className="mb-4 flex items-center gap-4">
                  <img src={Centrl} alt="Centrl" className="size-6" />
                  <div>
                    <h3 className="text-50 font-600">Profile</h3>
                    <a href="#" className="text-[#5192CE]">
                      {profileUrl}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src={Message} alt="message" className="size-7" />
                  <div>
                    <h3 className="text-50 font-600">Email</h3>
                    <a href="#" className="text-[#5192CE]">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileQRCode;
