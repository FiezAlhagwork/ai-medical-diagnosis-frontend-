const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 overflow-y-auto scroll-smooth
">
        <img src="/logo.png" alt="" className="w-15 h-15 max-md:mx-auto mx-auto" />
        {children}
      </div>
        {/* bg-url */}
      <div className="hidden md:flex  w-[40vw] h-screen items-center justify-center bg-[#048CFF] bg-cover bg-no-repeat bg-center overflow-hidden  ">
        <img src="/authModal.png" className="w-full object-cover lg:flex hidden " />
      </div>
    </div>
  );
};

export default AuthLayout;
