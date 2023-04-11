"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import nutricion from "../assets/nutricion.png";
import terapia from "../assets/terapia.png";
import medicina from "../assets/medicina.png";
import plan1 from "../assets/Home-Planes1.jpg";
import plan2 from "../assets/Home-Planes2.jpg";
import "./page.modules.scss";

const Home = () => {
  const router = useRouter();
  const handleNavigate = () => router.push("/bienestar-salud");
  return (
    <section className="home__container">
      <div className="home__somos__energia">
        <h1 className="home__somos__energia__h1">SOMOS ENERGÍA</h1>
        <p className="home__somos__energia__p">
          Un gym donde nunca te aburres y siempre entrenas con la mejor energía.
          Aquí te acompañamos para alcanzar tus metas.
        </p>
        <button className="home__somos__energia__button" type="button"></button>
      </div>
      <div className="home__bienestar">
        <h2 className="home__bienestar__h2">
          TU BIENESTAR,{" "}
          <span className="home__bienestar__span">NUESTRA PRIORIDAD</span>
        </h2>
        <p className="home__bienestar__p">
          Métele power a tus resultados y cuida tu salud con nuestros servicios
          de bienestar.
        </p>
        <p className="home__bienestar__p">¡Agenda tu cita en la sede!</p>
      </div>
      <div className="home__servicios">
        <div className="home__servicios__container">
          <Image
            className="home__img"
            onClick={handleNavigate}
            src={nutricion}
            alt="image"
          />
          <Image
            className="home__img"
            onClick={handleNavigate}
            src={terapia}
            alt="image"
          />
          <Image
            className="home__img"
            onClick={handleNavigate}
            src={medicina}
            alt="image"
          />
        </div>
      </div>
      <div className="home__planes">
        <div className="home__planes__header">
          <h2 className="home__planes__h2">PLANES DE AFILIACIÓN</h2>
          <p className="home__planes__p">
            Conoce nuestros planes de afiliación más populares en Stark Gym.
          </p>
        </div>
        <div className="home__planes__layout">
          <div className="home__plan">
            <Image className="home__plan__img" src={plan1} alt="image" />
            <div className="home__plan__info">
              <h3 className="home__plan__info__h3">PLAN FULL TUGYM</h3>
              <h4 className="home__plan__info__price">$79.000/mes</h4>
              <div className="home__plan__info__container__p">
                <p className="home__plan__info__p">Membresía: $0</p>
                <p className="home__plan__info__p">Mantenimiento: $0</p>
                <p className="home__plan__info__p">Tiempo mínimo: 12 meses</p>
              </div>
            </div>
            <div className="home__plan__beneficios">
              <p className="home__plan__beneficios__p">Beneficios:</p>
              <ul className="home__plan__beneficios__ul">
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span>{" "}
                  Ingreso a todas las sedes
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span> 5
                  invitados al mes
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span> 1
                  congelación al año entre 7 y 15 días
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span> Plan
                  de nutrición para tu primer mes de entrenamiento
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span>{" "}
                  Fácil pago con débito automático a tu tarjeta de crédito
                </li>
              </ul>
            </div>
          </div>
          <div className="home__plan">
            <Image className="home__plan__img" src={plan2} alt="image" />
            <div className="home__plan__info">
              <h3 className="home__plan__info__h3">
                DÉBITO AUTOMÁTICO 6 MESES
              </h3>
              <h4 className="home__plan__info__price">$89.000/mes</h4>
              <div className="home__plan__info__container__p">
                <p className="home__plan__info__p">Membresía: $0</p>
                <p className="home__plan_info__p">Mantenimiento: $39.000</p>
                <p className="home__plan__info__p">Tiempo mínimo: 6 meses</p>
              </div>
            </div>
            <div className="home__plan__beneficios">
              <p className="home__plan__beneficios__p">Beneficios:</p>
              <ul className="home__plan__beneficios__ul">
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span>{" "}
                  Ingreso a la sede de afiliación
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span>{" "}
                  Plataforma de entrenamiento online (TuGym Virtual)
                </li>
                <li className="home__plan__beneficios__li">
                  <span className="home__plan__beneficios__check">✔️</span> Pago
                  con tarjeta de crédito
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
