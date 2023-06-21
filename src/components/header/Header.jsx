import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { reqToken } from "../../features/refreshtoken/reqToken";
import { reqLogout } from "../../features/authentication/reqLogout";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icons/Buminglogo.png";
import { TbEdit } from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [navbar, setNavbar] = useState(false);
  const [nama, setNama] = useState("");
  const [idn, setIdn] = useState("");
  const [userrole, setUserrole] = useState("");

  const links = [
    {
      id: 1,
      name: "Dashboard",
      to: "/dashboard",
    },
    {
      id: 2,
      name: "Pemantauan",
      to: "/pemantauan",
    },
    {
      id: 3,
      name: "Tambah",
      to: "/tambah",
    },
  ];

  useQuery({
    queryKey: ["reqToken"],
    queryFn: reqToken,
    onSuccess: (res) => {
      setNama(res.decoded.email);
      setIdn(res.decoded.userId);
      setUserrole(res.decoded.userrole);
    },
    onError: () => {
      navigate("/");
      toast({
        title: "Error",
        description: "session anda telah berakhir, silahkan login kembali",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["reqLogout"],
    mutationFn: reqLogout,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <div className="flex items-center">
              <img src={icon} alt="icon" className="h-12" />
              <p className="text-2xl">Buming</p>
            </div>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map((link) => (
                <li key={link.id} className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    to={link.to}
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="text-gray-600 hover:text-blue-600 md:hidden">
                <p onClick={onOpen}>Profile</p>
              </li>
              <div
                onClick={onOpen}
                className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-indigo-400 md:flex"
              >
                <p className="text-xl font-light text-slate-100">
                  {nama && nama[0].toUpperCase()}
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex items-center">
              <DrawerCloseButton />
              <DrawerHeader>
                <p className="font-light">Hi {nama}</p>
              </DrawerHeader>
            </div>
            <DrawerBody>
              {userrole && userrole === "superadmin" ? null : (
                <NavLink
                  to={`/Formprofile/${idn}`}
                  className="flex cursor-pointer items-center gap-4 rounded-md p-2 hover:bg-slate-300"
                >
                  <TbEdit className="text-2xl" />
                  <p className="text-xl font-light">Edit biodata</p>
                </NavLink>
              )}
            </DrawerBody>
            <DrawerFooter>
              <div
                onClick={() => mutate()}
                className="flex w-full cursor-pointer items-center gap-4 rounded-md px-2 py-2 hover:bg-slate-300"
              >
                <GiExitDoor className="text-2xl" />
                <p className="text-xl">Logout</p>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </nav>
  );
};

export default Header;
