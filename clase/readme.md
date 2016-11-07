# Árbol de Carpetas
app 
  clientes
  movimientos 
    nuevo
    lista
  pepe
  shared 

# Árbol de Módulos 
## { imports:[array de modulos], declares:[array de componentes] , exports:[]}
app [root, pepe]
  movimientos [movimientos, nuevo, lista]
    shared [shared]
  clientes [clientes]
    shared [shared]

# Árbol de Componentes 
root
  movimientos
    nuevo
    lista
      shared
  pepe
  clientes
    shared
