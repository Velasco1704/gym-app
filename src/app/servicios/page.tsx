import Image from "next/image";
import tuPrimero from "@/assets/servicios/tu-primero.jpg";
import espacios from "@/assets/servicios/instalaciones.jpg";
import diseño from "@/assets/servicios/diseño.jpg";
import asesoria from "@/assets/servicios/asesoria.jpg";
import entrenamientoPlanta from "@/assets/servicios/entrenadores-planta.jpg";
import cardio from "@/assets/servicios/cardio.jpg";
import estiramientoAbdomen from "@/assets/servicios/abdomen.jpg";
import entrenamientoPersonalizado from "@/assets/servicios/e-personalizado.jpg";
import musculacion from "@/assets/servicios/musculacion.jpg";
import nutricionMedicina from "@/assets/servicios/doc.jpg";
import phone from "@/assets/servicios/phone.jpg";
import parking from "@/assets/servicios/parking.jpg";
import "@/styles/Servicios.modules.scss";

const Servicios = () => {
  return (
    <section className="servicios__container">
      <div className="servicios__layout">
        <h1 className="servicios__h1">SERVICIOS</h1>
        <div className="servicios__layout__container">
          <div className="servicios__layout__servicio">
            <Image className="servicio__img" src={tuPrimero} alt="image" />
            <div className="servicio__info">
              <h1 className="servicio__info__h1">TU ERES EL PRIMERO</h1>
            </div>
          </div>
          <div className="servicios__layout__servicio">
            <Image className="servicio__img" src={espacios} alt="image" />
            <div className="servicio__info">
              <h1 className="servicio__info__h1">ESPACIOS AMPLIOS</h1>
            </div>
          </div>
          <div className="servicios__layout__servicio">
            <Image className="servicio__img" src={diseño} alt="image" />
            <div className="servicio__info">
              <h1 className="servicio__info__h1">DISEÑO MODERNO</h1>
            </div>
          </div>
          <div className="servicios__layout__servicio">
            <Image className="servicio__img" src={asesoria} alt="image" />
            <div className="servicio__info">
              <h1 className="servicio__info__h1">ASESORÍA DE EXPERTOS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="servicios__container__facilities">
        <div className="servicio__facilities ">
          <Image
            className="servicio__facilities__img"
            src={entrenamientoPlanta}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">01</h1>
            <h2 className="servicio__facilities__h2">ENTRENADOR DE PLANTA</h2>
            <p className="servicio__facilities__p">
              Un equipo de profesionales dispuestos a ayudarte
            </p>
          </div>
        </div>
        <div className="servicio__facilities ">
          <Image
            className="servicio__facilities__img"
            src={cardio}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">02</h1>
            <h2 className="servicio__facilities__h2">CARDIO</h2>
            <p className="servicio__facilities__p">
              Equipos de trabajo cardiovascular: elípticas, bicicletas, máquinas
              de remo, etc.
            </p>
          </div>
        </div>
        <div className="servicio__facilities">
          <Image
            className="servicio__facilities__img"
            src={estiramientoAbdomen}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">03</h1>
            <h2 className="servicio__facilities__h2">ESTIRAMIENTO Y ABDOMEN</h2>
            <p className="servicio__facilities__p">
              Zona con equipos especializados para mejorar tu movilidad y
              prevenir lesiones.
            </p>
          </div>
        </div>
        <div className="servicio__facilities ">
          <Image
            className="servicio__facilities__img"
            src={entrenamientoPersonalizado}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">04</h1>
            <h2 className="servicio__facilities__h2">
              ENTRENAMIENTO PERSONALIZADO
            </h2>
            <p className="servicio__facilities__p">
              Los resultados que quieres con nuestros entrenadores certificados.
            </p>
          </div>
        </div>
        <div className="servicio__facilities">
          <Image
            className="servicio__facilities__img"
            src={musculacion}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">05</h1>
            <h2 className="servicio__facilities__h2">MUSCULACIÓN</h2>
            <p className="servicio__facilities__p">
              Equipos para fortalecer y aumentar masa muscular.
            </p>
          </div>
        </div>
        <div className="servicio__facilities">
          <Image
            className="servicio__facilities__img"
            src={nutricionMedicina}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">06</h1>
            <h2 className="servicio__facilities__h2">
              NUTRICIÓN Y MEDICINA DEL DEPORTE
            </h2>
            <p className="servicio__facilities__p">
              Programa sesiones privadas con nuestros especialistas en el
              counter de tu sede.
            </p>
          </div>
        </div>
        <div className="servicio__facilities ">
          <Image
            className="servicio__facilities__img"
            src={phone}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">07</h1>
            <h2 className="servicio__facilities__h2">WIFI</h2>
            <p className="servicio__facilities__p">
              Conéctate al servicio de wifi de alta velocidad y olvidate de
              gastar datos cada vez que entrenas.
            </p>
          </div>
        </div>
        <div className="servicio__facilities">
          <Image
            className="servicio__facilities__img"
            src={parking}
            alt="image"
          />
          <div className="servicio__facilities__info">
            <h1 className="servicio__facilities__h1">08</h1>
            <h2 className="servicio__facilities__h2">PARQUEADERO</h2>
            <p className="servicio__facilities__p">
              Este servicio es distinto en cada sede. Pregunta en el counter de
              la tuya por los convenios vigentes.
            </p>{" "}
            <p className="servicio__facilities__p">
              El parqueadero no esta incluido en el valor afiliación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
