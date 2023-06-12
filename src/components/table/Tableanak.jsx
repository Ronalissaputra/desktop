import React from "react";
import ReactPaginate from "react-paginate";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { reqDeleteanak } from "../../features/anak/reqDeleteanak";
import { useToast } from "@chakra-ui/react";

const Tableanak = ({
  onSearch,
  query,
  onChange,
  data,
  row,
  page,
  pages,
  changePage,
  refetch,
}) => {
  const toast = useToast();
  const { mutate } = useMutation({
    mutationKey: "reqDeleteanak",
    mutationFn: reqDeleteanak,
    onSuccess: () => {
      refetch();
      toast({
        title: "Success",
        description: "Delete success",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Delete failed",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    const req = confirm("apakah anda yakin.?");
    if (req) {
      await mutate(id);
    }
  };

  return (
    <>
      <div className="mb-2 flex">
        <div className="relative w-full">
          <form onSubmit={onSearch}>
            <input
              type="text"
              value={query}
              onChange={onChange}
              id="search-dropdown"
              className="z-20 block w-full rounded-l-lg rounded-r-lg  border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="cari..."
            />
            <button
              type="submit"
              className="absolute right-0 top-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="border-2 bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Kelamin
              </th>
              <th scope="col" className="px-6 py-3">
                Nama ibu
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="border-2">
            {data &&
              data.map((item) => (
                <tr key={item.id} className="border-b bg-white">
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.jenis_kelamin}</td>
                  <td className="px-6 py-4">{item.Ibuhamil.nama}</td>
                  <td className="flex items-center gap-3 py-4">
                    <Link to={`/detail/ibuhamil/${item.uuid}`}>
                      <BiDetail className="text-2xl text-blue-500" />
                    </Link>
                    <Link to={`/edit/ibuhamil/${item.uuid}`}>
                      <BiEdit className="text-2xl text-green-500" />
                    </Link>
                    <Link onClick={() => handleDelete(item.id)}>
                      <RiDeleteBinLine className="text-2xl text-red-500" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="h-16 items-center md:flex md:justify-between">
          <p className="text-slate-500">
            Total Rows: {row} Page: {row ? page + 1 : 0} of {pages}
          </p>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pages}
            onPageChange={changePage}
            containerClassName="flex md:justify-center py-2"
            pageLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
            activeLinkClassName="bg-blue-700 text-white py-2 px-4 mx-1 rounded"
            previousLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
            nextLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Tableanak;
