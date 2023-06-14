import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import { BsArrowLeftShort } from "react-icons/bs";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { reqRegister } from "../../features/authentication/reqRegister";
import { useNavigate } from "react-router-dom";
import { Spinner, useToast } from "@chakra-ui/react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Registeres = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
  const { mutate, isLoading } = useMutation({
    mutationKey: "reqRegister",
    mutationFn: reqRegister,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Register success",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      navigate("/");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `${error.response.data.message}`,
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
      password: "",
      confPassword: "",
      role: "admin",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-2 sm:py-12">
      <div className="xs:p-0 mx-10 w-full md:w-full md:max-w-md">
        <div className="flex items-center justify-center">
          <div className="mb-5 flex-row text-center text-2xl font-bold">
            <p className="text-2xl">Buming</p>
          </div>
        </div>
        <div className="w-auto divide-y divide-gray-200 rounded-lg bg-white shadow">
          <form onSubmit={formik.handleSubmit}>
            <div className="px-5 py-7">
              <Input
                label="Username"
                name="nama"
                value={formik.values.nama}
                onChange={formik.handleChange}
                type="text"
                required
                placeholder="username"
              />
              <Input
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="text"
                required
                placeholder="example@gmail.com"
              />
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={eye1 ? "text" : "password"}
                  placeholder="password"
                  required
                />
                {eye1 ? (
                  <BsFillEyeFill
                    onClick={() => setEye1(!eye1)}
                    className="absolute right-3 top-[50px] cursor-pointer"
                  />
                ) : (
                  <BsFillEyeSlashFill
                    onClick={() => setEye1(!eye1)}
                    className="absolute right-3 top-[50px] cursor-pointer"
                  />
                )}
              </div>
              <div className="relative">
                <Input
                  label="confirmasi password"
                  name="confPassword"
                  value={formik.values.confPassword}
                  onChange={formik.handleChange}
                  type={eye2 ? "text" : "password"}
                  placeholder="confirmasi password"
                  required
                />
                {eye2 ? (
                  <BsFillEyeFill
                    onClick={() => setEye2(!eye2)}
                    className="absolute right-3 top-[50px] cursor-pointer"
                  />
                ) : (
                  <BsFillEyeSlashFill
                    onClick={() => setEye2(!eye2)}
                    className="absolute right-3 top-[50px] cursor-pointer"
                  />
                )}
              </div>
              <button
                type="submit"
                className="mt-4 inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="mr-2 inline-block">
                  {isLoading ? <Spinner /> : "Register"}
                </span>
              </button>
            </div>
          </form>
        </div>
        <div>
          <Link
            to="/registeres"
            className="right-0 flex cursor-pointer rounded-lg py-4 font-normal text-slate-500"
          >
            <BsArrowLeftShort className="text-2xl" />
            <p className="ml-1">go to register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registeres;
