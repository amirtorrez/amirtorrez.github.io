---
layout: post
title: "Linux-Libre en Debian o derivados"
date: 2017-12-14
excerpt: "..."
category: "GNU/Linux"
tags: [Linux, Linux-Libre, Debian, Devuan, Ubuntu, Libre, GNU, GNU/Linux, GNU/Linux-Libre]
feature: http://montoska.com/wp-content/uploads/2017/02/linux-libre-lnx.png

lalala en desarrollo

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
