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
  const [limit, setLimit] = useState(5);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const { refetch } = useQuery({
    queryKey: ["reqGetibuhamil", keyword, page, limit],
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
        <Heading>Tabel anak</Heading>
        <Link
          to="/pemantauan/kehamilan/formpemantauankehamilan"
          className="my-auto flex items-center gap-2 rounded-md bg-indigo-500 p-2 text-lg font-light text-slate-50"
        >
          <MdOutlineAdd />
          Pemantauan Kehamilan
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
