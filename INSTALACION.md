# 📦 Guía de Instalación de TypeScript

## Requisitos Previos
- Node.js instalado (versión 14 o superior)
- npm (viene con Node.js)

## Pasos de Instalación

### 1. Verificar Node.js y npm
```bash
node --version
npm --version
```

### 2. Instalar TypeScript globalmente
```bash
npm install -g typescript
```

### 3. Verificar instalación
```bash
tsc --version
```

### 4. Inicializar el proyecto
```bash
cd c:\Users\Usuario\Documents\ejercicio
npm init -y
npm install --save-dev typescript @types/node
```

### 5. Crear archivo de configuración
```bash
tsc --init
```

## Compilar y Ejecutar

### Compilar un archivo TypeScript
```bash
tsc archivo.ts
```

### Compilar todo el proyecto
```bash
tsc
```

### Ejecutar con Node.js
```bash
node archivo.js
```

### Opción: ts-node (ejecutar sin compilar)
```bash
npm install -g ts-node
ts-node archivo.ts
```

## Estructura del Proyecto
```
ejercicio/
├── src/
│   ├── ejercicio1/
│   ├── ejercicio2/
│   ├── ejercicio3/
│   └── ejercicio4/
├── dist/
├── tsconfig.json
├── package.json
└── README.md
```
