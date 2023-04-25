import { ChecklistsType } from "./types";
import {
  BodyList,
  ColumnItemList,
  ColumnTitleList,
  HeaderList,
  Label,
  RowList,
} from "./index.styled";
import { format } from "date-fns";
import { Button } from "@/components/atoms/Button";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileSearch,
  AiOutlineReconciliation,
} from "react-icons/ai";
import { Title } from "@/components/atoms/title/index.styled";
import { useContext, useState } from "react";
import { ChecklistContext } from "@/contexts/ChecklistContext";
import { useRouter } from "next/router";
import ModalDelete from "@/components/atoms/modalDelete";
import { FeedbackContext } from "@/contexts/FeedbackContext";

export default function List({ data }: ChecklistsType) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setChecklist, checklist } = useContext(ChecklistContext);
  const { showMessage } = useContext(FeedbackContext);
  const route = useRouter();

  function handlerDelete() {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/v1/checkList/${checklist._id}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        data && showMessage("Checklist excluido com sucesso!", false);
        setShowDeleteModal(false);
        route.push("/");
      })
      .catch((error) => {
        console.log(error);
        showMessage(
          "Ops, aconteceu algum erro,tente novamente mais tarde!",
          true
        );
        setShowDeleteModal(false);
      });
  }

  function openModalDelete() {
    setShowDeleteModal(true);
  }

  return (
    <>
      <ModalDelete
        show={showDeleteModal}
        handlerContinue={handlerDelete}
        onClose={() => setShowDeleteModal(false)}
      />
      <Title>
        <AiOutlineReconciliation />
        Checklists
      </Title>
      <HeaderList>
        <ColumnTitleList>Fazendeiro(a)</ColumnTitleList>
        <ColumnTitleList>Fazenda</ColumnTitleList>
        <ColumnTitleList>Cidade</ColumnTitleList>
        <ColumnTitleList>Data de Criação</ColumnTitleList>
      </HeaderList>
      <BodyList>
        {data?.map((item, index) => (
          <RowList key={index}>
            <ColumnItemList>
              <Label>Fazendeiro(a): </Label>
              {item?.from.name}
            </ColumnItemList>
            <ColumnItemList>
              <Label>Fazenda: </Label>
              {item?.farmer.name}
            </ColumnItemList>
            <ColumnItemList>
              <Label>Cidade: </Label>
              {item?.farmer.city}
            </ColumnItemList>
            <ColumnItemList>
              <Label>Data de criação: </Label>
              {format(new Date(String(item?.created_at)), "dd/mm/yyyy")}
            </ColumnItemList>
            <ColumnItemList>
              <Button
                outlined
                small
                onClick={() => {
                  setChecklist(item);
                  route.push("/exibir");
                }}
              >
                <AiOutlineFileSearch fontSize={30} />
              </Button>
              <Button
                outlined
                small
                onClick={() => {
                  setChecklist(item);
                  route.push("/editar");
                }}
              >
                <AiOutlineEdit fontSize={30} />
              </Button>
              <Button
                outlined
                small
                onClick={() => {
                  setChecklist(item);
                  openModalDelete();
                }}
              >
                <AiOutlineDelete fontSize={30} />
              </Button>
            </ColumnItemList>
          </RowList>
        ))}
      </BodyList>
    </>
  );
}
