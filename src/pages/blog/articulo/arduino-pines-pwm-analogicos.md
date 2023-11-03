---
layout: "../../../layouts/PostLayout.astro"
title: "Pines analógicos vs digitales PWM"
draft: false
author: default
date: 2023-10-08
---

En arduino existen dos formas de tomar valores de entradas analogicas. Los pines analógicos (A0, A1, A2, A3, A4, A5 en Arduino UNO) y los pines digitales PWM (3, 5, 6, 10, 11 en Arduino UNO)

![esquema-pines-analogicos-digitales](/img/articulos/arduino/pines-analogicos-digitales.png)

## Pines digitales PWM

Los pines digitales PWM o Pulse Width Modulation (Modulación por ancho de pulsos) en Arduino pueden manejar valores de 8 bits, lo que nos da 256 posibles valores para las señales, pero Arduino interpreta los valores enteros de 0 a 255 donde 0 = 0 voltios y 255 = 5 voltios.

Sabiendo esto, podemos intuir que por ejemplo si el pin recibe un valor de 2.3 voltios, Arduino leerá un valor de 117.

## Pines analógios

Los pines analógicos en Arduino pueden manejar valores de 10 bits, lo que nos da 1024 posibles valores para las señales, pero Arduino interpreta los valores enteros de 0 a 1023 donde 0 = 0 voltios y 1023 = 5 voltios.

Sabiendo esto, podemos intuir que por ejemplo si el pin recibe un valor de 2.3 voltios, Arduino leerá un valor de 471.

## ¿Cuándo usar pines analógicos?

El uso de los pines analógicos está pensado para sensores donde se busque una amplia variedad de valores o donde se quiera más "resolución" debido a que maneja más valores que los PWM. Un ejemplo puede ser comparar 2.3 voltios y 2.31 voltios, si un pin PWM lee esos valores no habrá diferencia, en ambos casos devolverá 117. En cambio, un pin analógico leerá 471 y 473 respectivamente, lo que te permite detectar cambios más pequeños.

## ¿Cuándo usar pines digitales PWM?

Los pines digitales PWM se utilizan principalmente en sensores donde no se requiere una precisión extrema, sino que se prioriza la velocidad de respuesta y la eficiencia de recursos. Además, estos pines tienen la capacidad de no solo leer, sino también escribir valores. Un ejemplo de aplicación sería con LEDs, que, si tuvieran un valor analógico de 0 a 1023, el ojo humano no sería capaz de distinguir cambios mínimos, lo que resultaría en un gasto de recursos innecesario. Otro caso de uso puede ser un potenciómetro que controle el brillo de un LED. Si el potenciómetro está en un pin analógico y el LED en un pin PWM, se debe realizar una operación de conversión entre ambos valores, lo cual puede ser innecesario :/.

## Casos de uso
**Links a guías gratuitas*
- [Servo motores (SG90)](https://docs.arduino.cc/learn/electronics/servo-motors) - PWM
- [LDR](https://arduinogetstarted.com/tutorials/arduino-ldr-module) - Analógico
- [Potenciometro](https://docs.arduino.cc/learn/electronics/potentiometer-basics) - Analógico