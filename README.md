# TAREA HTML, CSS Y JS

## INTRODUCCIÓN

En esta aplicación se realizan las tareas 1 y 2 de la asignatura de HTML Y CSS y la tarea 2 de la asignatura de JavaScript/TypeScript. 
En esta se realiza el front de una web de crowdfunding, en el que las personas pueden financiar los proyectos publicados en la web hasta 
mínimo llegar a la meta. 

Toda la funcionalidad y proyectos son de ejemplo, la funcionalidad del email solo envía un email de ejemplo y no te suscribe a ninguna newsletter 
como está escrito ya que los proyectos no son de verdad. Los juegos de mesa, tanto los textos como las imágenes están tomados de proyectos reales
de KickStarter con motivados puramente académicos para que la web tenga un aspecto más real.

## HTML

El HTML de este proyecto ha sido estructurado intentando seguir buenas prácticas y utilizando elementos como header, main, footer, section y article; que
ayudan a la correcta organización de la web. El mapa de la web se representaría de la siguiente forma:

### Index
- Barra de navegación
- Header con una breve introducción de la web
- Proyectos a financiar
  - Imágenes y texto informativo de cada proyecto
  - Tiempo restante, barra de progreso y dinero donado
  - Formulario para la donación
- Preguntas frecuentes
- Footer

Además, en el footer se hayan links al resto de html con los textos legales de ejemplo necesarios para una web como la política de cookies o las condiciones de uso.

## CSS

Todo el css está estructurado siguiendo la metodología BEM, como por ejemplo, "project" -> "project__container" -> "project__container__content", etc. Además, se han utilizado
el :hover en los links y botones para cambiar el estilo de estos cuando el ratón pasa por encima.

Se han creado media querys para adaptar la página web cuando la anchura es de menos de 1024px y para cuando es menor de 768px. Esto se ha hecho para que en formatos como el 
móvil y el de la tablet o parecidos la web se muestre complementamente adaptada.

## JS (FUNCIONALIDAD)

Toda la funcionalidad de los proyectos está hecho de forma escalable para que en el caso de que se quiera añadir nuevos proyectos, ya que en la temática de la web se debería dar el caso, simplemente
haya que añadir en el html el nuevo proyecto y cambiar el número de los ids del tiempo, barra de progreso y el formulario. Para hacer esto, cada funcionalidad empieza recogiendo todos los elementos y 
luego según el número del id identifica cual es el que tiene que interactuar.

- Carrusel de imágenes

  Se crean dinámicamente los indicadores con los que se puede navegar en el carrusel según el número de imágenes que estén añadidas al carrusel en el html. Además, está implementado que cada cierto
  intervalo se cambie la imagen, añadiendo o quitando la clase "active" en cada imagen e indicador.

- Tiempo restante, barra de progreso y meta de dinero

  Cuando se carga la página y se pulsa el botón del formulario (con todos los datos rellenos); lee los datos del localStorage, si está vacío toma los valores del data.json. Una vez tomados los datos
  necesarios, modifica en el html los textos del tiempo y el dinero y la anchura de la clase de la barra de progreso.

- Preguntas frecuentes
  
  Cuando se pulsa en cada pregunta, se expande y retrae la respuesta y se cambia el icono por el correspondiente.

- Newsletter en el footer

  Implementado con emailjs, se envía un email de ejemplo a la dirección de email que escriba el usuario al pulsar el botón. Después de un par de segundos, muestra una alerta mostrando si el email se
  ha enviado correctamente o no (revisar carpeta de correo no deseado).

## PUNTOS A MEJORAR / SIGUIENTES PASOS

- Hacer un back e implementar un base de datos para poder guardar el resto de datos de usuarios y poder llevar un seguimiento complemeto para saber los patrocinadores de cada proyecto.
- Implementar paginación y una barra de búsqueda para que sea viable añadir más proyectos.
- Un html propio para cada proyecto en el que se pueda añadir maçás información del mismo.
- Alguna otra sección de la web para ponerlas en la barra de navegación y quitar los proyectos como tal, ya que al poner más no sería escalable tenerlos en la barra de navegación.




  
