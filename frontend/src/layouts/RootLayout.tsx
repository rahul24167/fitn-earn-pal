import { NavLink, Outlet } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context";
function RootLayout() {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const handleLogout = async () => {
    await localStorage.removeItem("token");

    setIsAuthenticated(false);
  };
  return (
    <>
      <header className=" sticky top-0 px-4 py-3 lg:px-6 h-20 flex flex-row items-center justify-between bg-nav-back backdrop-blur-[100px] shadow-md w-full">
        <div className="flex flex-row justify-between items-center gap-3 w-[275px]">
          <img src="/Logo.png" alt="" className="h-12 w-12"/>
          <img src="/FitnEarnPal.png" alt="" className="h-8" />
        </div>
        <div className=" flex flex-row h-[22px] gap-6 text-[#E5E5E5] w-[275px] justify-between items-center">
          <span>Home</span>
          <span>Features</span>
          <span>How it works</span> 
        </div>
        <div className=" flex flex-row justify-center items-center w-[275px]">
          {/* Authentication signin /sign up and logout */}
          {isAuthenticated ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <NavLink
                className="text-sm text-[#E5E5E5] font-medium hover:underline underline-offset-4"
                to="signup"
              >
                SignUp Form
              </NavLink>
            </>
          )}
         
        </div>
      </header>
      <Outlet/>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Bal. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <NavLink
            className="text-xs hover:underline underline-offset-4"
            to="terms"
          >
            Terms of Service
          </NavLink>
          <NavLink
            className="text-xs hover:underline underline-offset-4"
            to="privacy"
          >
            Privacy
          </NavLink>
        </nav>
      </footer>
    </>
  );
}

export default RootLayout;