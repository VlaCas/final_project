export function confirmation(name) {
  return  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a Digital</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      .button:hover {
        cursor: pointer;
      }
    </style>
  </head>
  
  <body style="font-family: Arial, Helvetica, sans-serif;">
      <!-- Tablas -->
      <table style="width: 80%; margin: 1.5rem auto; background-color: #fff; padding: 1rem 1rem 2rem;">
          <tbody>
              <tr>
                  <td>
                      <!-- Tabla con fondo -->
                      <table style="background-color: #1B1B1B; border-radius: 1rem; padding: 0 1rem 3rem;">
                          <tbody>
                              <!-- Fila -->
                              <tr>
                                  <!-- Celdas -->
                                  <td style="display: flex; justify-content: center;">
                                  <a href="https://imgbb.com/"><img src="https://i.ibb.co/kMQd11B/logo-digital.png" alt="logo-digital" border="0" width="200px" height="200px"></a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <h2 style="font-size: 1rem; text-align: center; padding-bottom: 1.5rem; color: #FFFF; font-size: 2rem; font-weight: 900;">Bienvenid@ a <span style="color: #8A3BBF;">Digital</span></h2>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <p style="padding: 2rem 0.5rem; line-height: 1.5rem; text-align: center; color: #FFFF">Has creado tu cuenta exitosamente ${name.replace(/\b\w/g, match => match.toUpperCase())}, ya puedes ingresar a la plataforma y seguir los pasos para realizar tu compra. Haz clic en “Iniciar Sesión” para ingresar a la plataforma.</p>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="text-align: center; margin-top: 1rem;">
                                      <a href="http://localhost:5173/login" class="button" style="color: #fff; font-weight: bold; border: none; border-radius: 6px; background: rgb(138, 59, 191); background: linear-gradient(180deg,rgb(138, 59, 191) 0%,rgb(110, 55, 166) 60%); padding: 0.8rem 3rem; display: inline-block; text-decoration: none;">Iniciar Sesión</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </body>
  
  </html>`
};