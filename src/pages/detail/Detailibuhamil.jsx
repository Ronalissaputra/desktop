import React, { useState } from "react";
import { Layout, Heading } from "../../components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { reqGetibuhamilbyid } from "../../features/ibuhamil/reqGetibuhamilbyid";

const Detailibuhamil = () => {
  const { uuid } = useParams();
  const [data, setData] = useState("");

  useQuery({
    queryKey: ["reqGetibuhamilbyid"],
    queryFn: () => reqGetibuhamilbyid(uuid),
    onSuccess: (res) => {
      setData(res);
    },
  });

  return (
    <Layout>
      <Heading>Formulir Ibu Hamil</Heading>
      <p>Name</p>
      <p>Tempat</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <tbody className="border-t-2 border-red-400">
            <tr className="border-b bg-white">
              <td>nama</td>
              <td>{data && data.nama}</td>
              <td>E-mail</td>
              <td>{data.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Detailibuhamil;
