import User from "../User";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="flex justify-between px-6 py-2 bg-black">
        <h1 className="text-white text-2xl md:text-3xl font-bold border-b-2 border-white">
          do<span className="text-doit-green-text">.</span>it
        </h1>
        <User />
      </header>
      <div className="mt-[1px] bg-black w-full h-[2px]"></div>
    </>
  );
};

export default Header;
