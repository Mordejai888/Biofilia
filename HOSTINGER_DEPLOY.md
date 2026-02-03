# Guía de Despliegue en Hostinger - Biofilia Cocreativa

## Archivos para subir

El sitio web está listo en la carpeta `/app/frontend/build/`. Esta carpeta contiene todos los archivos necesarios para el despliegue.

## Pasos para subir a Hostinger

### Opción 1: Usando el File Manager de Hostinger

1. **Accede a tu panel de Hostinger**
   - Ve a hPanel > Hosting > Tu plan

2. **Abre el File Manager**
   - Navega a la carpeta `public_html` (o la carpeta raíz de tu dominio)

3. **Sube los archivos**
   - Elimina cualquier archivo existente en `public_html`
   - Sube TODO el contenido de la carpeta `build/`:
     - `index.html`
     - `favicon.ico`
     - Carpeta `static/`
     - Carpeta `fonts/`
     - Carpeta `logos/`

### Opción 2: Usando FTP (FileZilla)

1. **Configura FTP en Hostinger**
   - Ve a hPanel > Archivos > Cuentas FTP
   - Crea una cuenta FTP o usa las credenciales existentes

2. **Conecta con FileZilla**
   - Host: tu-dominio.com o la IP de Hostinger
   - Usuario: tu usuario FTP
   - Contraseña: tu contraseña FTP
   - Puerto: 21

3. **Sube los archivos**
   - Navega a `public_html` en el servidor remoto
   - Arrastra el contenido de `build/` a `public_html`

## Configuración adicional para React Router

Hostinger necesita un archivo `.htaccess` para que las rutas de React funcionen correctamente.

### Crear archivo .htaccess en public_html:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Estructura de archivos en Hostinger

```
public_html/
├── index.html
├── favicon.ico
├── manifest.json
├── robots.txt
├── .htaccess (crear manualmente)
├── fonts/
│   └── (archivos de fuente Neulis Sans .otf)
├── logos/
│   └── (todos los logos e imágenes)
└── static/
    ├── css/
    │   └── main.[hash].css
    └── js/
        └── main.[hash].js
```

## Verificación post-despliegue

1. Accede a tu dominio
2. Verifica que todas las páginas funcionen:
   - Inicio: /
   - Nosotros: /nosotros
   - Servicios: /servicios
   - Portafolio: /portafolio
   - Contacta: /contacta
   - Política de privacidad: /politica-privacidad
   - Términos de servicio: /terminos-servicio
   - Cookie Policy: /cookie-policy

3. Verifica que las imágenes y logos carguen correctamente
4. Verifica que el formulario de contacto funcione (actualmente MOCK - necesita backend)

## Notas importantes

- **El formulario de contacto actualmente usa datos MOCK**. Para hacerlo funcional, necesitas:
  1. Implementar el backend con FastAPI
  2. Configurar el envío de emails con un servicio como SendGrid o SMTP
  3. El email configurado es: msalinas@biofilia.com.mx

- **SSL/HTTPS**: Asegúrate de que Hostinger tenga SSL activado para tu dominio

- **Caché**: Después de subir, limpia la caché del navegador para ver los cambios

## Compresión de archivos para transferencia

Si necesitas descargar los archivos, están en:
`/app/frontend/build/`

Para crear un ZIP:
```bash
cd /app/frontend && zip -r biofilia-build.zip build/
```
