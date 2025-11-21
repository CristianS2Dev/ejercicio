# Ejercicio 2: Jerarquía de Usuarios

## 📝 Descripción
Sistema de usuarios con tres niveles: User (base), Admin y Client, usando herencia y polimorfismo.

## 🎯 Conceptos Practicados
- Clases y objetos
- Herencia (`extends`)
- Polimorfismo (sobrescritura de métodos)
- Modificadores de acceso (`private`, `protected`, `public`)
- Interfaces para estructurar datos
- Método `super()` para llamar al constructor padre

## 🏗️ Estructura
```
User (clase base)
├── Admin (hereda de User)
│   └── Métodos: manageUsers(), showPermissions()
└── Client (hereda de User)
    └── Métodos: makePurchase(), getDiscount(), showPurchaseHistory()
```

## ▶️ Cómo ejecutar
```bash
tsc src/ejercicio2/ejercicio2.ts
node src/ejercicio2/ejercicio2.js
```

## 📚 Aprenderás
- Crear jerarquías de clases
- Usar herencia para reutilizar código
- Implementar polimorfismo
- Trabajar con modificadores de acceso
- Diseñar interfaces para datos complejos
