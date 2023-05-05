import React, { useState } from "react";
import AsyncSelect from 'react-select/async';

import './BaseForm.css';

import axios from "../../services/axios";

export default function BaseForm() {
      
  const alunos = [
    { id: 1, name: "Graspus graspus" },
    { id: 2, name: "Grus rubicundus" },
    { id: 3, name: "Speothos vanaticus" },
    { id: 4, name: "Charadrius tricollaris" },
    { id: 5, name: "Sciurus vulgaris" },
    { id: 6, name: "Ateles paniscus" },
    { id: 7, name: "Bucorvus leadbeateri" },
    { id: 8, name: "Bubulcus ibis" },
    { id: 9, name: "Physignathus cocincinus" },
    { id: 10, name: "Phoca vitulina" },
    { id: 11, name: "unavailable" },
    { id: 12, name: "Zenaida galapagoensis" },
    { id: 13, name: "Pseudalopex gymnocercus" },
    { id: 14, name: "Terathopius ecaudatus" },
    { id: 15, name: "Eumetopias jubatus" },
    { id: 16, name: "Callorhinus ursinus" },
    { id: 17, name: "Tamiasciurus hudsonicus" },
    { id: 18, name: "Dasyurus viverrinus" },
  ]

  const mapResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name
  });

  async function callApi(value) {
    // const data = await axios.get('/')
    //   .then((response) => response.map(mapResponseToValuesAndLabels));

    setTimeout(() => {

    }, 1000)


    return alunos.map(mapResponseToValuesAndLabels);
  }

  const [nota, setNota] = useState();

  return (
    <div className="form-base-container">
      <form>
        <div className="form-base-group">
          <AsyncSelect className="form-base-group-select"
            cacheOptions
            loadOptions={callApi}
            onInputChange={(data) => {}}
            onChange={(data) => {}}
            defaultOptions
          />
          <label>Nota</label>
          <input 
            type={"number"}
            placeholder={'Nota'}
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            min={0}
            max={8}
          />
        </div>
        <div>
          <button type="submit">Lançar</button>
        </div>
      </form>
    </div>
    );
};
  