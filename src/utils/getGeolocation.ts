export default function Geolocation() {
  // Verifica se o navegador suporta geolocalização
  if (navigator.geolocation) {
    // Chama a função getCurrentPosition para obter a posição do usuário
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return { latitude, longitude };
        // Faça algo com as coordenadas aqui, por exemplo, enviar para o servidor
      },
      (error) => {
        console.error(error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  // Solicita permissão de localização do usuário
  navigator.permissions.query({ name: "geolocation" }).then((permission) => {
    if (permission.state === "granted") {
      console.log("Permission granted");
    } else if (permission.state === "prompt") {
      console.log("Permission prompt");
    } else {
      console.log("Permission denied");
    }
  });
}
