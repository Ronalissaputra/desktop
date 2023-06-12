import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Tambah from "./Tambah";
import { Heading, Tableanak } from "../../components";
import { reqGetanak } from "../../features/anak/reqGetanak";
import { Link } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";

const Tambahanak = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const { refetch } = useQuery({
    queryKey: ["reqGetanak", keyword, page, limit],
    queryFn: () => reqGetanak(keyword, page, limit),
    onSuccess: (data) => {
      setPages(data.totalPage);
      setPage(data.page);
      setRow(data.totalRows);
      setLimit(data.limit);
      setData(data.response);
    },
  });
  console.log(data);

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
        <Heading>Tabel anak</Heading>
        <Link
          to="/tambah/anak/form"
          className="my-auto flex items-center gap-2 rounded-md bg-indigo-500 p-2 text-lg font-light text-slate-50"
        >
          <MdOutlineAdd />
          Tambah anak
        </Link>
      </div>
      <Tableanak
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

export default Tambahanak;