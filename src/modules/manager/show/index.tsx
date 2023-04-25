import { Title } from "@/components/atoms/title/index.styled";
import { AiOutlineReconciliation } from "react-icons/ai";
import { ContentShow, RowShow, TitleShow, ValueShow } from "./index.styled";
import { useContext } from "react";
import { ChecklistContext } from "@/contexts/ChecklistContext";
import Map from "@/components/atoms/map";

export default function Show() {
  const { checklist } = useContext(ChecklistContext);

  return (
    <>
      <Title>
        <AiOutlineReconciliation />
        Visualizando Checklist
      </Title>
      <ContentShow>
        <RowShow>
          <TitleShow>Nome Fazendeiro(a):</TitleShow>
          <ValueShow>{checklist?.from?.name}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Nome Fazenda:</TitleShow>
          <ValueShow>{checklist?.farmer?.name}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Estado:</TitleShow>
          <ValueShow>{checklist?.farmer.city}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Cidade:</TitleShow>
          <ValueShow>{checklist?.farmer.city}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Teve supervisão no mês em curso:</TitleShow>
          <ValueShow>{checklist?.had_supervision ? "Sim" : "Não"}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Nome do(a) Supervidor(a):</TitleShow>
          <ValueShow>{checklist?.to?.name}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Tipo do checklist:</TitleShow>
          <ValueShow>{checklist?.type}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Quantidade de leite produzida no mês:</TitleShow>
          <ValueShow>{String(checklist?.amount_of_milk_produced)}</ValueShow>
        </RowShow>
        <RowShow>
          <TitleShow>Quantidade de cabeça de gado:</TitleShow>
          <ValueShow>{String(checklist?.number_of_cows_head)}</ValueShow>
        </RowShow>
        <RowShow className="full">
          <Map
            onChange={(values: { lat: string; lng: string }) => {}}
            showNameFarm={true}
          />
        </RowShow>
      </ContentShow>
    </>
  );
}
