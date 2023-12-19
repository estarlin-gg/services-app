import React from "react";
import { Box } from "./Containers";
import { useState } from "react";

export const Form = ({ GuardarServicio }) => {
  const [servicio, setServicio] = useState({
    
    name: "",
    services: "",
    description: "",
  });
  const [error, setError] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      services.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    GuardarServicio(servicio);
  };

  const CrearServicio = (e) => {
    setServicio({
      ...servicio,
      [e.target.name]: e.target.value,
    });
  };
  const { name, services, description } = servicio;
  return (
    <Box>
      <form action="" className="flex flex-col gap-4 p-4" onSubmit={Enviar}>
        <h2 className="text-4xl text-center text-white">
          Registra el servicio
        </h2>
        {error ? (
          <h2 className="bg-red-600 p-2 text-white font-medium text-2xl text-center rounded-md">
            Llena todos los campos
          </h2>
        ) : null}
        <div className="w-full">
          <label htmlFor="name" className="block font-medium text-lg">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 w-full rounded-lg outline-none"
            onChange={CrearServicio}
            value={name}
          />
        </div>
        <div className="w-full">
          <label htmlFor="name" className="block font-medium text-lg">
            Tipo de servicio
          </label>
          <select
            name="services"
            id=""
            className="p-2 w-full rounded-lg outline-none"
            onChange={CrearServicio}
            value={services}
          >
            <option value="null" defaultValue>
              Elige un servicio
            </option>
            <option value="electricidad">Electricidad</option>
            <option value="plomeria">Plomeria</option>
            <option value="electronico">Electronico</option>
            <option value="red">Red</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="name" className="block font-medium text-lg">
            Problema
          </label>
          <textarea
            name="description"
            id=""
            className="p-2 outline-none rounded-md w-full"
            onChange={CrearServicio}
            value={description}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3  bg-indigo-600 rounded-2xl text-white font-medium"
        >
          Registrar
        </button>
      </form>
    </Box>
  );
};
