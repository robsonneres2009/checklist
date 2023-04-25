import Link from "next/link";
import { ContainerFooter } from "./index.styled";

export function Footer() {
  return (
    <ContainerFooter>
      <p>
        Checklists, desenvolvido por:{" "}
        <Link href="https://www.linkedin.com/in/robson-neres-725b147b/">
          Robson Neres
        </Link>
      </p>
    </ContainerFooter>
  );
}
