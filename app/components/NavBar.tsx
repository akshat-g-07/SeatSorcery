import AppLogoName from "./AppLogoName";
import NavSideBar from "./NavSideBar";

export default function NavBar() {
  return (
    <>
      <nav className="w-screen h-24 fixed z-50 top-0 left-0 flex bg-transparent">
        <AppLogoName />
        <NavSideBar />
      </nav>
    </>
  );
}
