import { Box, Typography } from '@mui/material';
import { CustomCard } from "../../components/CustomCard";

export const About = () => {
  return (
    <Box className="slide">
      <Box sx={{padding: 4, backgroundColor:'primary.main', mb: 2}}>
        <Typography variant='h1' sx={{mt: 2, textAlign: 'center'}}>HTML, CSS y JavaScript</Typography>
        <Typography variant='h4' sx={{padding: 4, mt: 3}}>
          HTML, CSS y JavaScript son las tecnologías fundamentales para el desarrollo web. HTML 
          (HyperText Markup Language) se encarga de estructurar el contenido de una página, como 
          encabezados, párrafos o imágenes. CSS (Cascading Style Sheets) define la presentación y el 
          diseño visual, incluyendo colores, fuentes y disposición de los elementos. JavaScript, por su 
          parte, agrega interactividad y comportamiento dinámico, permitiendo responder a eventos del 
          usuario, actualizar el contenido sin recargar la página y conectar con APIs externas. Juntas, 
          estas tres tecnologías hacen posible la creación de sitios web modernos, interactivos y 
          visualmente atractivos.
        </Typography>
      </Box>
      
      <CustomCard
        title="React"
        text={`
          React es una biblioteca de JavaScript desarrollada por Meta (antes Facebook) para construir interfaces de usuario. 
          Está basada en componentes reutilizables y permite crear aplicaciones web interactivas de forma eficiente y declarativa. 
          Su enfoque principal es el renderizado eficiente del DOM mediante un sistema llamado Virtual DOM, lo que mejora el rendimiento 
          en comparación con manipulaciones directas del DOM tradicional.
        `}
        redirectTo="https://es.react.dev/"
      />

      <CustomCard
        title="MUI"
        text={`
          MUI (Material-UI) es una biblioteca de componentes de interfaz de usuario (UI) para React que 
          implementa el diseño de Material Design de Google. Ofrece una amplia colección de componentes 
          preconstruidos, personalizables y accesibles (como botones, tarjetas, diálogos y más), lo que 
          permite crear interfaces modernas y consistentes de forma rápida y eficiente. Además, MUI incluye 
          soporte para temas, estilos responsivos y animaciones.
        `}
        redirectTo="https://mui.com/"
      />

      <CustomCard
        title="React Router"
        text={`
          React Router es una biblioteca oficial de enrutamiento para aplicaciones construidas con React. 
          Permite manejar la navegación entre distintas vistas o páginas dentro de una aplicación de una 
          sola página (SPA, Single Page Application), sin necesidad de recargar el navegador.
        `}
        redirectTo="https://reactrouter.com/"
      />

      <CustomCard
        title="PokeAPI"
        text={`
          PokeAPI es una API REST pública y gratuita que proporciona información detallada sobre el universo 
          de Pokémon, incluyendo datos de criaturas, habilidades, tipos, movimientos, evoluciones, regiones 
          y mucho más. Es una herramienta muy popular para practicar consumo de APIs en proyectos con 
          tecnologías como React.
        `}
        redirectTo="https://pokeapi.co/"
      />

<CustomCard
        title="Axios"
        text={`
          Axios es una biblioteca basada en promesas para hacer solicitudes HTTP desde el navegador o 
          Node.js. Es ampliamente usada en aplicaciones React para consumir APIs, ya que ofrece una 
          sintaxis clara, soporte para peticiones async/await, y manejo de errores y configuraciones más 
          completo que fetch.
        `}
        redirectTo="https://axios-http.com/es/docs/intro"
      />
    </Box>
  );
};
