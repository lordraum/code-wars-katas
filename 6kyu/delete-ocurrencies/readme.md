# Delete occurrences of an element if it occurs more than n times

Alice y Bob estaban de vacaciones. Ambos tomaron muchas fotos de los lugares que visitaron, y ahora quieren mostrarle a Charlie su colección completa. Sin embargo, a Charlie no le gustan estas sesiones, ya que el motivo generalmente se repite. No le gusta ver la Torre Eiffel 40 veces.

Dado una lista y un número, crea una nueva lista que contenga cada número de la lista como máximo N veces, sin cambiar el orden.
Por ejemplo, si el número de entrada es 2 y la lista de entrada es [1,2,3,1,2,1,2,3], tomas [1,2,3,1,2], omites los siguientes [1,2] ya que esto llevaría a que 1 y 2 estén en el resultado 3 veces, y luego tomas 3, lo que lleva a [1,2,3,1,2,3].

Con la lista [20,37,20,21] y el número 1, el resultado sería [20,37,21].

## Explicación chatgpt a mejor solución

La función que has proporcionado se llama deleteNth y parece ser una función de JavaScript que toma dos argumentos: un arreglo a y un número entero x. El propósito de esta función es eliminar elementos duplicados de a de manera que no haya más de x ocurrencias de un elemento específico en el resultado final. Aquí tienes una explicación línea por línea de cómo funciona esta función:

`let m = {};`: En esta línea, se declara una variable m que se inicializa como un objeto vacío {}. Esta variable se utilizará para realizar un seguimiento del número de veces que se ha encontrado cada elemento en el arreglo a.

`return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);`: En esta línea, se utiliza el método filter en el arreglo a. El método filter crea un nuevo arreglo que contiene solo los elementos que cumplan con cierta condición. La condición está definida en la función de flecha `(v => (m[v] = m[v] + 1 || 1) <= x)` que se pasa como argumento al filter.

v es el valor del elemento actual en el arreglo a que se está procesando.

`(m[v] = m[v] + 1 || 1)` realiza dos cosas: primero, incrementa el valor en el objeto m asociado con la clave v en 1. Si m[v] no existe (es undefined), se inicializa en 1. Esto se hace para llevar un registro de cuántas veces se ha encontrado cada elemento en el arreglo.

`(m[v] = m[v] + 1 || 1) <= x` verifica si el valor de m[v] (el número de veces que se ha encontrado v) es menor o igual a x, donde x es el número máximo de ocurrencias permitido para cada elemento.

Si la condición `(m[v] = m[v] + 1 || 1)` <= x se cumple, el elemento v se incluye en el nuevo arreglo resultante, ya que significa que aún no se ha superado el límite de ocurrencias. Si no se cumple la condición, el elemento se excluye del nuevo arreglo.

En resumen, la función deleteNth toma un arreglo a y un número x como entrada. Luego, itera sobre los elementos del arreglo y elimina los elementos duplicados de manera que no haya más de x ocurrencias de cada elemento en el resultado final. El resultado es un nuevo arreglo con estos elementos únicos que cumplen con la restricción de ocurrencias máximas x.