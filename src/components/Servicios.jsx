import { Box } from "./Containers";
import { ServiceCard } from "./ServiceCard";

export const Servicios = ({ servicios, eliminar }) => {
  // let id = Math.floor(Math.random() * 1000);
  return (
    <Box>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-4xl text-center p-4 text-white">
          Lista de Servicios
        </h2>
        <div className="services flex flex-col gap-4 p-4">
          {servicios.length === 0 ? (
            <p className="text-center text-xl mt-8">No hay servicios</p>
          ) : (
            servicios.map((ser,index) => {
              const { name, services, description } = ser;
              ser.id = index;
              return (
                <ServiceCard
                  key={index}
                  ser={ser}
                  servicio={services}
                  nombre={name}
                  descripcion={description}
                  eliminar={eliminar}
                />
              );
            })
          )}
        </div>
      </div>
    </Box>
  );
};
