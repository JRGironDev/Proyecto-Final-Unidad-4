# Proyecto-Final-Unidad-4
Proyecto final para el curso ***"Introducción a la programación de computadoras 2022"***

El funcionamiento del programa es el siguiente:

1. Se le pregunta al usuario una serie de consultas para poder determinar que es elegible a optar a una cotización y para poder determinar los recargos que se sumarán al precio base. Estos recargos son:
 - La edad de la persona a asegurar
 - Si tiene conyuge, la edad del conyuge
 - Si tiene hijos, la cantidad de hijos

2. Al tener las respuestas a las consultas realizadas al usuario se utilizán condicionales if, else if, para determinar en qué rangos se encuentran las respuestas del usuario, depende de esto se cobrán distintos porcentajes de recargo que se sumarán al precio base.

4. Al precio base se suman los recargos totales para determinar el precio final de la cotización

5. Por último se muestra una serie de mensajes desplegados en la pantalla, por medio de alertas, para indicarle al usuario el nombre de la persona a asegurar, el recargo total y el precio final.
 
## Mejoras

Considero que las mejoras podrían ser las siguientes:

1. Colocar una validación explicita si el usuario es menor de edad, si es así que ya no siga preguntando el resto de consultas, ya que no tiene sentido que el usuario siga contestando si no se le entregará una cotización.
2. Utilizar funciones para reducir un poco el código y hacerlo más entendible
3. Hacer unit test para el QA