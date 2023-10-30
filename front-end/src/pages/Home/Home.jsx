import React from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="w-full bg-blue-600 p-3 text-white font-medium flex justify-between">
        <div>
          <Link to="/home" class="text-xl mr-5 ">
            Home
          </Link>
        </div>

        <ul className="flex gap-6">
          <li className="border-b-2 border-b-transparent hover:border-white transition-all hover:cursor-pointer">
            Rutas{" "}
          </li>
          <li className="border-b-2 border-b-transparent hover:border-white transition-all hover:cursor-pointer">
            Mapa
          </li>
          <li className="border-b-2 border-b-transparent hover:border-white transition-all hover:cursor-pointer">
            Sobre Nosotros
          </li>
          <li className="border-b-2 border-b-transparent hover:border-white transition-all hover:cursor-pointer">
            Perfil
          </li>
          <li
            className="border-b-2 border-b-transparent hover:border-white transition-all hover:cursor-pointer"
            onClick={() => {
              secureLocalStorage.removeItem("token");
              navigate("/");
            }}
          >
            Salir
          </li>
        </ul>
      </nav>
      <div className="bg-gray-400 w-full h-[28rem] overflow-hidden relative">
        <div className="absolute w-full h-full bg-gray-800/70 items-center flex flex-col">
          <h1 className="text-5xl text-white font-semibold w-fit m-auto h-fit">
            Con esta App ahorras tiempo y estres.
            <h1 className="text-5xl text-white font-semibold w-fit m-auto h-fit mt-10">
              COMING SOON.
            </h1>
          </h1>
        </div>
        <img
          src="https://th.bing.com/th/id/R.b5e017f974aad3de18301179de3feb80?rik=RB3wkV14JX8PIg&pid=ImgRaw&r=0"
          className="object-cover  w-full h-full "
          style={{ aspectRatio: "3/1" }}
        />
      </div>

      <h1 className="text-3xl w-fit mx-auto font-medium mt-10">Misión </h1>
      <div className="w-8/12 h-[0.1rem] bg-gray-200 mx-auto mt-5"></div>

      <div className="mt-10 w-8/12 mx-auto">
        <p className="text-justify leading-7">
          Nuestra misión es simplificar y mejorar la experiencia de transporte
          para la comunidad educativa del Instituto Tecnológico de Las Américas
          (ITLA). A través de nuestro Sistema de Transporte Avanzado, buscamos
          proporcionar soluciones innovadoras y confiables que faciliten el
          acceso al transporte público, promoviendo la eficiencia, la seguridad
          y la comodidad para todos los usuarios.
        </p>
      </div>

      <h1 className="text-3xl w-fit mx-auto font-medium mt-12">Visión </h1>
      <div className="w-8/12 h-[0.1rem] bg-gray-200 mx-auto mt-5"></div>

      <div className="mt-10 w-8/12 mx-auto">
        <p className="text-justify leading-7">
          Nuestra visión es ser líderes en la transformación digital del
          transporte educativo, creando un ecosistema donde los usuarios puedan
          viajar de manera inteligente y conectada. Aspiramos a ser reconocidos
          por nuestra excelencia tecnológica, atención al cliente y contribución
          a una comunidad educativa más unida y eficiente.
        </p>
      </div>

      <h1 className="text-3xl w-fit mx-auto font-medium mt-12">
        Sobre Nosotros{" "}
      </h1>
      <div className="w-8/12 h-[0.1rem] bg-gray-200 mx-auto mt-5"></div>

      <div className="mt-10 w-8/12 mx-auto mb-10">
        <p className="text-justify leading-7">
          <b>Quiénes Somos:</b>
          <br /> Somos un grupo diverso de estudiantes apasionados del Instituto
          Tecnológico de Las Américas (ITLA) con una visión común: transformar
          la experiencia de transporte para nuestra comunidad educativa. Nos
          unen nuestra creatividad, nuestro amor por la tecnología y nuestro
          deseo de crear soluciones innovadoras y eficientes.
          <br />
          <br />
          <b>Por Qué Queremos Hacer Esto:</b>
          <br />
          <br />
          Nos inspira el deseo de mejorar la vida de nuestros compañeros de
          clase y profesores. Sabemos que el transporte escolar puede ser un
          desafío, y creemos firmemente que la tecnología puede convertir esos
          desafíos en oportunidades. Queremos facilitar el acceso a la educación
          al hacer que el viaje hacia y desde el ITLA sea seguro, cómodo y sin
          complicaciones para todos. Nos motiva la posibilidad de hacer una
          diferencia real en nuestra comunidad, proporcionando una solución
          moderna y amigable que no solo ahorra tiempo y esfuerzo, sino que
          también crea una sensación de comunidad y pertenencia. Creemos en la
          tecnología como un puente hacia un futuro mejor y estamos decididos a
          construir ese puente para nuestra comunidad en ITLA.
          <br />
          <br />
          <b>Los miembros de nuestro equipo son:</b>
          <br />
          <br />
          Jhael: Apasionado por el desarrollo de software y la experiencia del
          usuario, Jhael aporta su creatividad y habilidades técnicas para
          mejorar la vida de nuestros compañeros de ITLA.
          <br />
          Otto: Con una mente analítica y habilidades excepcionales en
          programación, Otto está dedicado a encontrar soluciones eficientes y
          prácticas para los desafíos del transporte escolar. Samuel: Experto en
          diseño de interfaces de usuario,
          <br /> Samuel se asegura de que nuestra aplicación sea intuitiva y
          fácil de usar, creando una experiencia de usuario excepcional para
          todos los usuarios. <br /> Adrian: Con una pasión por la
          sostenibilidad y la innovación, Adrian trabaja para integrar buenas
          prácticas en el lado del servidor. .
          <br />
          Jorge: Jorge aporta su experiencia en colaboración comunitaria y su
          habilidad para crear conexiones significativas, promoviendo un
          ambiente de apoyo y colaboración dentro de nuestra comunidad de ITLA.
        </p>
      </div>
    </div>
  );
}

export default Home;
