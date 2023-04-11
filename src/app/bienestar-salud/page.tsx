import Image from "next/image";
import nutricion from "@/assets/bienestar/nutricion.png";
import medicinaDeportiva from "@/assets/bienestar/medicina_deportiva.png";
import fisioterapia from "@/assets/bienestar/fisioterapia.png";
import terapia from "@/assets/bienestar/masaje.jpg";
import "@/styles/BienestarSalud.modules.scss";

const BienestarSalud = () => {
  return (
    <section className="bienestar__container">
      <div className="bienestar__header">
        <h1 className="bienestar__header__h1">BIENESTAR</h1>
        <p className="bienestar__header__p">
          Sesiones y consultas con nuestros expertos en salud, deporte y
          nutricion
        </p>
      </div>
      <div className="bienestar__servicios__layout">
        <div className="bienestar__servicio servicio__nutricion">
          <Image
            className="bienestar__servicio__img"
            src={nutricion}
            alt="image"
          />
          <div className="bienestar__servicio__info">
            <h1 className="bienestar__servicio__h1">NUTRICION</h1>
            <p className="bienestar__servicio__p">
              Esta consulta especializada con nutricionista es recomendable para
              crear hábitos y potenciar tus resultados de entrenamiento.
              Incluye:
            </p>
            <ul className="bienestar__servicio__extra__info__ul">
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Valoración inicial con nuestra nutricionista.
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Plan alimentario según objetivos.
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Recetario de intercambios.
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Composición corporal.
              </li>
            </ul>
          </div>
        </div>
        <div className="bienestar__servicio servicio__medicina">
          <Image
            className="bienestar__servicio__img"
            src={medicinaDeportiva}
            alt="image"
          />
          <div className="bienestar__servicio__info">
            <h1 className="bienestar__servicio__h1">MEDICINA DEPORTIVA</h1>
            <p className="bienestar__servicio__p">
              Esta sesión es ideal para iniciar tu experiencia en el gym, fijar
              objetivos de entrenamiento y prescribir ejercicio en pacientes con
              restricciones. Incluye:
            </p>
            <ul className="bienestar__servicio__extra__info__ul">
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Valoración médica.
                </p>
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Examen cardiovascular y osteomuscular.
                </p>
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Análisis de composición corporal.
                </p>
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Diseño individualizado de plan de entrenamiento.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bienestar__servicio servicio__fisioterapeuta">
          <Image
            className="bienestar__servicio__img"
            src={fisioterapia}
            alt="image"
          />
          <div className="bienestar__servicio__info">
            <h1 className="bienestar__servicio__h1">FISIOTERAPIA</h1>
            <p className="bienestar__servicio__p">
              Es una valoración pre-participativa para evaluar tu progresión de
              forma periódica. Incluye:
            </p>
            <ul className="bienestar__servicio__extra__info__ul">
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Valoración inicial con fisioterapeuta.
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Estudio de composición corporal.
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                Asignación de plan de entrenamiento predeterminado según tu
                meta.
              </li>
            </ul>
          </div>
        </div>
        <div className="bienestar__servicio servicio__terapia">
          <Image
            className="bienestar__servicio__img"
            src={terapia}
            alt="image"
          />
          <div className="bienestar__servicio__info">
            <h1 className="bienestar__servicio__h1">TERAPIA FÍSICA</h1>
            <p className="bienestar__servicio__p">
              Sesiones de 60 minutos con fisioterapeutas especializados en
              recuperación post-entrenamiento, rehabilitación, prevención de
              lesiones y más.
            </p>
            <ul className="bienestar__servicio__extra__info__ul">
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Paquetes de 1, 3 o 5 sesiones.
                </p>
              </li>
              <li className="bienestar__servicio__extra__info__li">
                <span className="bienestar__servicio__extra__info__span">
                  ✔️
                </span>{" "}
                <p className="bienestar__servicio__extra__info__p">
                  Masaje terapéutico, masajes de descarga post entrenamiento o
                  competencia, terapia con ventosas, terapia de percusión y
                  recuperación funcional.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BienestarSalud;
