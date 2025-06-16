import { Box, Typography } from '@mui/material';
import { CustomCard } from "../../components/CustomCard";
import { libraries } from "../../data/libraries"

export const About = () => {
  return (
    <Box className="slide">
      <Box sx={{padding: 4, backgroundColor:'primary.main', mb: 2}}>
        <Typography variant='h2' sx={{mt: 2, textAlign: 'center'}}>HTML, CSS y JavaScript</Typography>
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
      {libraries.map(({title, text, redirectTo}, index) => (
        <CustomCard key={index}  title={title} text={text} redirectTo={redirectTo}/>
      ))}
      
    </Box>
  );
};
