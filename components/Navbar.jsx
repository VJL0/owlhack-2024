import Link from "next/link";

const routes = [
  { route: "/", name: "ChatWithBob" },
  { route: "/about", name: "About" },
  { route: "/chat", name: "Chat" },
  { route: "/credits", name: "Credits" },
];

const Navbar = () => {
  return (
    <nav className="max-h-20 px-10 py-6 w-full bg-white">
      <ul className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-10">
        <li>
          <Link className="text-3xl" href={routes[0].route}>
            <h1>{routes[0].name}</h1>
          </Link>
        </li>

        <div className="flex space-x-6">
          {routes.slice(1).map((item, index) => (
            <li key={index}>
              <Link href={item.route}>
                <h1>{item.name}</h1>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
