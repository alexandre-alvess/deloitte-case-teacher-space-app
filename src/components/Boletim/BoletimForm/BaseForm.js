import React, { useState, useEffect } from "react";
import AsyncSelect from 'react-select/async';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import './BaseForm.css';

import useApi from '../../utils/useApi';
import axios from "../../../services/axios";

const INITIAL_ALUNO_DATA = {
  value: '',
  label: 'Selecione o aluno'
};

const INITIAL_TURMA_DATA = {
  value: '',
  label: 'Selecione a turma'
}

export default function BaseForm() {
      
  const professorId = useSelector(state => state.auth.entidadeId);
  const [nota, setNota] = useState(0);
  const [selectAluno, setSelectAluno] = useState(INITIAL_ALUNO_DATA);
  const [selectTurma, setSelectTurma] = useState(INITIAL_TURMA_DATA);

  const [save, saveInfo] = useApi({
    url: 'v1/Boletim/Adicionar',
    method: 'post',
    onCompleted: (response) => {
      console.log('executou oncompleted no form', response)
      if (response != null && !response.error) {
        console.log(response.error);
        toast.success('Boletim lançado com sucesso :)');
      } else {
        toast.error('Não foi possível lançar o boletim do aluno :(');
      }
    }
  });

  const mapResponseAlunosToValuesAndLabels = (data) => ({
    value: data.aluno_id,
    label: data.aluno
  });

  const mapResponseTurmaToValuesAndLabels = (data) => ({
    value: data.turma_id,
    label: data.turma
  });

  async function callConsultaAluno(value) {

      const data = await axios.get(`/v1/Aluno/ConsultarPorTurmaSearch?turmaId=${selectTurma.value}`)
          .then((response) => response.data.map(mapResponseAlunosToValuesAndLabels))
          .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
      return data;
  }

  async function callConsultaTurma(value) {
      const data = await axios.get(`/v1/Turma/ConsultarPorProfessorSearch?professorId=${professorId}`)
        .then((response) => response.data.map(mapResponseTurmaToValuesAndLabels))
        .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));

        return data;
  }

  function onChange(e) {
    setNota(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    console.log('lançar nota');
    console.log(`turma_id: ${selectTurma.value}`);
    console.log(`aluno_id: ${selectAluno.value}`);

    save({
      data: {
        aluno_id: selectAluno.value,
        turma_id: selectTurma.value,
        nota: nota,
        data_entrega: new Date()
      }
    });

    setNota(0);
    setSelectAluno(INITIAL_ALUNO_DATA);
    setSelectTurma(INITIAL_TURMA_DATA);
  }

  return (
    <div className="form-base-container">
      <form onSubmit={onSubmit}>
        {saveInfo.loading && <span>Lançando boletim...</span>}
        <div className="form-base-group">
          <div className="form-base-group-select">
            
            <div className="form-base-select-item">
              <a>Turma</a>
              <AsyncSelect  id="select-turma" 
                cacheOptions
                loadOptions={callConsultaTurma}
                onChange={(data) => {
                  setSelectTurma(data)
                  console.log(`selecionado => turma ${data.label} - id: ${data.value}`)
                }}
                defaultOptions
                value={selectTurma}
              />
            </div>

            <div className="form-base-select-item">
            <a>Aluno</a>
              <AsyncSelect id="select-aluno"
                isDisabled={!selectTurma.value}
                cacheOptions
                loadOptions={callConsultaAluno}
                onChange={(data) => {
                  setSelectAluno(data)
                  console.log(`selecionado => aluno: ${data.label} - id: ${data.value}`)
                }}
                defaultOptions
                value={selectAluno}
              />
            </div>
          </div>

          <label>Nota</label>
          <input 
            id='nota'
            name="nota"
            type='number'
            placeholder={'Nota'}
            onChange={onChange}
            value={nota}
          />

        </div>
        <footer className="form-base-button">
          <button type="submit">Lançar</button>
        </footer>
      </form>
    </div>
    );
};
  