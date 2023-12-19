import { useState } from "react";
import { Button } from "./Button";

export const ServiceCard = ({
  servicio,
  nombre,
  descripcion,
  eliminar,
  ser,
}) => {
  const [completo, setCompleto] = useState("bg-gray-50/90");
  const [green, setGreen] = useState("bg-green-400");
  const handleCompleto = (e) => {
    setGreen("bg-green-400/50");
    setCompleto("border-2 border-green-400");
    e.target.setAttribute("disabled", true);
    e.target.textContent = "Completada";
  };
  return (
    <div className={`w-fit bg-gray-50/90 rounded-xl p-6   ${completo}`}>
      <h2 className="text-xl font-bold block ">Servicio: {servicio}</h2>
      <h3 className="text-lg font-thin block mt-3 ">Cliente: {nombre}</h3>
      <p className="text-lg font-thin mt-3 ">Problema: {descripcion}</p>
      <div className="flex  justify-between mt-4 w-fit gap-20">
        <Button
          text="Completar ✅"
          classes={`p-3 text-white ${green}`}
          onClick={handleCompleto}
        />
        <Button
          text="Eliminar ❌"
          classes="bg-red-600 p-3 text-white"
          onClick={() => eliminar(ser.id)}
        />
      </div>
    </div>
  );
};
