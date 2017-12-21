---
layout: post
title: "Instalando Screenfetch"
date: 2017-12-21
tags: [screenfetch, Unix, GNU/Linux, Linux]
feature: https://www.tecmint.com/wp-content/uploads/2014/07/screenFetch-02.jpeg
comments: true
excerpt: "Screenfetch es un script que recopila información del sistema y la muestra de forma amigable al usuario..."
---

Screenfetch es un script que recopila información del sistema y la muestra de forma amigable al usuario. 
Es posible su instalación en sistemas Unix y unix-like, o cualquier otro que soporte [BASH](https://es.wikipedia.org/wiki/Screenfetch).

Cada sistema puede disponer de un medio de instalación de screenfetch, se encuentra en los repositorios de alguna distribución GNU/Linux por ejemplo, pero aquí veremos una instalación genérica que sirve para cualquier sistema similar.

Primero hay que acceder en la consola como super usuario:
~~~
$ su
~~~

Ahora se procede a descargar el script
~~~
# wget -O screenfetch https://git.io/vaHfR
~~~

Se copia el archivo a /usr/bin/
~~~
# cp screenfetch /usr/bin/
~~~

Finalmente se asignan permisos de ejecución
~~~
# chmod +x /usr/bin/screenfetch
~~~

Para ejecutarlo solo basta introducir en la consola
~~~
$ screenfetch
~~~

<div align="center">
  <figure>
	  <img src="https://amirtorrez.github.io/assets/media/devuan_screenfetch.png">
	  <figcaption>Visualización de screenfetch en Devuan.</figcaption>
  </figure>
</div>
<br>  


Si se quiere desinstalar, al ser un script solo debe eliminarse el archivo
~~~
# rmdir -r /usr/bin/screenfetch 
~~~
  
  
**Más información**  
<a href="https://github.com/KittyKatt/screenFetch/"><em>https://github.com/KittyKatt/screenFetch/</em></a>
