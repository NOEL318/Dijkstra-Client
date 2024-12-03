import { useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AlbercaUniversitaria from "./assets/Alberca Universitaria.jpeg";
import AU from "./assets/AU.jpeg";
import Biblioteca from "./assets/Biblioteca.jpeg";
import Cafeteria from "./assets/Cafetería.jpeg";
import CienciasSalud from "./assets/Ciencias Salud.jpeg";
import CN from "./assets/CN.jpeg";
import ColegioCain from "./assets/Colegio Cain.jpeg";
import ColegioRay from "./assets/Colegio Ray.jpeg";
import GimnasioPesas from "./assets/Gimnasio de Pesas.jpeg";
import GimnasioMoe from "./assets/Gimnasio Moe.jpeg";
import HU from "./assets/HU.jpeg";
import IgnacioBernal from "./assets/Ignacio Bernal.jpeg";
import JoseGaos from "./assets/José Gaos.jpeg";
import Negocios from "./assets/Negocios.jpeg";

function App() {
  const [inicio, setinicio] = useState("");
  const [fin, setfin] = useState("");
  const [ruta, setruta] = useState(null);
  const options = [
    "Gimnasio Pesas",
    "Ignacio Bernal",
    "HU",
    "José Gaos",
    "Ray Lindley",
    "Ciencias de La Salud",
    "Cafetería",
    "Recursos Humanos",
    "Auditorio",
    "CN",
    "Biblioteca",
    "Cain Murray",
    "Gimnasio Moe",
    "Alberca Universitaria",
    "Negocios",
  ];

  var get_info = async () => {
    var call_api = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/data",
      data: { inicio, fin },
      headers: { "content-type": "application/json" },
    });
    setruta(call_api.data[0]);
  };
  return (
    <div className="App">
      <div className="form">
        <label>Lugar de Partida: </label>
        <select
          className="input"
          id="selectInput"
          value={inicio}
          onChange={(e) => setinicio(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Lugar A Llegar:</label>
        <select
          className="input"
          id="selectInput"
          value={fin}
          onChange={(e) => setfin(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className="button"
          onClick={get_info}
          disabled={inicio == "" || fin == "" ? true : false}
        >
          Calcular Mejor Ruta
        </button>
      </div>
      {ruta != null && (
        <VerticalTimeline>
          {ruta.map((element) => {
            var R = Math.floor(Math.random() * 256);
            var G = Math.floor(Math.random() * 256);
            var B = Math.floor(Math.random() * 256);
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: `rgb(${R}, ${G}, ${B})`,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  rgb(${R}, ${G}, ${B})`,
                }}
                iconStyle={{
                  background: `rgb(${R}, ${G}, ${B})`,
                  color: "#fff",
                }}
                icon={""}
              >
                <h3 className="vertical-timeline-element-title">{element}</h3>
                {element == "Alberca Universitaria" && (
                  <img src={AlbercaUniversitaria} width={"100%"} />
                )}
                {element == "Auditorio" && <img src={AU} width={"100%"} />}
                {element == "Biblioteca" && (
                  <img src={Biblioteca} width={"100%"} />
                )}
                {element == "Cafetería" && (
                  <img src={Cafeteria} width={"100%"} />
                )}
                {element == "Ciencias de La Salud" && (
                  <img src={CienciasSalud} width={"100%"} />
                )}
                {element == "CN" && <img src={CN} width={"100%"} />}
                {element == "Cain Murray" && (
                  <img src={ColegioCain} width={"100%"} />
                )}
                {element == "Ray Lindley" && (
                  <img src={ColegioRay} width={"100%"} />
                )}
                {element == "Gimnasio Pesas" && (
                  <img src={GimnasioPesas} width={"100%"} />
                )}
                {element == "Gimnasio Moe" && (
                  <img src={GimnasioMoe} width={"100%"} />
                )}
                {element == "HU" && <img src={HU} width={"100%"} />}
                {element == "Ignacio Bernal" && (
                  <img src={IgnacioBernal} width={"100%"} />
                )}
                {element == "José Gaos" && (
                  <img src={JoseGaos} width={"100%"} />
                )}
                {element == "Negocios" && <img src={Negocios} width={"100%"} />}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
    </div>
  );
}

export default App;
