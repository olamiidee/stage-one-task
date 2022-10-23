import React from "react";

const Links = () => {
  return (
    <div className="container w-[95%] mx-auto italic text-sm font-medium text-center text-[#101828] space-y-3 pt-12 md:w-[80%] md:text-lg">
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://www.twitter.com/lami-deh">
          <button>Twitter Link</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://training.zuri.team/">
          <button id="btn__zuri">Zuri Team</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="http://books.zuri.team">
          <button id="books">Zuri Books</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>">
          <button id="book__python">Python Books</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://background.zuri.team">
          <button id="pitch">Background Check for Coders</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://books.zuri.team/design-rules ">
          <button id="book__design">Design Books</button>
        </a>
      </div>
    </div>
  );
};

export default Links;
