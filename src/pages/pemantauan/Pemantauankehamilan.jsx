import React, { useState } from "react";
import Pemantauan from "./Pemantauan";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Heading, Tablepemantauankehamilan } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { reqGetpemantauankehamilan } from "../../features/pemantauankehamilan/reqGetpemantauankehamilan";

const Pemantauankehamilan = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const { refetch } = useQuery({
    queryKey: ["reqGetpemantauankehamilan", keyword, page, limit],
    queryFn: () => reqGetpemantauankehamilan(keyword, page, limit),
    onSuccess: (res) => {
      setPages(res.totalPage);
      setPage(res.page);
      setRow(res.totalRows);
      setLimit(res.limit);
      setData(res.response);
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
        <Heading>Tabel Pemantauan Kehamilan</Heading>
        <Link
          to="/pemantauan/kehamilan/formpemantauankehamilan"
          className="flex items-center gap-2 rounded-md bg-blue-500 px-2 text-lg text-slate-50"
        >
          <MdOutlineAdd />
          Tambah
        </Link>
      </div>
      <Tablepemantauankehamilan
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

export default Pemantauankehamilan;
