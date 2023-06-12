import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { reqToken } from "../../features/refreshtoken/reqToken";
import { reqLogout } from "../../features/authentication/reqLogout";
import icon from "../../assets/icons/Buminglogo.png";
import { useToast } from "@chakra-ui/react";
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
import { GiExitDoor } from "react-icons/gi";

const Header = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [nama, setNama] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const fixedNav = window.pageYOffset;
      setScrollUp(fixedNav > 110);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useQuery({
    queryKey: ["reqToken"],
    queryFn: reqToken,
    onSuccess: (res) => {
      setNama(res.decoded.email);
    },
    onError: (error) => {
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
    <>
      <nav
        id="navbar"
        className={`sticky top-0 z-50 flex h-20 items-center justify-between bg-white px-2 md:px-28 ${
          scrollUp
            ? "border-b border-slate-500 bg-white/40 backdrop-blur-md"
            : ""
        }`}
      >
        <div className="flex cursor-pointer items-center">
          <img src={icon} alt="bumingicon" className="h-auto w-16" />
          <p className="text-2xl">Buming</p>
        </div>
        <div className="hidden cursor-pointer items-center text-lg md:flex md:justify-between md:gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-blue-600" : ""
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/pemantauan"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-blue-600" : ""
            }
          >
            Pemantauan
          </NavLink>
          <NavLink
            to="/tambah"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-blue-600" : ""
            }
          >
            Tambah
          </NavLink>
          <div
            ref={btnRef}
            colorscheme="teal"
            onClick={onOpen}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500"
          >
            <p className="text-slate-200">{nama && nama[0].toUpperCase()}</p>
          </div>
        </div>
        {open ? (
          <>
            <div
              className={`absolute top-0 min-h-screen w-full cursor-pointer bg-white transition-opacity duration-500 ease-linear md:hidden ${
                open ? "left-0" : "left-[600px]"
              } `}
            >
              <button
                onClick={() => setOpen(!open)}
                className="absolute right-0 m-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-300"
              >
                <AiOutlineCloseCircle className="text-2xl text-slate-700" />
              </button>
              <div className="flex items-center justify-center text-center">
                <div className="mt-20 grid grid-rows-1 gap-10 text-3xl">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/pemantauan"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    Pemantauan
                  </NavLink>
                  <NavLink
                    to="/tambah"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    tambah
                  </NavLink>

                  <p
                    ref={btnRef}
                    colorscheme="teal"
                    onClick={onOpen}
                    className="rounded-lg bg-red-300 p-4 text-slate-200"
                  >
                    {nama && nama[0].toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <HiOutlineMenuAlt4 className="text-3xl" />
          </button>
        </div>
      </nav>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hi {nama}</DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <div
              onClick={() => mutate()}
              className="flex w-full cursor-pointer items-center space-x-2 rounded-md bg-slate-300 px-2 py-2 hover:bg-slate-400"
            >
              <GiExitDoor className="text-2xl" />
              <p className="text-xl">Logout</p>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
