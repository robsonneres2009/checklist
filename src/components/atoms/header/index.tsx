import Image from "next/image";

import logotipo from "/public/logotipo.png";
import { ContainerHeader } from "./index.styled";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();

  return (
    <ContainerHeader>
      {route.asPath !== "/" && (
        <Link href="/">
          <AiOutlineArrowLeft fontSize={20} />
        </Link>
      )}
      <Link href="/">
        <Image src={logotipo} alt="logotipo" width={120} />
      </Link>
    </ContainerHeader>
  );
}
