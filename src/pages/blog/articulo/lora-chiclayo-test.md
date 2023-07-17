---
layout: "../../../layouts/PostLayout.astro"
title: "Proyecto de investigación realizado por estudiantes de UTP acerca de la tecnología LoRa"
draft: false
date: 2023-07-18
---

En este artículo, presentamos los resultados de nuestro proyecto final de la Facultad de Ingeniería, en el cual analizamos la comunicación mediante el uso de LoRa en la ciudad de Chiclayo. Utilizamos el Devkit LoRa RAK3172, el dispositivo AU-915-928MHz y el protocolo LoRaWAN para lograr nuestros objetivos.

## Objetivos del proyecto

Nuestro objetivo principal fue analizar la eficacia de la comunicación mediante LoRa en la ciudad de Chiclayo, evaluando su alcance y calidad de señal en diferentes puntos estratégicos. Además, buscamos identificar posibles obstáculos que pudieran afectar la comunicación y proponer soluciones para mejorarla.

## Metodología

Para llevar a cabo nuestro proyecto, realizamos pruebas de campo en diferentes puntos de la ciudad, utilizando el dispositivo AU-915-928MHz y el protocolo LoRaWAN. Registramos los datos de longitud, altura y RSSI en cada punto, y los analizamos para evaluar el alcance y calidad de la señal.

## Resultados

Los resultados de nuestras pruebas indican que la comunicación mediante LoRa es efectiva en la ciudad de Chiclayo, con un alcance promedio de 2 kilómetros y una calidad de señal aceptable en la mayoría de los puntos evaluados. Sin embargo, identificamos algunos obstáculos que pueden afectar la comunicación, como edificios altos y zonas con alta densidad de árboles.

Para mejorar la comunicación en estas zonas, proponemos la instalación de repetidores de señal y la utilización de antenas direccionales. Además, recomendamos la realización de pruebas adicionales en diferentes condiciones climáticas y horarios para evaluar la variabilidad de la señal.

## Tabla de datos de las pruebas

| Preset | RSSI    | SNR    | Distancia | Interferencia |
| ------ | ------- | ------ | --------- | ------------- |
| 4      | -97 Dbm | -3 Db  | 240 m     | Alta          |
| 5      | -94 Dbm | -14 Db | 350 m     | Alta          |
| 1      | -43 Dbm | 11 Db  | 90 m      | Media Alta    |
| 2      | -94 Dbm | -12 Db | 230 m     | Media Alta    |
| 3      | -85 Dbm | -4 Db  | 260 m     | Alta          |
| 4      | -95 Dbm | -17 Db | 320 m     | Alta          |
| 5      | -92 Dbm | -13 Db | 780 m     | Alta          |
| 5      | -94 Dbm | 0 Db   | 300 m     | Media         |
| 2      | -87 Dbm | -3 Db  | 420 m     | Baja          |
| 4      | -91 Dbm | -18 Db | 750 m     | Baja          |
| 5      | -87 Dbm | -5 Db  | 930 m     | Baja          |
| 5      | -81 Dbm | 5 Db   | 1.2 Km    | Baja          |

## Conclusiones

En conclusión, nuestro proyecto demostró que la comunicación mediante LoRa es una solución efectiva para establecer comunicación en la ciudad de Chiclayo. Sin embargo, es importante considerar los obstáculos que pueden afectar la señal y proponer soluciones para mejorarla. Esperamos que nuestros resultados sean útiles para futuros proyectos de comunicación en la ciudad.

## Adjuntos

- [Repositorio del proyecto](https://github.com/luisBazanDev/final-project-caf2)
- [Diagramas](https://github.com/luisBazanDev/final-project-caf2/blob/main/diagrams)

## Participantes del proyecto

- Bazán Rios Luis Enrique
- Salvador Silva Lindel Junior
- Coronado Bautista Rosa Esmeralda
- Llatas Otoya Sebastian
- Díaz Montalvo José
- Arce Cruzado José Omar
- Zeña Bances Cristhian
