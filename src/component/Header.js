import { LOGO_IMG, AVATAR_LOGO } from "../utils/constants";

const Header = () => {
  const logo = <img src={LOGO_IMG} alt="logo" />;
  const Avatar = <img className="w-10 h-10" src={AVATAR_LOGO} alt="avatar" />;
  const Nav = () => {
    return (
      <div className="">
        <ul className="flex justify-between m-9">
          <li className="px-1">About Us</li>
          <li className="px-1">Contact Us</li>
          <li className="px-1">Contact Us</li>
          <li className="px-1">Cart</li>
          <li className="px-1">Instamart</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="flex shadow-lg border border-green-500 bg-gray-50 sticky top-0">
      <div className="ml-20 mt-4 w-24 h-24">{logo}</div>
      <div className="flex mx-5 py-5 px-5">
        <input
          type="text"
          placeholder="search for restaurants and food"
          name="search"
          className="w-96 border border-gray-500 bg-gray-50 rounded-l-full px-2 py-3"
        />
        <button className="border border-gray-500 rounded-r-full px-1 py-3 w-10">
          🔍
        </button>
      </div>
      <div className="">
        <Nav />
      </div>
      <div className="mt-6">{Avatar}</div>
    </div>
  );
};

export default Header;
