import { AiOutlineReconciliation } from "react-icons/ai";
import { Title } from "@/components/atoms/title/index.styled";
import { ChecklistType } from "../list/types";
import { useContext } from "react";
import { FeedbackContext } from "@/contexts/FeedbackContext";
import { Cities } from "@/utils/city";
import FormChecklist from "../components/formChecklist";
import { useRouter } from "next/router";

export default function Edit() {
  const { showMessage } = useContext(FeedbackContext);
  const route = useRouter();

  function Submit(values: ChecklistType) {
    const data = {
      type: String(values.type),
      from: {
        name: values.from.name,
      },
      to: {
        name: values.to.name,
      },
      had_supervision: Boolean(values.had_supervision),
      amount_of_milk_produced: Number(values.amount_of_milk_produced),
      number_of_cows_head: Number(values.number_of_cows_head),
      location: {
        latitude: Number(values.location.latitude),
        longitude: Number(values.location.longitude),
      },
      farmer: {
        name: values.farmer.name,
        city: Cities.filter((city) => String(city.id) === values.farmer.city)[0]
          .name,
      },
      created_at: new Date(),
      updated_at: new Date(),
    };

    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/v1/checkList/${values._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        data && showMessage("Checklist editado com sucesso!", false);
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
        Editando Checklist
      </Title>
      <FormChecklist Submit={Submit} />
    </>
  );
}
