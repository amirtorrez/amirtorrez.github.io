---
layout: post
title: "Más privacidad y menos publicidad con archivo hosts"
date: 2018-02-24
last-activity: 2018-02-24 01:30
tags: [Publicidad, Rastreadores, Hosts, Ads]
feature: https://images-na.ssl-images-amazon.com/images/I/61fh7-Shu%2BL._SL1436_.jpg
comments: true
excerpt: Hoy en día es muy común encontrarse con sitios webs cargados de publicidad, excesiva en algunos casos, y por lo consiguiente también cargados con rastreadores...
last-activity: 2018-03-04 12:20
---

Hoy en día es muy común encontrarse con sitios webs cargados de publicidad, excesiva en algunos casos, y por lo consiguiente también cargados con rastreadores, de tal modo que la navegación en estos sitios web se vuelve lenta y pesada debido a la cantidad de elementos en el sitio (visibles u ocultos) así como demasiadas peticiones a servidores externos.

La publicidad hace rentable al sitio web, es decir, permite generar ingresos económicos mendiante elementos publicitarios en el sitio, sin embargo, muchos sitios web abusan de esto e insertan demasiada publicidad en las páginas que vuelve lento el acceso a esta sumado a los rastreadores que no son más que "servicios" insertados en el sitio web que recopilan información y la envían a terceros.

Los rastreadores mayormente no son intencionales, pues, con solo insertar algo de facebook o de google por ejemplo botones como like, compartir, cajas de comentarios, la publicidad misma (Google Adsense) también se insertan rastreadores. Los rastreadores como su nombre indican, son elementos en un sitio web que recopilan información del usuario que visita el sitio web para enviar dicha información a terceros, vease Google, Facebook, etc.

El problema de los rastreadores es que, aunque dejes de navegar en un determinado sitio web, aún sigue recopilando información, pues se queda en un segundo plano en las llamadas cookies, por ejemplo, aunque no uses facebook mientras visites un sitio web que contenga algún plugin de este, se genera una cookie que te rastreará hasta que la misma sea eliminada, entonces el problema es eliminar las cookies cada vez que cerramos un sitio o el navegador, ya que las cookies también permiten guardar sesiones.

Y ni hablar de los sitios web que insertan scripts de minado de criptomonedas, que usan tu cpu/ram para minar criptodivisas haciendo pesado no solo el navegador o el sitio, sino todo el equipo, sea smartphone o computadora de escritorio.

Afortunadamente existen bloqueadores de publicidad, filtradores de contenido (como Ublock) o anti rastreadores (como Privacy Badger) que permiten restringir el acceso remotos de servidores publicitarios o rastreadores, solo basta con descargar un programa a tu computadora o instalar un complemento/extensión en el navegador para contar con alguno. Pero otro problema aquí es que dichos programas o extensión aumentan el consumo de ram/cpu, por lo que al hacer uso de algún bloqueador/filtrador aumenta la velocidad de carga de un sitio web a la vez que aumenta el consumo haciendo pesado el navegador o el sistema operativo mismo.

Es en ese entonces donde entran los archivos [hosts](https://es.wikipedia.org/wiki/Archivo_hosts), los cuales no son más que un archivo que filtra direcciones web/ip de tal manera que funciona como un bloqueador/filtrador de los ya antes mencionados, solo que sin el inconveniente del consumo. Sin embargo, la creación de uno es la desventaja de este modo en comparación a instalar una extensión o programa, esto es debido a que para generar los filtros hay que saber que direcciones filtrar.

Es entonces donde existen sitios web que proveen sus propias listas en un archivo hosts listo para usar, sin embargo hay software como Adaway para Android que permite fusionar varios archivos hosts para crear uno desde varias listas de tal forma que se consiga una lista más grande con filtros nuevos. Para otros sistemas no conozco alguna software que permita hacer esto, pues el fusionar manualmente los archivos no es una tarea fácil, y en el momento no me he destinado a crear script alguno para realizar tal tarea, es entonces donde entra el objetivo de este post, compartir mi archivo hosts que uso en mi smartphone Android generado desde Adaway desde varias listas.

Puedes descargar el archivo hosts ya listo desde este enlace:<br>
<em><small>[https://github.com/amirtorrez/amirtorrez.github.io/raw/master/tools/hosts/hosts](https://github.com/amirtorrez/amirtorrez.github.io/raw/master/tools/hosts/hosts) (generado manualmente por mí)</small></em>
<em><small>[https://github.com/amirtorrez/adaway_ffos/raw/master/file/adaway/hosts](https://github.com/amirtorrez/adaway_ffos/raw/master/file/adaway/hosts) (generado por adaway)</small></em>


Las fuentes hosts (las listas que se usaron para generar el archivo de adaway) son:
~~~
 http://hosts-file.net/download/hosts.txt
 http://someonewhocares.org/hosts/hosts
 http://winhelp2002.mvps.org/hosts.txt
 http://www.malwaredomainlist.com/hostslist/hosts.txt
 https://adaway.org/hosts.txt
 https://amirtorrez.github.io/tools/hosts/disconnect-list1.txt
 https://amirtorrez.github.io/tools/hosts/disconnect-list2.txt
 https://hosts-file.net/ad_servers.txt
 https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext
 https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt
~~~

<b><em>NOTA: El archivo hosts generado por mí usa solo las fuentes: [mvps, someonewhocares,p gl yoyo, adaway, malwaredomainlist, disconnect]</em></b>

Para hacer uso del archivo hosts debes copiarlo a una ruta específica dependiendo el sistema, mayormente en esas rutas ya existe uno, por lo que hay que respaldarlo antes de copiar el archivo hosts nuevo. Las rutas donde se encuentra el archivo hosts son:

**Android**
> /system/etc/hosts

**GNU/Linux, Unix, BSD**
> /etc/hosts

**macOS, iOS**
> /private/etc/hosts

**Windows XP, 2003, Vista, 7, 8, 8.1, 10**
> C:\Windows\System32\drivers\etc\hosts

Para Android es necesario ser root, si no sabes como copiar el archivo hosts [revisa este script](https://github.com/amirtorrez/adaway_ffos/)


**Más información**<br>
[https://es.wikipedia.org/wiki/Archivo_hosts](https://es.wikipedia.org/wiki/Archivo_hosts)<br>
[https://adaway.org/](https://adaway.org/)<br>
[https://github.com/gorhill/uBlock/](https://github.com/gorhill/uBlock/)<br>
[https://github.com/disconnectme/disconnect](https://github.com/disconnectme/disconnect)<br>
[https://www.eff.org/es/privacybadger](https://www.eff.org/es/privacybadger)<br>
[https://github.com/keraf/NoCoin](https://github.com/keraf/NoCoin)<br>
[https://www.muycomputer.com/2017/09/17/the-pirate-bay-secuestra-cpu/](https://www.muycomputer.com/2017/09/17/the-pirate-bay-secuestra-cpu/)<br>
[https://www.muycomputer.com/2015/08/10/privacy-badger/](https://www.muycomputer.com/2015/08/10/privacy-badger/)<br>
[https://support.mozilla.org/es/kb/navegacion-privada-con-proteccion-contra-rastreo](https://support.mozilla.org/es/kb/navegacion-privada-con-proteccion-contra-rastreo)<br>
[https://www.muycomputer.com/2015/11/17/activar-do-not-track-navegadores-web/](https://www.muycomputer.com/2015/11/17/activar-do-not-track-navegadores-web/)<br>
[https://www.genbeta.com/a-fondo/como-evitar-que-una-web-te-rastree-utilizando-chrome-firefox-y-safari](https://www.genbeta.com/a-fondo/como-evitar-que-una-web-te-rastree-utilizando-chrome-firefox-y-safari)
