import { ChecklistContext } from "@/contexts/ChecklistContext";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { userSchema } from "../../create/validations";
import { Cities } from "@/utils/city";
import { Form } from "./index.styled";
import { Input } from "@/components/atoms/input";
import Select from "@/components/atoms/select";
import { State } from "@/utils/states";
import { Button } from "@/components/atoms/Button";
import { ChecklistType } from "../../list/types";

interface Props {
  Submit: (values: ChecklistType) => void;
}

export default function FormChecklist({ Submit }: Props) {
  const { checklist } = useContext(ChecklistContext);
  const { geolocaltion } = useContext(ChecklistContext);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    function handleWindowLoad() {
      setIsWindowLoaded(true);
    }

    window.addEventListener("load", handleWindowLoad);
    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  const Map = dynamic(() => import("@/components/atoms/map"), { ssr: false });

  const stateWithCity = () => {
    const city = Cities.filter(
      (city) => city?.name === checklist?.farmer?.city
    )[0];
    const state = State.filter((state) => state?.id === city?.state?.id)[0]?.id;

    return state;
  };

  const cityWithState = () => {
    const city = Cities.filter(
      (city) => city?.name === checklist?.farmer?.city
    )[0]?.id;

    return city;
  };

  const formik = useFormik({
    initialValues: {
      ...checklist,
      farmer: {
        name: checklist.farmer.name,
        state: checklist.farmer.city ? stateWithCity() : "",
        city: checklist.farmer.city ? cityWithState() : "",
      },
      location: {
        latitude: geolocaltion.lat,
        longitude: geolocaltion.lng,
      },
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      Submit(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="from.name"
        name="from.name"
        label="Nome do Fazendeiro(a)"
        value={formik.values.from?.name}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.from?.name}
        fixedLabel
      />
      <Input
        id="farmer.name"
        name="farmer.name"
        label="Nome da Fazendeira"
        value={formik.values.farmer?.name}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.from?.name}
        fixedLabel
      />
      <Select
        id="farmer.state"
        label="Estado"
        name="farmer.state"
        value={formik.values.farmer?.state}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.farmer?.state}
        options={State}
        fixedLabel
      />
      <Select
        id="farmer.city"
        label="Cidade"
        name="farmer.city"
        value={formik.values.farmer.city}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.farmer?.city}
        options={Cities.filter(
          (city) =>
            String(city?.state?.id) === String(formik?.values?.farmer?.state)
        )}
        fixedLabel
      />
      <Select
        id="had_supervision"
        label="Teve supervisão no mês em curso"
        name="had_supervision"
        value={formik.values.had_supervision}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.had_supervision}
        options={[
          { id: true, name: "Sim" },
          { id: false, name: "Não" },
        ]}
        fixedLabel
      />
      <Input
        id="to.name"
        name="to.name"
        label="Nome do(a) Supervidor(a)"
        value={formik.values.to?.name}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.to?.name}
        fixedLabel
      />
      <Select
        id="type"
        label="Tipo do checklist"
        name="type"
        value={formik.values.type}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.type}
        options={[
          { id: "BPA", name: "BPA" },
          { id: "Antibiótico", name: "Antibiótico" },
          { id: "BPF", name: "BPF" },
        ]}
        fixedLabel
      />
      <Input
        type="number"
        id="amount_of_milk_produced"
        name="amount_of_milk_produced"
        label="Quantidade de leite produzida no mês"
        value={formik.values.amount_of_milk_produced}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.amount_of_milk_produced}
        fixedLabel
      />
      <Input
        type="number"
        id="number_of_cows_head"
        name="number_of_cows_head"
        label="Quantidade de cabeça de gado"
        value={formik.values.number_of_cows_head}
        handleChange={formik.handleChange}
        errorMsg={formik.errors.number_of_cows_head}
        fixedLabel
      />

      <Map
        onChange={(values: { lat: string; lng: string }) => {
          formik.setFieldValue("location.longitude", values.lng);
          formik.setFieldValue("location.latitude", values.lat);
        }}
      />

      <Button type="submit">Salvar</Button>
    </Form>
  );
}
