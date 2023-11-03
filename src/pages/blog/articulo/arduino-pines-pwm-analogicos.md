---
layout: "../../../layouts/PostLayout.astro"
title: "Pines analógicos vs digitales PWM"
draft: true
author: default
date: 2023-10-08
---

En arduino existen dos formas de tomar valores de entradas analogicas. Los pines analógicos (A0, A1, A2, A3, A4, A5 en Arduino UNO) y los pines digitales PWM (3, 5, 6, 10, 11 en Arduino UNO)

![esquema-pines-analogicos-digitales](/img/articulos/arduino/pines-analogicos-digitales.png)

## Pines digitales PWM

Los pines digitales PWM o Pulse Width Modulation*(Modulación por ancho de pulsos)* en arduino pueden manejar valores de 8 bits lo que nos da 256 posibles valores para las señales, pero arduino interpreta los valores enteros de 0 a 255 donde 0 = 0 voltios y 255 = 5 voltios.

Sabiendo esto podemos intuir que por ejemplo si el pin recibe un valor de 2.3 voltios arduino leera un valor de 117.


## Pines analogios

Los pines analogios en arduino pueden manejar valores de 10 bits lo que nos da 1024 posibles valores para las señales, pero arduino interpreta los valores enteros de 0 a 1023 donde 0 = 0 voltios y 1023 = 5 voltios.

Sabiendo esto podemos intuir que por ejemplo si el pin recibe un valor de 2.3 voltios arduino leera un valor de 471

## ¿Cuando usar pines analogicos?

El uso de los pines analogicos estan pensados para sensores donde se busque una amplia variedad de valores o donde se quiera más *"resolusión"* debido a que maneja más valores que los PWM. Un ejemplo puede ser comparar 2.3 voltios y 2.31 voltios, si un pin PWM lee esos valores no habrá diferencia, en ambos casos devolvera 117. En cambio un pin analogico leera 471 y 473 respectivamente, lo que te permite detectar cambios más pequeños.