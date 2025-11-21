Objetivo 1: Comprender los tipos básicos y la configuración del entorno
Contenidos
- Tipos primitivos: string, number, boolean, any, unknown
- Estructuras de control: if, for, while
- Funciones tipadas
- Configuración del proyecto y tsconfig.json

Objetivo 2: Aplicar la Programación Orientada a Objetos con TypeScript
Contenidos
- Clases y objetos
- Interfaces
- Herencia y polimorfismo
- Clases abstractas

Objetivo 3: Aprender a estructurar valores constantes y manejar errores
Contenidos
- Creación y uso de enum
- Uso de try/catch
- Tipos de errores personalizados

Objetivo 4: Comprender y aplicar los 5 principios SOLID en un proyecto TypeScript
Principios SOLID
S - Single Responsibility
Cada clase o módulo debe tener una sola responsabilidad.
O - Open/Closed
El código debe estar abierto a extensión y cerrado a modificación.
L - Liskov Substitution
Las subclases deben poder reemplazar a sus clases base sin alterar el comportamiento.
I - Interface Segregation
Las interfaces deben ser pequeñas y específicas.
D - Dependency Inversion
Se debe depender de abstracciones y no de implementaciones concretas.

Ejercicios
☒ Ejercicio 1
Crear un script en TypeScript que reciba una lista de números y devuelva:
- El número más grande
- El promedio
- El total de elementos

Ejercicio 2
Crear una jerarquía de clases que representen usuarios:
- User
- Admin
- Client
Usando herencia y métodos personalizados.

Ejercicio 3
Simular un sistema de login que arroje excepciones si:
- El usuario no existe
- La contraseña es incorrecta

Ejercicio 4 - Práctico Integrador SOLID
Proyecto: Gestor de Mantenimientos SOLID
Crea un mini sistema en TypeScript que gestione mantenimientos de máquinas aplicando todos los principios SOLID.
Requisitos
S - Responsabilidad Única
- Crea un MachineRepository que maneje solo persistencia.
- Crea un LoggerService para registrar acciones.
O - Abierto/Cerrado
- Crea una clase base Maintenance con subclases Preventive y Corrective.
L - Sustitución de Liskov
- Ambas subclases deben poder usarse donde se espera Maintenance.
I - Segregación de Interfaces
- Crea interfaces pequeñas: IRunnable, ICleanable.
- Implementa en clases Machine según corresponda.
D - Inversión de Dependencias
- Crea una interfaz INotificationService e implementa EmailNotification y SMSNotification.
- Inyecta la dependencia en AlertManager a través del constructor.
