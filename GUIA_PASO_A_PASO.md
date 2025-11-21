# 📖 Guía Paso a Paso - Ejercicios TypeScript

Esta guía te llevará paso a paso por todos los ejercicios del proyecto.

---

## 🚀 PASO 1: Configuración Inicial

### 1.1 Instalar Node.js
1. Descargar de https://nodejs.org/
2. Instalar la versión LTS
3. Verificar instalación:
```bash
node --version
npm --version
```

### 1.2 Instalar TypeScript
```bash
npm install -g typescript
tsc --version
```

### 1.3 Configurar el proyecto
```bash
cd c:\Users\Usuario\Documents\ejercicio
npm init -y
npm install --save-dev typescript @types/node
```

### 1.4 Crear estructura de carpetas
```bash
mkdir src
mkdir src\ejercicio1
mkdir src\ejercicio2
mkdir src\ejercicio3
mkdir src\ejercicio4
mkdir dist
```

---

## 📝 PASO 2: Ejercicio 1 - Operaciones con Arrays

### Objetivo
Aprender tipos básicos, funciones tipadas y estructuras de control.

### 2.1 Crear el archivo
Crea `src/ejercicio1/ejercicio1.ts` con el código proporcionado.

### 2.2 Conceptos que aprenderás
- ✅ Tipos primitivos: `number`, `string`, `boolean`
- ✅ Arrays tipados: `number[]`
- ✅ Interfaces para estructurar datos
- ✅ Funciones con parámetros y retorno tipados
- ✅ Métodos de arrays: `reduce()`, `Math.max()`
- ✅ Manejo básico de errores

### 2.3 Compilar y ejecutar
```bash
# Opción 1: Compilar y ejecutar manualmente
tsc src/ejercicio1/ejercicio1.ts
node src/ejercicio1/ejercicio1.js

# Opción 2: Usar script de npm
npm run ejercicio1
```

### 2.4 Qué observar en la salida
- Lista de números analizada
- Número máximo encontrado
- Promedio calculado
- Total de elementos
- Manejo de errores con array vacío

### 2.5 Experimenta
Modifica el código para:
- Agregar más listas de números
- Calcular la mediana además del promedio
- Encontrar el número más pequeño
- Contar números pares e impares

---

## 👥 PASO 3: Ejercicio 2 - Jerarquía de Usuarios

### Objetivo
Aplicar Programación Orientada a Objetos con herencia y polimorfismo.

### 3.1 Crear el archivo
Crea `src/ejercicio2/ejercicio2.ts` con el código proporcionado.

### 3.2 Conceptos que aprenderás
- ✅ Clases y objetos
- ✅ Herencia con `extends`
- ✅ Constructor y `super()`
- ✅ Modificadores: `public`, `private`, `protected`
- ✅ Polimorfismo (sobrescritura de métodos)
- ✅ Interfaces para estructurar permisos y datos

### 3.3 Estructura de clases
```
User (clase base)
├── name: string
├── email: string
├── getInfo(): string
└── getRole(): string

Admin extends User
├── permissions: IPermissions
├── department: string
├── manageUsers(): void
└── showPermissions(): void

Client extends User
├── purchaseInfo: IPurchaseInfo
├── loyaltyPoints: number
├── makePurchase(amount): void
└── getDiscount(): number
```

### 3.4 Compilar y ejecutar
```bash
npm run ejercicio2
```

### 3.5 Qué observar en la salida
- Creación de diferentes tipos de usuarios
- Métodos específicos de cada clase
- Cliente realizando compras
- Transformación a VIP
- Lista polimórfica de usuarios

### 3.6 Experimenta
Modifica el código para:
- Crear una clase `Moderator` entre `User` y `Admin`
- Agregar método para cambiar email
- Implementar descuentos por niveles
- Agregar historial de acciones por usuario

---

## 🔐 PASO 4: Ejercicio 3 - Sistema de Login

### Objetivo
Dominar el manejo de errores con try/catch y excepciones personalizadas.

### 4.1 Crear el archivo
Crea `src/ejercicio3/ejercicio3.ts` con el código proporcionado.

### 4.2 Conceptos que aprenderás
- ✅ Clases de Error personalizadas
- ✅ Herencia de `Error`
- ✅ Try/Catch para capturar excepciones
- ✅ Throw para lanzar errores
- ✅ Instanceof para identificar tipos de error
- ✅ Enum para estados
- ✅ Map para almacenar datos

### 4.3 Errores personalizados
```typescript
UserNotFoundError       → Usuario no existe
InvalidPasswordError    → Contraseña incorrecta
AccountLockedError      → Cuenta bloqueada
```

### 4.4 Compilar y ejecutar
```bash
npm run ejercicio3
```

### 4.5 Qué observar en la salida
- Login exitoso
- Manejo de usuario inexistente
- Múltiples intentos fallidos
- Bloqueo automático de cuenta
- Desbloqueo y login exitoso

### 4.6 Experimenta
Modifica el código para:
- Agregar límite de tiempo para desbloqueo automático
- Implementar recuperación de contraseña
- Agregar validación de fuerza de contraseña
- Registrar intentos de login en un log

---

## 🏗️ PASO 5: Ejercicio 4 - Gestor de Mantenimientos SOLID

### Objetivo
Aplicar los 5 principios SOLID en un proyecto completo.

### 5.1 Crear la estructura
Crea todos los archivos en `src/ejercicio4/` según la estructura:

```
ejercicio4/
├── interfaces/
│   ├── INotificationService.ts
│   ├── IRunnable.ts
│   └── ICleanable.ts
├── models/
│   ├── Maintenance.ts
│   ├── PreventiveMaintenance.ts
│   ├── CorrectiveMaintenance.ts
│   └── Machine.ts
├── services/
│   ├── MachineRepository.ts
│   ├── LoggerService.ts
│   ├── EmailNotification.ts
│   ├── SMSNotification.ts
│   └── AlertManager.ts
└── main.ts
```

### 5.2 Principios SOLID explicados

#### S - Single Responsibility
**Una clase = una responsabilidad**

```
✅ MachineRepository    → Solo persistencia
✅ LoggerService        → Solo logging
✅ AlertManager         → Solo alertas
```

#### O - Open/Closed
**Abierto a extensión, cerrado a modificación**

```typescript
abstract class Maintenance { }

// Agregar nuevos tipos sin modificar Maintenance
class PreventiveMaintenance extends Maintenance { }
class CorrectiveMaintenance extends Maintenance { }
class PredictiveMaintenance extends Maintenance { } // ¡Nuevo!
```

#### L - Liskov Substitution
**Las subclases reemplazan a la clase base**

```typescript
const m1: Maintenance = new PreventiveMaintenance(...);
const m2: Maintenance = new CorrectiveMaintenance(...);
// Ambos funcionan igual donde se espera Maintenance
```

#### I - Interface Segregation
**Interfaces pequeñas y específicas**

```typescript
// ❌ MAL: Una interfaz grande
interface IMachine {
    run(): void;
    stop(): void;
    clean(): void;  // No todas las máquinas se limpian
}

// ✅ BIEN: Interfaces segregadas
interface IRunnable { run(); stop(); }
interface ICleanable { clean(); }
```

#### D - Dependency Inversion
**Depender de abstracciones, no de implementaciones**

```typescript
// ❌ MAL: Dependencia concreta
class AlertManager {
    private email = new EmailNotification();
}

// ✅ BIEN: Dependencia abstracta
class AlertManager {
    constructor(private notification: INotificationService) {}
}
```

### 5.3 Compilar y ejecutar
```bash
npm run ejercicio4
```

### 5.4 Qué observar en la salida
- Demostración de cada principio SOLID
- Creación y registro de máquinas
- Ejecución de mantenimientos
- Implementación de interfaces segregadas
- Cambio dinámico de servicio de notificación
- Resumen del sistema

### 5.5 Experimenta
Modifica el código para:
- Crear `PredictiveMaintenance` (nuevo tipo)
- Agregar `WhatsAppNotification` (nueva implementación)
- Crear `DatabaseLogger` que implemente logging a BD
- Agregar `MaintenanceScheduler` para programar automáticamente

---

## 🎓 PASO 6: Conceptos Avanzados

### 6.1 Generics (Genéricos)
```typescript
class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    findAll(): T[] {
        return this.items;
    }
}

const userRepo = new Repository<User>();
const machineRepo = new Repository<Machine>();
```

### 6.2 Decoradores
```typescript
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Llamando a ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}

class Service {
    @Log
    execute() {
        console.log("Ejecutando...");
    }
}
```

### 6.3 Utility Types
```typescript
// Partial: Hace todas las propiedades opcionales
type PartialUser = Partial<User>;

// Pick: Selecciona propiedades específicas
type UserPreview = Pick<User, 'name' | 'email'>;

// Omit: Omite propiedades específicas
type UserWithoutPassword = Omit<User, 'password'>;

// Readonly: Hace todas las propiedades de solo lectura
type ImmutableUser = Readonly<User>;
```

---

## 🐛 PASO 7: Debugging y Troubleshooting

### Errores Comunes

#### Error: "Cannot find module"
```bash
# Solución: Verificar rutas de importación
# Asegurarse de usar rutas relativas correctas
import { User } from "./models/User";
```

#### Error: "Property does not exist on type"
```bash
# Solución: Verificar tipos e interfaces
# Asegurarse de que la propiedad esté definida
```

#### Error de compilación
```bash
# Limpiar y recompilar
npm run clean
npm run build
```

### Tips de Debugging
1. Usar `console.log()` estratégicamente
2. Verificar tipos con hover en VSCode
3. Leer mensajes de error de TypeScript cuidadosamente
4. Usar breakpoints en VSCode (F9)

---

## 📚 PASO 8: Recursos Adicionales

### Documentación Oficial
- TypeScript: https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/

### Práctica Adicional
1. Implementar un sistema de gestión de biblioteca
2. Crear un e-commerce con carrito de compras
3. Desarrollar un sistema de reservas de hotel
4. Construir un gestor de tareas (TODO app)

### Siguiente Nivel
- Aprender frameworks: Angular, NestJS, Express con TypeScript
- Testing: Jest con TypeScript
- ORM: TypeORM, Prisma
- APIs: REST y GraphQL con TypeScript

---

## ✅ Checklist de Aprendizaje

### Básico
- [ ] Instalar y configurar TypeScript
- [ ] Compilar y ejecutar archivos .ts
- [ ] Entender tipos básicos
- [ ] Crear funciones tipadas
- [ ] Trabajar con arrays e interfaces

### Intermedio
- [ ] Crear clases y objetos
- [ ] Implementar herencia
- [ ] Usar modificadores de acceso
- [ ] Manejar errores con try/catch
- [ ] Crear errores personalizados

### Avanzado
- [ ] Aplicar principio S (Single Responsibility)
- [ ] Aplicar principio O (Open/Closed)
- [ ] Aplicar principio L (Liskov Substitution)
- [ ] Aplicar principio I (Interface Segregation)
- [ ] Aplicar principio D (Dependency Inversion)
- [ ] Diseñar arquitectura escalable
- [ ] Implementar inyección de dependencias

---

## 🎉 ¡Felicitaciones!

Has completado todos los ejercicios de TypeScript. Ahora tienes las bases para:
- Desarrollar aplicaciones robustas con TypeScript
- Aplicar principios SOLID en tus proyectos
- Diseñar arquitecturas escalables y mantenibles
- Trabajar profesionalmente con programación orientada a objetos

**Siguiente paso**: Aplicar estos conceptos en proyectos reales y frameworks modernos.
