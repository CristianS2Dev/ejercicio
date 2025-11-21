# Ejercicio 3: Sistema de Login

## 📝 Descripción
Sistema de autenticación que arroja excepciones personalizadas para diferentes errores.

## 🎯 Conceptos Practicados
- Clases de Error personalizadas (`extends Error`)
- Try/Catch para manejo de excepciones
- Throw para lanzar errores
- Enum para estados
- Map para almacenar datos
- Instanceof para identificar tipos de error

## 🔒 Errores Implementados
1. **UserNotFoundError**: Usuario no existe
2. **InvalidPasswordError**: Contraseña incorrecta
3. **AccountLockedError**: Cuenta bloqueada por intentos fallidos

## 🏗️ Características
- Máximo 3 intentos de login
- Bloqueo automático de cuenta
- Desbloqueo de cuenta
- Registro de intentos fallidos

## ▶️ Cómo ejecutar
```bash
tsc src/ejercicio3/ejercicio3.ts
node src/ejercicio3/ejercicio3.js
```

## 📚 Aprenderás
- Crear errores personalizados
- Manejar excepciones con try/catch
- Lanzar errores con throw
- Identificar tipos de error con instanceof
- Diseñar sistemas de autenticación básicos
