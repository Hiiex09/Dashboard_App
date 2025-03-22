import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full px-4 shadow">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            Dashboard App
          </div>

          {/* Navbar menu (hidden on mobile) */}
          <div className="hidden flex-none lg:flex items-center gap-6 ml-auto">
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src="/logo.png" alt="Logo" width={100} height={50} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-48 rounded-box bg-base-200 p-2 shadow"
              >
                <li>
                  <a>View Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Reports</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
