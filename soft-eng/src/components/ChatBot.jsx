const ChatBot = () => {
    return (
      <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-end justify-start pt-[381px] px-[39px] pb-[41px] box-border gap-[15px_0px] text-left text-[16px] text-white font-inter">
        <div className="w-[390px] rounded-mini bg-white overflow-hidden flex flex-col items-start justify-start gap-[425px_0px]">
          <div className="self-stretch rounded-t-mini rounded-b-none bg-darkblue overflow-hidden flex flex-row items-start justify-start pt-[17px] px-2 pb-3 gap-[0px_5px]">
            <img
              className="h-[30px] w-14 relative object-cover"
              loading="eager"
              alt=""
              src="/se-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start">
              <b className="relative">3MV CONSTRUCTION</b>
              <div className="relative text-[13px]">Chatbot support</div>
            </div>
          </div>
          <div className="self-stretch h-[46px] relative rounded-t-none rounded-b-mini bg-white box-border border-[1px] border-solid border-silver">
            <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-mini bg-white box-border w-[390px] h-[46px] hidden border-t-[1px] border-solid border-silver" />
            <img
              className="absolute top-[4px] right-[0px] w-[35px] h-[37px] object-cover z-[1]"
              alt=""
              src="/sendbutton-1@2x.png"
            />
          </div>
        </div>
        <img
          className="w-[57px] h-[52px] relative object-cover"
          loading="eager"
          alt=""
          src="/chatbot-1@2x.png"
        />
      </div>
    );
  };
  
  export default ChatBot;