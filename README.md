# Estructura del proyecto

- config: Carpeta que contiene los archivos de configuración de webpack y de jest

  - jest es el framework usado para los test
  - webpack es el empaquetador usado para compilar al aplicación y crear los archivos que se subirán a producción
    base.js tiene la configuración común y dev.js y prod.js tienen las configuraciones específicas para desarrollo y producción

- cypress: Carpeta que contiene los test de integración realizados con el framework cypress
- src: Carpeta principal del proyecto
  - assets es la carpeta que contiene las imágenes usadas en la app
  - common contiene componentes comunes a la app, el alert personalizado, un text-field personalizado y el stepper para la modal de coger citas y los componentes
    de cada paso del stepper como es seleccionar tratamiento, seleccionar cita y confirmar cita
  - core contiene archivos comunes a la app como es el contexto donde se guardan datos comunes a la app, dates tiene una función para formatear las fechas,
    router tiene la configuración de las rutas y theme la configuración del tema de material ui
  - layouts tiene componentes comunes a la app para el diseño del layout como el header, footer o el componente para centrado
  - scenes contiene un componente para cada ruta de la app, la función de la scene es sólo mostrar el layout y llamar al componente correspondiente
  - pods: cada pod corresponde al componente que llama cada scene, cada scene llama al componente.container correspondiente que contiene la lógica del componente
    el componente container llama al componente.component pasandole las propiedades necesarios y éste es el que se encarga de pintarlo. Dentro de cada pod puede haber
    una carpeta api que contiene llamadas a nuestra api para obtener datos y una interface con las propiedades del objeto traído de la api. También cada pod puede contener
    un componente.validation que contiene las reglas de validación si fuese nesario, un componente.vm.ts que contiene la interface con las propiedades que usaremos
    en nuestro componente y si es necesario un componente.mapper.ts que usamos para mapear el objeto recibido de la api al viewmodel que usaremos en la app.

En las carpeta uso un barrel para exportar lo que necesito para ello se crear un archivo index.js con el export correspondiente.
Por ejemplo en cada pod sólo necesito exportar el componente.container que es el que llama la scene, todo el resto de la lógica del componente se queda encapsulado y no es accesible desde fuera.

los archivos dev.env y prod.env tiene las variables de entorno que usa webpack cuando compila la aplicación

tsconfig.json tiene la configuración de TypeScript
package.json tiene las dependencias de nuestro proyecto, las que se usan sólo para desarrollo están en el apartado devDependencies
cypress.json tiene la configuración del framework para test de integración cypress
.gitignore contiene las carpetas y archivos que no queremos que se suban al repositorio de github
.babelrc tiene los presets que necesita babel para transpilar la app
.eslint.. tiene la configuración de eslint
