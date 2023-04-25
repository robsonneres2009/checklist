import { AiOutlineReconciliation } from "react-icons/ai";
import { Title } from "@/components/atoms/title/index.styled";
import { Cities } from "@/utils/city";
import { FeedbackContext } from "@/contexts/FeedbackContext";
import { useContext } from "react";
import { ChecklistContext } from "@/contexts/ChecklistContext";
import { ChecklistType } from "../list/types";
import FormChecklist from "../components/formChecklist";
import { useRouter } from "next/router";

export default function Create() {
  const { showMessage } = useContext(FeedbackContext);
  const route = useRouter();

  function Submit(values: ChecklistType) {
    const idRandom = String(Math.floor(Math.random() * 1000000));
    const data = {
      checklists: [
        {
          ...values,
          _id: idRandom,
          had_supervision: Boolean(values.had_supervision),
          amount_of_milk_produced: Number(values.amount_of_milk_produced),
          number_of_cows_head: Number(values.number_of_cows_head),
          location: {
            latitude: Number(values.location.latitude),
            longitude: Number(values.location.longitude),
          },
          farmer: {
            ...values.farmer,
            city: Cities.filter(
              (city) => String(city.id) === values.farmer.city
            )[0].name,
          },
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
    };

    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/v1/checkList`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        data && showMessage("Cadastro feito com sucesso!", false);
        route.push("/");
      })
      .catch((error) => {
        console.log(error);
        showMessage(
          "Ops, aconteceu algum erro, verifique os campos e tente novamente!",
          true
        );
      });
  }

  return (
    <>
      <Title>
        <AiOutlineReconciliation />
        Novo Checklist
      </Title>
      <FormChecklist Submit={Submit} />
    </>
  );
}
