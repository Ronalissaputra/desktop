import React, { useState } from "react";
import Pemantauan from "./Pemantauan";
import { useQuery } from "@tanstack/react-query";
import { Heading, Tablepemantauannifas } from "../../components";
import { Link } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";
import { reqGetpemantauannifas } from "../../features/pemantauannifas/reqGetpemantauannifas";

const Pemantauannifas = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const { refetch } = useQuery({
    queryKey: ["reqGetpemantauannifas", keyword, page, limit],
    queryFn: () => reqGetpemantauannifas(keyword, page, limit),
    onSuccess: (res) => {
      setPages(res.totalPage);
      setPage(res.page);
      setRow(res.totalRows);
      setLimit(res.limit);
      setData(res.response);
      console.log(res);
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
    <Pemantauan>
      <div className="flex items-center justify-between">
        <Heading>Tabel Masa Nifas</Heading>
        <Link
          to="/pemantauan/nifas/formpemantauannifas"
          className="flex items-center gap-2 rounded-md bg-blue-500 px-2 text-lg text-slate-50"
        >
          <MdOutlineAdd />
          Tambah
        </Link>
      </div>
      <Tablepemantauannifas
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
    </Pemantauan>
  );
};

export default Pemantauannifas;
