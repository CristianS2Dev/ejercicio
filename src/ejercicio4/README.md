# Ejercicio 4: Gestor de Mantenimientos SOLID

## 📝 Descripción
Sistema completo de gestión de mantenimientos aplicando los 5 principios SOLID.

## 🎯 Principios SOLID Implementados

### S - Single Responsibility
- **MachineRepository**: Solo persistencia de datos
- **LoggerService**: Solo registro de logs
- **AlertManager**: Solo gestión de alertas

### O - Open/Closed
- **Maintenance** (abstracta) → extensible con nuevos tipos
- **PreventiveMaintenance** y **CorrectiveMaintenance** extienden sin modificar

### L - Liskov Substitution
- Ambas subclases pueden usarse donde se espera `Maintenance`
- No rompen el comportamiento esperado

### I - Interface Segregation
- **IRunnable**: Solo para máquinas ejecutables
- **ICleanable**: Solo para máquinas limpiables
- Las clases implementan solo lo necesario

### D - Dependency Inversion
- **INotificationService**: Abstracción para notificaciones
- **AlertManager** depende de la interfaz, no de implementaciones
- Inyección por constructor

## 🏗️ Estructura

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
├── main.ts
└── README.md
```

## ▶️ Cómo ejecutar

```bash
# Compilar todo el proyecto
tsc

# Ejecutar el ejercicio 4
node dist/ejercicio4/main.js
```

## 📚 Conceptos Clave

- **Clases abstractas**: Base para herencia
- **Interfaces**: Contratos de comportamiento
- **Inyección de dependencias**: Por constructor
- **Enums**: Para estados y tipos
- **Polimorfismo**: Múltiples implementaciones
- **Encapsulación**: Modificadores de acceso

## 🎓 Ventajas de SOLID

1. **Mantenibilidad**: Código fácil de mantener
2. **Escalabilidad**: Fácil agregar funcionalidades
3. **Testabilidad**: Fácil de probar
4. **Flexibilidad**: Cambiar implementaciones sin romper código
5. **Reutilización**: Componentes reutilizables
