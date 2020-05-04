import BannerS1E1 from "../images/banner_s1e1"
import BannerS1E2 from "../images/banner_s1e2"
import BannerS1E3 from "../images/banner_s1e3"


export const seasons = {

  season01:{
    idValue: 'season01',
    name: 'Node.js En Vivo - Temporada 1',
    banner: BannerS1E1,
    episode01: {
      title: '[MNTD] Node.js En Vivo - Bases de Datos - SQlite',
      description: 'En esta transmisión aprenderemos sobre bases de datos con Node.js, empezando con SQLite. ¡Estaremos construyendo un manejador de passwords para la terminal!'
      
    },
    episode02: {
      title: '[MNTD] - Node.js En Vivo - Bases de Datos - Sequelize',
      description: 'En esta edición hablamos sobre el ORM Sequelize para abstraer el acceso a la base de datos',
      banner: BannerS1E2
    },
    episode03: {
      title: '[MNTD] Node.js En Vivo - Bases de Datos - PostgreSQL',
      description: 'En esta transmisión aprenderemos sobre bases de datos relacionales con Node.js, continuaremos con PostgreSQL',
      banner: BannerS1E3
    }
  },
  season02:{
    idValue: 'season02',
    title: 'Node.js En Vivo - Temporada 2',
    episode01: {
      title: '[MNTD] Node.js En Vivo - Bases de Datos - SQlite',
      description: 'En esta transmisión aprenderemos sobre bases de datos con Node.js, empezando con SQLite. ¡Estaremos construyendo un manejador de passwords para la terminal! ',
      banner: BannerS1E1
    },
    episode02: {
      title: '[MNTD] - Node.js En Vivo - Bases de Datos - Sequelize',
      description: 'En esta edición hablamos sobre el ORM Sequelize para abstraer el acceso a la base de datos',
      banner: BannerS1E2
    },
    episode03: {
      title: '[MNTD] Node.js En Vivo - Bases de Datos - PostgreSQL',
      description: 'En esta transmisión aprenderemos sobre bases de datos relacionales con Node.js, continuaremos con PostgreSQL',
      banner: BannerS1E3
    }
  }
}