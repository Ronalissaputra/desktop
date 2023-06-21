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
      <Heading>Detail Ibu Hamil</Heading>
      <p className="text-xl text-indigo-600">Nama : {data && data.nama}</p>
    </Layout>
  );
};

export default Detailibuhamil;
