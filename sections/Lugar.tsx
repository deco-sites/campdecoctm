import { Temperature } from "apps/weather/loaders/temperature.ts";

interface Props {
  temperatura: Temperature | null;
  texto: string;
}

const Lugar = ({ temperatura, texto }: Props) => {
  return (
    <div class="flex flex-col items-center justify-center py-4">
      <h4 class="text-xl">Temperatura atual: {temperatura?.celsius}°C</h4>
      <p class="text-base">{texto}</p>
    </div>
  );
};

export default Lugar;
