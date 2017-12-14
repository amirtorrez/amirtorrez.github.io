---
layout: post
title: "Linux-Libre en Debian o derivados"
date: 2017-12-14
excerpt: "En este post, paso a mostrar como es la instalación del kernel Linux-Libre en alguna distro Debian o derivada..."
category: "GNU/Linux"
tags: [Linux, Linux-Libre, Debian, Devuan, Ubuntu, Libre, GNU, GNU/Linux, GNU/Linux-Libre]
feature: http://montoska.com/wp-content/uploads/2017/02/linux-libre-lnx.png
comments: true
---
En este post, paso a mostrar como es la instalación del kernel [Linux-Libre](https://es.wikipedia.org/wiki/Linux-libre) en alguna distro Debian o derivada, ya sea [Devuan](https://es.wikipedia.org/wiki/Devuan), Ubuntu, Mint, etc. Si bien la misma Debian (y Devuan) incluyen un kernel sin blobs, este es propio y no el kernel de la FSF, y, a diferencia de Debian/Devuan, Ubuntu y derivadas usan un kernel con blobs.

Como nota, [Trisquel](https://es.wikipedia.org/wiki/Trisquel_GNU/Linux) es una distro que se basa en Ubuntu, es decir es un Ubuntu sin blobs ni repositorios con software no libre, por lo que instalar Linux-Libre en Ubuntu no la convertirá en una distro totalmente libre, para ello, usa mejor la distro anteriormente mencionada.

Ahora, a lo que venimos.

Primero hay que añadir el repositorio de FSFLA:
~~~
    $ su
    # echo "#Linux-Libre" >> /etc/apt/sources.list
    # echo "deb http://linux-libre.fsfla.org/pub/linux-libre/freesh/ freesh main" >> /etc/apt/sources.list
~~~

Seguido, descargar las claves GPG:
~~~
    # wget https://jxself.org/gpg.inc
~~~

Revisar que la llave sea la correcta:
~~~
    # gpg --with-fingerprint gpg.inc
~~~

Debe mostrarse:
~~~
    Huella de clave: F611 A908 FFA1 65C6 9958 4ED4 9D0D B31B 545A 3198
~~~

Ahora toca instalar la llave y borrar el archivo anterior:
~~~
    # apt-key add gpg.inc && rm gpg.inc
~~~

Es momento de actualizar los repositorios:
~~~
    # apt update
~~~

Y finalmente instalar Linux-Libre
~~~
    # apt install linux-libre
~~~

Una vez instalado solo queda reiniciar el sistema e iniciar con el nuevo kernel.

<b>Más información:</b>  
[https://jxself.org/linux-libre/](https://jxself.org/linux-libre/)  
[https://www.fsfla.org/ikiwiki/selibre/linux-libre/](https://www.fsfla.org/ikiwiki/selibre/linux-libre/)
