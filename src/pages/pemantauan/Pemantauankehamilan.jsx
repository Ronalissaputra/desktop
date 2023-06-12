import React from "react";
import Pemantauan from "./Pemantauan";
import { Heading, Input, Button } from "../../components";

const Pemantauankehamilan = () => {
  return (
    <Pemantauan>
      <Heading>Pemeriksaan Kehamilan</Heading>
      <form>
        <div className="grid grid-cols-1 gap-5 rounded-sm border-t-2 border-red-500 pt-2 md:grid-cols-2">
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Status Pemeriksaan</p>
            <div>
              <Input
                name="pilih ibu hamil"
                label="pilih ibu hamil"
                placeholder="pilih ibu hamil"
                type="text"
              />
              <Input
                name="status"
                label="status"
                placeholder="status"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Tanggal dan tempat</p>
            <div>
              <Input
                name="tanggal"
                label="tanggal"
                placeholder="tanggal"
                type="date"
              />
              <Input
                name="tempat"
                label="tempat"
                placeholder="tempat"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil anamnesis</p>
            <div>
              <Input
                name="keluhan"
                label="keluhan"
                placeholder="keluhan"
                type="date"
              />
              <Input
                name="pola makan"
                label="pola makan"
                placeholder="pola makan"
                type="text"
              />
              <Input
                name="pola istrahat"
                label="pola istrahat"
                placeholder="pola istrahat"
                type="text"
              />
              <Input
                name="pola seksual"
                label="pola seksual"
                placeholder="pola seksual"
                type="text"
              />
              <Input
                name="aktifitas fisik"
                label="aktifitas fisik"
                placeholder="aktifitas fisik"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil pemeriksaan fisik</p>
            <div>
              <Input
                name="tinggi badan"
                label="tinggi badan"
                placeholder="tinggi badan"
                type="date"
              />
              <Input
                name="berat badan"
                label="berat badan"
                placeholder="berat badan"
                type="text"
              />
              <Input
                name="linkaran lengan atas"
                label="linkaran lengan atas"
                placeholder="linkaran lengan atas"
                type="text"
              />
              <Input
                name="tekanan darah"
                label="tekanan darah"
                placeholder="tekanan darah"
                type="text"
              />
              <Input name="suhu" label="suhu" placeholder="suhu" type="text" />
              <Input name="nadi" label="nadi" placeholder="nadi" type="text" />
              <Input
                name="pernafasan"
                label="pernafasan"
                placeholder="pernafasan"
                type="text"
              />
              <Input
                name="conjungtiva"
                label="conjungtiva"
                placeholder="conjungtiva"
                type="text"
              />
              <Input
                name="sclera"
                label="sclera"
                placeholder="sclera"
                type="text"
              />
              <Input
                name="udema wajah"
                label="udema wajah"
                placeholder="udema wajah"
                type="text"
              />
              <Input
                name="kesehatan gigi dan mulut"
                label="kesehatan gigi dan mulut"
                placeholder="kesehatan gigi dan mulut"
                type="text"
              />
              <Input
                name="kelenjar tiroid"
                label="kelenjar tiroid"
                placeholder="kelenjar tiroid"
                type="text"
              />
              <Input
                name="kelenjar limfe"
                label="kelenjar limfe"
                placeholder="kelenjar limfe"
                type="text"
              />
              <Input
                name="vena jugularis"
                label="vena jugularis"
                placeholder="vena jugularis"
                type="text"
              />
              <Input
                name="payudara"
                label="payudara"
                placeholder="payudara"
                type="text"
              />
              <Input
                name="pembesaran perut"
                label="pembesaran perut"
                placeholder="pembesaran perut"
                type="text"
              />
              <Input
                name="luka bekas operasi"
                label="luka bekas operasi"
                placeholder="luka bekas operasi"
                type="text"
              />
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Palpasi leopold</p>
                <Input
                  name="leopold 1"
                  label="leopold 1"
                  placeholder="leopold 1"
                  type="text"
                />
                <Input
                  name="leopold 2"
                  label="leopold 2"
                  placeholder="leopold 2"
                  type="text"
                />
                <Input
                  name="leopold 3"
                  label="leopold 3"
                  placeholder="leopold 3"
                  type="text"
                />
                <Input
                  name="leopold 4"
                  label="leopold 4"
                  placeholder="leopold 4"
                  type="text"
                />
              </div>
              <Input
                name="ekstermitas"
                label="ekstermitas"
                placeholder="ekstermitas"
                type="text"
              />
              <Input
                name="kondisi vulva"
                label="kondisi vulva"
                placeholder="kondisi vulva"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Hasil pemeriksaan penunjang</p>
            <div>
              <Input
                name="kadar haemoglobin"
                label="kadar haemoglobin"
                placeholder="kadar haemoglobin"
                type="text"
              />
              <Input
                name="protein urine"
                label="protein urine"
                placeholder="protein urine"
                type="text"
              />
              <Input
                name="glukosa urine"
                label="glukosa urine"
                placeholder="glukosa urine"
                type="text"
              />
              <Input
                name="hbsag"
                label="hbsag"
                placeholder="hbsag"
                type="text"
              />
              <Input
                name="rapid tes hiv"
                label="rapid tes hiv"
                placeholder="rapid tes hiv"
                type="text"
              />
              <Input name="usg" label="usg" placeholder="usg" type="text" />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Penatalaksanaan</p>
            <div>
              <Input
                name="pemberian tablet tambah darah"
                label="pemberian tablet tambah darah"
                placeholder="pemberian tablet tambah darah"
                type="text"
              />
              <Input
                name="status imunisasi tt"
                label="status imunisasi tt"
                placeholder="status imunisasi tt"
                type="text"
              />
              <Input
                name="konseling"
                label="konseling"
                placeholder="konseling"
                type="text"
              />
              <Input
                name="layanan dokter"
                label="layanan dokter"
                placeholder="layanan dokter"
                type="text"
              />
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Pemantauan>
  );
};

export default Pemantauankehamilan;
