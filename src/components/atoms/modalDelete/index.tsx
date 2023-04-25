import { Button } from "../button";
import {
  ContainerModal,
  GroupButtonModal,
  Shadow,
  TitleModal,
} from "./index.styled";

interface Props {
  show: boolean;
  onClose: () => void;
  handlerContinue: () => void;
}

export default function ModalDelete({ show, onClose, handlerContinue }: Props) {
  return show ? (
    <Shadow>
      <ContainerModal>
        <TitleModal>Deseja continuar e excluir esse Checklist? </TitleModal>
        <GroupButtonModal>
          <Button outlined onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handlerContinue}>Continuar</Button>
        </GroupButtonModal>
      </ContainerModal>
    </Shadow>
  ) : null;
}
