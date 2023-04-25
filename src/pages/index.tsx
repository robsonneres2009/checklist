import Head from "next/head";
import { AiOutlineFileAdd } from "react-icons/ai";
import List from "@/modules/manager/list";
import { Checklists } from "@/modules/manager/list/types";
import { ButtonFloat } from "@/components/atoms/buttonFloat";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ChecklistContext, emptyChecklist } from "@/contexts/ChecklistContext";
import Geolocation from "@/utils/getGeolocation";

export default function Home({ data }: Checklists) {
  const { setChecklist, setGeolocaltion } = useContext(ChecklistContext);
  const route = useRouter();

  function Geolocation() {
    // Verifica se o navegador suporta geolocalização
    if (navigator.geolocation) {
      // Chama a função getCurrentPosition para obter a posição do usuário
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setGeolocaltion({ lat: String(latitude), lng: String(longitude) });
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

  useEffect(() => {
    Geolocation();
  }, []);

  return (
    <>
      <Head>
        <title>Checklists</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ButtonFloat
          onClick={() => {
            setChecklist(emptyChecklist);
            route.push("/criar");
          }}
        >
          <AiOutlineFileAdd />
        </ButtonFloat>
        <List data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/v1/checkList`);
  const data = await res.json();
  return { props: { data } };
}