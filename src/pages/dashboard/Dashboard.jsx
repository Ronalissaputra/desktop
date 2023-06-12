import { Heading, Layout, Tableibuhamil } from "../../components";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { reqGetibuhamil } from "../../features/ibuhamil/reqGetibuhamil";

const Dashboard = () => {
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
      setPages(data.totalPage);
      setPage(data.page);
      setRow(data.totalRows);
      setLimit(data.limit);
      setData(data.response);
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
    <Layout>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border-l-4 border-red-500 bg-slate-50 px-3 drop-shadow-md">
          <div className="text-2xl">
            <p>Ibu hamil</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
            <AiFillHeart className="text-3xl text-slate-200" />
          </div>
        </div>
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border-l-4 border-red-500 bg-slate-50 px-3 drop-shadow-md">
          <div className="text-2xl">
            <p>Anak</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
            <AiFillHeart className="text-3xl text-slate-200" />
          </div>
        </div>
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border-l-4 border-red-500 bg-slate-50 px-3 drop-shadow-md">
          <div className="text-2xl">
            <p>Ibu nifas</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
            <AiFillHeart className="text-3xl text-slate-200" />
          </div>
        </div>
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border-l-4 border-red-500 bg-slate-50 px-3 drop-shadow-md">
          <div className="text-2xl">
            <p>Beresiko</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
            <AiFillHeart className="text-3xl text-slate-200" />
          </div>
        </div>
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded-md border-l-4 border-red-500 bg-slate-50 px-3 drop-shadow-md">
          <div className="text-2xl">
            <p>Admin</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500">
            <AiFillHeart className="text-3xl text-slate-200" />
          </div>
        </div>
      </div>
      <Heading>Daftar Ibu hamil</Heading>
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
    </Layout>
  );
};

export default Dashboard;
