# PokeEvoLution

ProyectoPokemonHAB

Link a la web= https://poke-evo-lution.vercel.app/

## Feedback marronero

`HTML:`

● Dentro de 'main' habría puesto un 'menu' con 4 'li' y en cada uno el botón de ayuda, el de tema, el de musica y la pokeball.

● Los 'button' de los tipos de pokemon los habría metido en un 'menu' y cada uno dentro de un 'li'. Si tieneis un array con los tipos de pokemon, crear la lista de botones con JavaScript, no la hagais a mano.

● Las imagenes de cada botón deberían estar dentro de la etiqueta 'button

● Habría separado en una 'section' todo lo del 'input', la cruceta, el diplay y los 2 botones

● A los botones les sobra el type="submit".

`CSS:`

● No tiene sentido posicionar todo con 'position: absolute'

● Habiendo creado el menu con los botones de ayuda, tema, musica y pokeball. Podias hacer una 'grid' de 5 columnas y 3 filas y así evitar hacer'position: absolute' con cada uno. Haces que el de ayuda esté en la 1ª columna y ocupe las 2 primeras casillas. 2ª columna libre, 3ª columna dejas la primera casilla libre y ocupas las otras 2 con el botón, 4ª columna haces lo mismo que en la 3ª y 5ª columna haces lo mismo que en la 3ª.

● La lista de los botones de los tipos de pokemon posicionadla con 'grid'

● Fijaros que al ir a pantalla pequeña los botones redondos se deforman

`JavaScript:`

● Los botones de la cruceta de arriba y abajo no funcionan cuando le doy para ver todos los pokemons de un tipo si no escribi nada antes en el 'input'

● Los botones de la cruceta de izquierda y derecha deberían seguir a partir del pokemon que haya seleccionado.

● En vez de cargar todo los archivos '.js' dentro del 'index.html' deberíais haber cargado un 'main.js' que ejecute las funciones principales y que importe las que le hagan falta de los demas archivos.

● En 'animacionCruceta.js': Al declarar la función 'desAnimarCruceta' decis que recibe 3 parametros, cuando la llamais solo le pasais 2 y solo usais 1. Declarais varias veces la función 'animarImg'. Mucho código repetido

● En 'animacionesBtn.js': Declarais varias veces las funciones 'aumentarTamanyoImg' y 'regresarTamanyoImg'. Mucho código repetido. No tiene sentido llamar a la función por cada botón. Deberíais haber hecho delegación de eventos; que sea el padre quien esté a la escucha del evento, detecte a que boton se le dio click, coger la id y llamar a la función.

● En 'audioBtn.js': No tiene sentido llamar a la función por cada botón para aplicarle el mismo sonido. Con seleccionar todos los botones a la vez con 'const botones = document.querySelectorAll('button');', recorrer 'botones' con un 'forEach' y poner cada boton a la escucha de un evento 'click' para que ejecute la funcion que aplica el sonido.

## HTML

-   Una imagen de pokedex centrada

EXTRA\_

-   Generar botones en los botones de la imagen para asiganrle funciones (Seleccionar por tipo, etc...)

## CSS

-   La lista desplegable del input debe ser infinita pero con un tamaño fijo con una barra desplegable para poder visualizar todos los resultados

## JS

-   Tendremos una imagen de la pokedex en el centro donde se pone el input a la derecha y sale la imagen con la info a la izquierda
-   Aplicar logica de que al coincidir una búqueda en el input, se muestren varias opciones
-   Asociar la logica de busqueda de la API para mostra modificando el html, imagen y datos del pokemon en cuestión (Nombre, altura, peso, puntos de vida, ataque, defensa, velocidad y tipos)
-
-   Que muestre una imagen frontal y trasera del puchamon

EXTRAS\_

-   Que aparezca una imagen del puchamon al lado del nombre de cada uno en la lista desplegable del input
-   Agregar fondo de gif
-   Agregar script de audio de fondo
-   Que todo el texto vaya apareciendo letra por letra
