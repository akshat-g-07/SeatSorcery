import AppLogoName from "./NavBarComps/AppLogoName";
import NavSideBar from "./NavBarComps/NavSideBar";

export default function NavBar() {
  return (
    <>
      <nav className="w-screen h-24 sticky z-50 top-0 left-0 flex bg-[#F0F8FF]">
        <AppLogoName />
        <NavSideBar />
      </nav>
    </>
  );
}
