
# Prueba Técnica para TengoFree Studio

Basado en repositorio esqueleto: https://github.com/ionic-team/ionic-unit-testing-example

Objetivo

Construir una aplicación Móvil híbrida con Ionic que permita presentar el estado del clima a partir de la ubicación del usuario.
 
Objetivos Específicos
- Construir una aplicación Móvil Híbrida en Ionic que funcione correctamente en Android e iOS
- Obtener la información del clima a partir del consumo de un servicio REST.
 
Conceptos a evaluar
Tener una aplicación funcional en la cual se pueda obtener el estado del tiempo de acuerdo a la ubicación geográfica del usuario y en tiempo real, teniendo como premisas el manejo de una arquitectura, usabilidad (UX, UI), buenas prácticas (CLEAN CODE), Manejo de responsabilidades (Métodos y clases separadas) y la implementación de pruebas unitarias (UNIT TEST y FUNCTIONAL TEST).
Prototipo de la aplicación
 


Requerimientos Funcionales
- Implementar pruebas unitarias y funcionales.
- Soportar la orientación vertical (Portrait) y horizontal (Landscape).
- Se debe obtener la geolocalización del usuario, ya que esta es usada al momento de consultar el API. Tener en cuenta flujos alternos como que el usuario puede desactivar los permisos.
- Los datos se van a extraer de un api rest
o Consumir la siguiente url: https://api.darksky.net/forecast/ ea76e78f539ef7dae1879fd1a45d3628/[latitude],[longitude]
o Luego de consumir la url, la respuesta que se debe obtener, va contener la siguiente información, de la cual se deben usar las que están resaltadas en amarillo para mostrar al usuario.
 
{
          "latitude": 42.3601,
          "longitude": -71.0589,
          "timezone": "America/New_York",
          "currently": {
              "time": 1509993277,
              "summary": "Drizzle",
              "icon": "rain",
              "nearestStormDistance": 0,
              "precipIntensity": 0.0089,
              "precipIntensityError": 0.0046,
              "precipProbability": 0.9,
              "precipType": "rain",
              "temperature": 66.1,
              "apparentTemperature": 66.31,
              "dewPoint": 60.77,
              "humidity": 0.83,
              "pressure": 1010.34,
              "windSpeed": 5.59,
              "windGust": 12.03,
              "windBearing": 246,
              "cloudCover": 0.7,
              "uvIndex": 1,
              "visibility": 9.84,
              "ozone": 267.44
          },
 
 
- Presentar mensajes de error necesario bajo los posibles escenarios de escape del consumo del servicio.
- Se debe realizar la consulta de la API tanto al iniciar la aplicación, como al dar tap al botón de refrescar.
 
Entregables
Enviar url de git en el que se encuentre la prueba o un .zip con el código fuente.
Enviar .apk y opcional .ipa 
 
 



