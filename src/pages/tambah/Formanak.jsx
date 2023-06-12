import React, { useState } from "react";
import { Layout } from "../../components";
import { Input, Heading, Button, Select } from "../../components";
import { useFormik } from "formik";
import { useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { reqGetibuhamilFc } from "../../features/ibuhamil/reqGetibuhamilFc";
import { reqCreateanak } from "../../features/anak/reqCreateanak";

const Formanak = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const formik = useFormik({
    initialValues: {
      nama: "",
      jenis_kelamin: "",
      tanggal_lahir: "",
      anak_ke: "",
      keadaan_umum: "",
      kesadaran: "",
      kondisi_saat_lahir: "",
      tekanan_darah: "",
      suhu: "",
      dja: "",
      hr: "",
      rr: "",
      saturasi_o2: "",
      capilary_refill: "",
      bb: "",
      pb: "",
      lila: "",
      lk: "",
      ld: "",
      apperance: "",
      pulse: "",
      grimace: "",
      activity: "",
      respiration: "",
      kepala: "",
      uub: "",
      mata: "",
      tht: "",
      mulut: "",
      thorax: "",
      abdomen: "",
      tali_pusat: "",
      punggung: "",
      genetalia: "",
      anus: "",
      ekstermitas: "",
      kulit: "",
      moro: "",
      rooting: "",
      sucking: "",
      swallowing: "",
      wallking: "",
      graphs: "",
      babinski: "",
      tonicneck: "",
      miksi: "",
      defekasi: "",
      laboratorium: "",
      usg: "",
      rontgen: "",
      terapi: "",
      perawatan_talipusat: "",
      imd: "",
      vitamin_k1: "",
      imunisasi_hepatitis: "",
      salep: "",
      kie: "",
      ppia: "",
      pemantauan_tumbuh_kembang: "",
      ibuhamilId: "",
    },
    onSubmit: async (values) => {
      await mutate(values);
    },
  });

  useQuery({
    queryKey: ["reqGetibuhamilFc"],
    queryFn: reqGetibuhamilFc,
    onSuccess: (res) => {
      setData(res);
    },
  });

  const { mutate, isLoading: create } = useMutation({
    mutationKey: ["reqCreateanak"],
    mutationFn: reqCreateanak,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Created success",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      navigate("/tambah/anak");
    },
  });

  const options =
    data?.response?.map((item) => ({
      value: item.id,
      label: item.nama,
    })) || [];

  return (
    <Layout>
      <Heading>Tambah Anak</Heading>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-5 rounded-sm border-t-2 border-red-500 pt-2 md:grid-cols-2">
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Input data Anak</p>
            <div>
              <Select
                name="ibuhamilId"
                value={formik.values.ibuhamilId}
                onChange={formik.handleChange}
                label="nama ibu"
                placeholder="nama ibu"
                options={options}
              />
              <Input
                name="nama"
                value={formik.values.nama}
                onChange={formik.handleChange}
                label="nama"
                placeholder="nama"
              />
              <Input
                name="jenis_kelamin"
                value={formik.values.jenis_kelamin}
                onChange={formik.handleChange}
                label="jenis kelamin"
                placeholder="jenis kelamin"
                type="text"
              />
              <Input
                name="tanggal_lahir"
                value={formik.values.tanggal_lahir}
                onChange={formik.handleChange}
                label="tangal lahir"
                placeholder="tanggal lahir"
                type="date"
              />
              <Input
                name="anak_ke"
                value={formik.values.anak_ke}
                onChange={formik.handleChange}
                label="anak ke"
                placeholder="anak ke"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil pemeriksaan umum</p>
            <div>
              <Input
                name="keadaan_umum"
                value={formik.values.keadaan_umum}
                onChange={formik.handleChange}
                label="keadaan umum"
                placeholder="keadaan umum"
                type="text"
              />
              <Input
                name="kesadaran"
                value={formik.values.kesadaran}
                onChange={formik.handleChange}
                label="kesadaran"
                placeholder="kesadaran"
                type="text"
              />
              <Input
                name="kondisi_saat_lahir"
                value={formik.values.kondisi_saat_lahir}
                onChange={formik.handleChange}
                label="kondisi saat lahir"
                placeholder="kondisi saat lahir"
                type="text"
              />
              <Input
                name="tekanan_darah"
                value={formik.values.tekanan_darah}
                onChange={formik.handleChange}
                label="tekanan darah"
                placeholder="tekanan darah"
                type="text"
              />
              <Input
                name="suhu"
                value={formik.values.suhu}
                onChange={formik.handleChange}
                label="suhu"
                placeholder="suhu"
                type="text"
              />
              <Input
                name="dja"
                value={formik.values.dja}
                onChange={formik.handleChange}
                label="dja"
                placeholder="dja"
                type="text"
              />
              <Input
                name="hr"
                value={formik.values.hr}
                onChange={formik.handleChange}
                label="hr"
                placeholder="hr"
                type="text"
              />
              <Input
                name="rr"
                value={formik.values.rr}
                onChange={formik.handleChange}
                label="rr"
                placeholder="rr"
                type="text"
              />
              <Input
                name="saturasi_o2"
                value={formik.values.saturasi_o2}
                onChange={formik.handleChange}
                label="saturasi o2"
                placeholder="saturasi o2"
                type="text"
              />
              <Input
                name="capilary_refill"
                value={formik.values.capilary_refill}
                onChange={formik.handleChange}
                label="capilary refill"
                placeholder="capilary refill"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan Ukuran Antropometri</p>
            <div>
              <Input
                name="bb"
                value={formik.values.bb}
                onChange={formik.handleChange}
                label="bb"
                placeholder="bb"
                type="text"
              />
              <Input
                name="pb"
                value={formik.values.pb}
                onChange={formik.handleChange}
                label="pb"
                placeholder="bb"
                type="text"
              />
              <Input
                name="lila"
                value={formik.values.lila}
                onChange={formik.handleChange}
                label="lila"
                placeholder="bb"
                type="text"
              />
              <Input
                name="lk"
                value={formik.values.lk}
                onChange={formik.handleChange}
                label="lk"
                placeholder="bb"
                type="text"
              />
              <Input
                name="ld"
                value={formik.values.ld}
                onChange={formik.handleChange}
                label="ld"
                placeholder="bb"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan APGAR SCORE </p>
            <div>
              <Input
                name="apperance"
                value={formik.values.apperance}
                onChange={formik.handleChange}
                label="apperance"
                placeholder="apperance"
                type="text"
              />
              <Input
                name="pulse"
                value={formik.values.pulse}
                onChange={formik.handleChange}
                label="pulse"
                placeholder="pulse"
                type="text"
              />
              <Input
                name="grimace"
                value={formik.values.grimace}
                onChange={formik.handleChange}
                label="grimace"
                placeholder="grimace"
                type="text"
              />
              <Input
                name="activity"
                value={formik.values.activity}
                onChange={formik.handleChange}
                label="activity"
                placeholder="activity"
                type="text"
              />
              <Input
                name="respiration"
                value={formik.values.respiration}
                onChange={formik.handleChange}
                label="respiration"
                placeholder="respiration"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan fisik</p>
            <div>
              <Input
                name="kepala"
                value={formik.values.kepala}
                onChange={formik.handleChange}
                label="kepala"
                placeholder="kepala"
                type="text"
              />
              <Input
                name="uub"
                value={formik.values.uub}
                onChange={formik.handleChange}
                label="uub"
                placeholder="uub"
                type="text"
              />
              <Input
                name="mata"
                value={formik.values.mata}
                onChange={formik.handleChange}
                label="mata"
                placeholder="mata"
                type="text"
              />
              <Input
                name="tht"
                value={formik.values.tht}
                onChange={formik.handleChange}
                label="tht"
                placeholder="tht"
                type="text"
              />
              <Input
                name="mulut"
                value={formik.values.mulut}
                onChange={formik.handleChange}
                label="mulut"
                placeholder="mulut"
                type="text"
              />
              <Input
                name="thorax"
                value={formik.values.thorax}
                onChange={formik.handleChange}
                label="thorax"
                placeholder="thorax"
                type="text"
              />
              <Input
                name="abdomen"
                value={formik.values.abdomen}
                onChange={formik.handleChange}
                label="abdomen"
                placeholder="abdomen"
                type="text"
              />
              <Input
                name="tali_pusat"
                value={formik.values.tali_pusat}
                onChange={formik.handleChange}
                label="tali pusat"
                placeholder="tali pusat"
                type="text"
              />
              <Input
                name="punggung"
                value={formik.values.punggung}
                onChange={formik.handleChange}
                label="punggung"
                placeholder="punggung"
                type="text"
              />
              <Input
                name="genetalia"
                value={formik.values.genetalia}
                onChange={formik.handleChange}
                label="genetalia"
                placeholder="genetalia"
                type="text"
              />
              <Input
                name="anus"
                value={formik.values.anus}
                onChange={formik.handleChange}
                label="anus"
                placeholder="anus"
                type="text"
              />
              <Input
                name="ekstermitas"
                value={formik.values.ekstermitas}
                onChange={formik.handleChange}
                label="ekstermitas"
                placeholder="ekstermitas"
                type="text"
              />
              <Input
                name="kulit"
                value={formik.values.kulit}
                onChange={formik.handleChange}
                label="kulit"
                placeholder="kulit"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan Refleks Pada Bayi</p>
            <div>
              <Input
                name="moro"
                value={formik.values.moro}
                onChange={formik.handleChange}
                label="moro"
                placeholder="moro"
                type="text"
              />
              <Input
                name="rooting"
                value={formik.values.rooting}
                onChange={formik.handleChange}
                label="rooting"
                placeholder="rooting"
                type="text"
              />
              <Input
                name="sucking"
                value={formik.values.sucking}
                onChange={formik.handleChange}
                label="sucking"
                placeholder="sucking"
                type="text"
              />
              <Input
                name="swallowing"
                value={formik.values.swallowing}
                onChange={formik.handleChange}
                label="swallowing"
                placeholder="swallowing"
                type="text"
              />
              <Input
                name="wallking"
                value={formik.values.wallking}
                onChange={formik.handleChange}
                label="wallking"
                placeholder="wallking"
                type="text"
              />
              <Input
                name="graphs"
                value={formik.values.graphs}
                onChange={formik.handleChange}
                label="graphs"
                placeholder="graphs"
                type="text"
              />
              <Input
                name="babinski"
                value={formik.values.babinski}
                onChange={formik.handleChange}
                label="babinski"
                placeholder="babinski"
                type="text"
              />
              <Input
                name="tonicneck"
                value={formik.values.tonicneck}
                onChange={formik.handleChange}
                label="tonicneck"
                placeholder="tonicneck"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan Eliminasi</p>
            <div>
              <Input
                name="miksi"
                value={formik.values.miksi}
                onChange={formik.handleChange}
                label="miksi"
                placeholder="miksi"
                type="text"
              />
              <Input
                name="defekasi"
                value={formik.values.defekasi}
                onChange={formik.handleChange}
                label="defekasi"
                placeholder="defekasi"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil Pemeriksaan Penunjang</p>
            <div>
              <Input
                name="laboratorium"
                value={formik.values.laboratorium}
                onChange={formik.handleChange}
                label="laboratorium"
                placeholder="laboratorium"
                type="text"
              />
              <Input
                name="usg"
                value={formik.values.usg}
                onChange={formik.handleChange}
                label="usg"
                placeholder="usg"
                type="text"
              />
              <Input
                name="rontgen"
                value={formik.values.rontgen}
                onChange={formik.handleChange}
                label="rontgen"
                placeholder="rontgen"
                type="text"
              />
              <Input
                name="terapi"
                value={formik.values.terapi}
                onChange={formik.handleChange}
                label="terapi"
                placeholder="terapi"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Penatalaksanaan</p>
            <div>
              <Input
                name="perawatan_talipusat"
                value={formik.values.perawatan_talipusat}
                onChange={formik.handleChange}
                label="perawatan tali pusat"
                placeholder="perawatan tali pusat"
                type="text"
              />
              <Input
                name="imd"
                value={formik.values.imd}
                onChange={formik.handleChange}
                label="imd"
                placeholder="imd"
                type="text"
              />
              <Input
                name="vitamin_k1"
                value={formik.values.vitamin_k1}
                onChange={formik.handleChange}
                label="vitamin k1"
                placeholder="vitamin k1"
                type="text"
              />
              <Input
                name="imunisasi_hepatitis"
                value={formik.values.imunisasi_hepatitis}
                onChange={formik.handleChange}
                label="imunisasi hepatitis"
                placeholder="imunisasi hepatitis"
                type="text"
              />
              <Input
                name="salep"
                value={formik.values.salep}
                onChange={formik.handleChange}
                label="salep"
                placeholder="salep"
                type="text"
              />
              <Input
                name="kie"
                value={formik.values.kie}
                onChange={formik.handleChange}
                label="kie"
                placeholder="kie"
                type="text"
              />
              <Input
                name="ppia"
                value={formik.values.ppia}
                onChange={formik.handleChange}
                label="ppia"
                placeholder="ppia"
                type="text"
              />
              <Input
                name="pemantauan_tumbuh_kembang"
                value={formik.values.pemantauan_tumbuh_kembang}
                onChange={formik.handleChange}
                label="pemantauan tumbuh kembang"
                placeholder="pemantauan tumbuh kembang"
                type="text"
              />
            </div>
          </div>
        </div>
        <Button type="submit"> {create ? <Spinner /> : "Submit"}</Button>
      </form>
    </Layout>
  );
};

export default Formanak;
