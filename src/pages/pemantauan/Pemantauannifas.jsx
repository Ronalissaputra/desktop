import React from "react";
import Pemantauan from "./Pemantauan";
import { Heading, Input, Button } from "../../components";

const Pemantauannifas = () => {
  return (
    <Pemantauan>
      <Heading>Pemeriksaan Masa Nifas</Heading>
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
            <p className="text-2xl">Pemeriksaan secara umum</p>
            <div>
              <Input
                name="keadaan umum"
                label="keadaan umum"
                placeholder="keadaan umum"
                type="text"
              />
              <Input
                name="kesadaran"
                label="kesadaran"
                placeholder="kesadaran"
                type="text"
              />
              <Input
                name="status emosional"
                label="status emosional"
                placeholder="status emosional"
                type="text"
              />
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Tanda tanda vita</p>
                <Input
                  name="tekanan darah"
                  label="tekanan darah"
                  placeholder="tekanan darah"
                  type="text"
                />
                <Input
                  name="suhu tubuh"
                  label="suhu tubuh"
                  placeholder="suhu tubuh"
                  type="text"
                />
                <Input
                  name="pernafasan"
                  label="pernafasan"
                  placeholder="pernafasan"
                  type="text"
                />
                <Input
                  name="denyut nadi"
                  label="denyut nadi"
                  placeholder="denyut nadi"
                  type="text"
                />
              </div>
              <Input
                name="konjungtiva"
                label="konjungtiva"
                placeholder="konjungtiva"
                type="text"
              />
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Mammae</p>
                <Input
                  name="puting susu"
                  label="puting susu"
                  placeholder="puting susu"
                  type="text"
                />
                <Input name="asi" label="asi" placeholder="asi" type="text" />
              </div>
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Abdomen</p>
            <div>
              <Input name="tfu" label="tfu" placeholder="tfu" type="text" />
              <Input
                name="kontraksi uterus"
                label="kontraksi uterus"
                placeholder="kontraksi uterus"
                type="text"
              />
              <Input
                name="kandung kemih"
                label="kandung kemih"
                placeholder="kandung kemih"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Genetalia</p>
            <div>
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Perineum</p>
                <Input
                  name="jahitan"
                  label="jahitan"
                  placeholder="jahitan"
                  type="text"
                />
                <Input
                  name="oedema"
                  label="oedema"
                  placeholder="oedema"
                  type="text"
                />
                <Input
                  name="hematoma"
                  label="oedema"
                  placeholder="oedema"
                  type="text"
                />
              </div>
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Lochea</p>
                <Input
                  name="warna"
                  label="warna"
                  placeholder="warna"
                  type="text"
                />
                <Input
                  name="banyak"
                  label="banyak"
                  placeholder="banyak"
                  type="text"
                />
                <Input name="bau" label="bau" placeholder="bau" type="text" />
              </div>
              <div className="mt-2 rounded-md border-2 p-2">
                <p className="text-2xl">Anus</p>
                <Input
                  name="robekan"
                  label="robekan"
                  placeholder="robekan"
                  type="text"
                />
                <Input
                  name="hemorid"
                  label="hemorid"
                  placeholder="hemorid"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Ekstermitas bawah</p>
            <div>
              <Input
                name="varises"
                label="varises"
                placeholder="varises"
                type="text"
              />
              <Input
                name="oedema"
                label="oedema"
                placeholder="oedema"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md border-2 p-4">
            <p className="text-2xl">Pemeriksaan laboratorium</p>
            <div>
              <Input
                name="golongan darah"
                label="golongan darah"
                placeholder="golongan darah"
                type="text"
              />
              <Input
                name="hemoglobin"
                label="hemoglobin"
                placeholder="hemoglobin"
                type="text"
              />
              <Input
                name="hemotokrit"
                label="hemotokrit"
                placeholder="hemotokrit"
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

export default Pemantauannifas;
