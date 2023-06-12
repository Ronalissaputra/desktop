import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineAdd } from "react-icons/md";
import { Heading, Tableibuhamil } from "../../components";
import { reqGetibuhamil } from "../../features/ibuhamil/reqGetibuhamil";
import Tambah from "./Tambah";

const Tambahibuhamil = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(0);
  const [limit, setLimit] = useState(5);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const { refetch } = useQuery({
    queryKey: ["reqGetibuhamil", keyword, page, limit],
    queryFn: () => reqGetibuhamil(keyword, page, limit),
    onSuccess: (data) => {
      setPages(data[0].totalPage);
      setPage(data[0].page);
      setRow(data[0].totalRows);
      setLimit(data[0].limit);
      setData(data[0].response);
    },
  });

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };
  return (
    <Tambah>
      <div className="flex items-center justify-between">
        <Heading>Tabel ibu hamil</Heading>
        <Link
          to="/tambah/ibuhamil/form"
          className="my-auto flex items-center gap-2 rounded-md bg-indigo-500 p-2 text-lg font-light text-slate-50"
        >
          <MdOutlineAdd />
          Tambah ibuhamil
        </Link>
      </div>
      <Tableibuhamil
        refetch={refetch}
        onSearch={onSearch}
        query={query}
        onChange={(e) => setQuery(e.target.value)}
        data={data}
        row={row}
        page={page}
        pages={pages}
        changePage={changePage}
      />
    </Tambah>
  );
};

export default Tambahibuhamil;
