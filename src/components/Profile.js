import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-start mt-16 relative w-[90%] mx-auto md:w-[50%]">
        <div>
          <img src="/images/profile__img.svg" alt="" id="profile__img" />
        </div>

        <div>
          <img
            className="hidden md:block absolute right-0"
            src="/images/_Avatar share button.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:hidden absolute right-0 -top-5"
            src="/images/Avatar share button.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <p
          id="twitter"
          className="italic font-bold text-lg text-[#101828] text-center pt-6 md:text-xl"
        >
          Osibeluwo Olamide
        </p>
        {/* slack name */}
        <p id="slack" className="hidden">
          Osibeluwo Olamide
        </p>
      </div>
    </div>
  );
};

export default Profile;
