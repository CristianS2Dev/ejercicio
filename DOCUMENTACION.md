# 📖 Documentación Completa de Ejercicios

## 🎯 Ejercicio 1: Operaciones con Arrays

### Objetivo
Aprender tipos primitivos, funciones tipadas y estructuras de control.

### Conceptos Clave
- **Tipos primitivos**: `number[]` para array de números
- **Parámetros tipados**: especificar el tipo de entrada
- **Tipo de retorno**: definir qué devuelve la función
- **Desestructuración**: retornar múltiples valores con objetos

### Explicación del Código
```typescript
function analizarNumeros(numeros: number[]): { max: number, promedio: number, total: number }
```
- `numeros: number[]` → recibe un array de números
- `: { max: number, ... }` → define el tipo de objeto que retorna
- Usa `Math.max()` para encontrar el mayor
- Calcula promedio con `reduce()` y divide entre la longitud

### Cómo ejecutar
```bash
tsc src/ejercicio1/ejercicio1.ts
node src/ejercicio1/ejercicio1.js
```

---

## 👥 Ejercicio 2: Jerarquía de Usuarios

### Objetivo
Aplicar POO: clases, herencia, interfaces y polimorfismo.

### Conceptos Clave
- **Clase base**: `User` con propiedades comunes
- **Herencia**: `extends` para crear subclases
- **Protected**: accesible en clase base y derivadas
- **Polimorfismo**: cada clase implementa `getRole()` diferente
- **Métodos específicos**: cada subclase tiene sus propias funciones

### Explicación del Código

#### Clase User (Base)
```typescript
protected name: string
```
- `protected` → accesible en User y sus hijos (Admin, Client)

#### Clase Admin
```typescript
super(name, email)
```
- Llama al constructor de la clase padre

#### Interfaces
```typescript
interface IPermissions { canEdit: boolean; canDelete: boolean }
```
- Define la estructura de datos sin implementación

### Cómo ejecutar
```bash
tsc src/ejercicio2/ejercicio2.ts
node src/ejercicio2/ejercicio2.js
```

---

## 🔐 Ejercicio 3: Sistema de Login

### Objetivo
Dominar el manejo de errores con try/catch y crear excepciones personalizadas.

### Conceptos Clave
- **Clases de Error personalizadas**: heredan de `Error`
- **Try/Catch**: captura y maneja excepciones
- **Throw**: lanza errores manualmente
- **Base de datos simulada**: objeto con usuarios

### Explicación del Código

#### Errores Personalizados
```typescript
class UserNotFoundError extends Error
```
- Extiende `Error` nativo de JavaScript
- `this.name = 'UserNotFoundError'` → identifica el tipo de error

#### Sistema de Login
```typescript
if (!user) throw new UserNotFoundError(username)
```
- Verifica si existe el usuario
- Lanza excepción específica si no existe

#### Manejo de Errores
```typescript
catch (error: any)
```
- Captura cualquier error lanzado
- `instanceof` verifica el tipo de error
- Responde de forma diferente según el tipo

### Cómo ejecutar
```bash
tsc src/ejercicio3/ejercicio3.ts
node src/ejercicio3/ejercicio3.js
```

---

## 🏗️ Ejercicio 4: Gestor de Mantenimientos SOLID

### Objetivo
Aplicar los 5 principios SOLID en un proyecto real.

### Principios Aplicados

#### S - Single Responsibility (Responsabilidad Única)
Cada clase tiene UNA sola razón para cambiar:
- `MachineRepository` → solo persistencia de datos
- `LoggerService` → solo registro de logs
- `AlertManager` → solo manejo de alertas

#### O - Open/Closed (Abierto/Cerrado)
Abierto a extensión, cerrado a modificación:
- Clase base `Maintenance` es abstracta
- `PreventiveMaintenance` y `CorrectiveMaintenance` extienden sin modificar
- Agregar nuevos tipos de mantenimiento no requiere cambiar código existente

#### L - Liskov Substitution (Sustitución de Liskov)
Las subclases pueden reemplazar a la base:
```typescript
const maintenance: Maintenance = new PreventiveMaintenance()
```
- Ambos tipos funcionan donde se espera `Maintenance`
- No rompen el comportamiento esperado

#### I - Interface Segregation (Segregación de Interfaces)
Interfaces pequeñas y específicas:
- `IRunnable` → solo para máquinas que corren
- `ICleanable` → solo para máquinas que se limpian
- Las clases implementan solo lo que necesitan

#### D - Dependency Inversion (Inversión de Dependencias)
Depender de abstracciones:
```typescript
constructor(private notificationService: INotificationService)
```
- `AlertManager` depende de interfaz, no de implementación concreta
- Puedes cambiar `EmailNotification` por `SMSNotification` sin modificar `AlertManager`

### Estructura del Código

```
ejercicio4/
├── interfaces/
│   ├── INotificationService.ts    → Abstracción para notificaciones
│   ├── IRunnable.ts                → Interfaz para máquinas ejecutables
│   └── ICleanable.ts               → Interfaz para máquinas limpiables
├── models/
│   ├── Maintenance.ts              → Clase base abstracta
│   ├── PreventiveMaintenance.ts    → Mantenimiento preventivo
│   ├── CorrectiveMaintenance.ts    → Mantenimiento correctivo
│   └── Machine.ts                  → Modelo de máquina
├── services/
│   ├── MachineRepository.ts        → Gestión de datos
│   ├── LoggerService.ts            → Registro de logs
│   ├── EmailNotification.ts        → Notificaciones por email
│   ├── SMSNotification.ts          → Notificaciones por SMS
│   └── AlertManager.ts             → Gestor de alertas
└── main.ts                         → Punto de entrada
```

### Cómo ejecutar
```bash
# Compilar todo el ejercicio 4
tsc

# Ejecutar
node dist/ejercicio4/main.js
```

---

## 🎓 Conceptos Generales de TypeScript

### Tipos Básicos
```typescript
let nombre: string = "Juan"
let edad: number = 25
let activo: boolean = true
let cualquiera: any = "puede ser cualquier cosa"
let desconocido: unknown = "más seguro que any"
```

### Interfaces vs Types
```typescript
// Interface (preferida para objetos)
interface Usuario {
    nombre: string
    edad: number
}

// Type (más flexible)
type ID = string | number
```

### Enums
```typescript
enum Estado {
    Activo = "ACTIVO",
    Inactivo = "INACTIVO"
}
```

### Modificadores de Acceso
- `public` → accesible desde cualquier lugar (por defecto)
- `private` → solo accesible dentro de la clase
- `protected` → accesible en la clase y sus hijos

### Abstract Classes
```typescript
abstract class Animal {
    abstract hacerSonido(): void  // Debe implementarse en hijos
}
```
