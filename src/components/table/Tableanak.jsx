import React from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { reqDeleteanak } from "../../features/anak/reqDeleteanak";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
      <form onSubmit={onSearch}>
        <InputGroup>
          <InputRightElement>
            <Button colorScheme="gray.100" onClick={onSearch}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.500" />
              </InputLeftElement>
            </Button>
          </InputRightElement>
          <Input
            type="text"
            value={query}
            onChange={onChange}
            placeholder="Cari..."
          />
        </InputGroup>
      </form>
      <TableContainer>
        <Table variant="striped">
          {data && data.length === 0 ? (
            <TableCaption>Tidak ada data</TableCaption>
          ) : (
            <>
              <Thead>
                <Tr>
                  <Th>Nama</Th>
                  <Th>Nama Ibu</Th>
                  <Th>Tanggal Lahir</Th>
                  <Th>Jenis Kelamin</Th>
                  <Th w="auto" isNumeric>
                    Aksi
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((item) => (
                    <Tr>
                      <Td>{item.nama}</Td>
                      <Td>{item.Ibuhamil.nama}</Td>
                      <Td>{item.tanggal_lahir}</Td>
                      <Td>{item.jenis_kelamin}</Td>
                      <Td w="10px" isNumeric>
                        <div className="flex space-x-5">
                          {/* <Link to={`/detail/anak/${item.id}`}>
                            <BiDetail className="text-2xl text-blue-500" />
                          </Link> */}
                          <Link to={`/edit/anak/${item.id}`}>
                            <p className="text-green-600">Edit</p>
                          </Link>
                          <Link onClick={() => handleDelete(item.id)}>
                            <p className="text-red-600">Delete</p>
                          </Link>
                        </div>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </>
          )}
        </Table>
      </TableContainer>
      <div className="h-16 items-center md:flex md:justify-between">
        <p className="text-slate-500">
          Total Baris : {row} Halaman : {row ? page + 1 : 0} Dari {pages}
        </p>
        <ReactPaginate
          previousLabel="Sebelumnya"
          nextLabel="Berikutnya"
          pageCount={pages}
          onPageChange={changePage}
          containerClassName="flex md:justify-center py-2"
          pageLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
          activeLinkClassName="bg-blue-700 text-white py-2 px-4 mx-1 rounded"
          previousLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
          nextLinkClassName="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-1 rounded"
        />
      </div>
    </>
  );
};

export default Tableanak;
