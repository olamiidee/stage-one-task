import React from "react";

const Links = () => {
  return (
    <div className="container w-[95%] mx-auto italic text-sm font-medium text-center text-[#101828] space-y-[24px] pt-8 pb-8 md:pb-0 md:w-[80%] md:pt-14 md:text-lg">
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a href="https://www.twitter.com/lami-deh">
          <button>Twitter Link</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a id="btn__zuri" href="https://training.zuri.team/">
          <button>Zuri Team</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a id="books" href="http://books.zuri.team">
          <button>Zuri Books</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
        >
          <button>Python Books</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a id="pitch" href="https://background.zuri.team">
          <button>Background Check for Coders</button>
        </a>
      </div>
      <div className="bg-[#EAECF0] border border-[#EAECF0] rounded-lg px-8 py-6">
        <a id="book__design" href="https://books.zuri.team/design-rules ">
          <button>Design Books</button>
        </a>
      </div>
    </div>
  );
};

export default Links;
