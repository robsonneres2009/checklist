import { boolean, number, object, string } from "yup";

export const userSchema = object({
  type: string().required("Campo Obrigatório"),
  amount_of_milk_produced: number().required("Campo Obrigatório"),
  farmer: object({
    name: string().required("Campo Obrigatório"),
    city: string().required("Campo Obrigatório"),
    state: string().required("Campo Obrigatório"),
  }),
  from: object({
    name: string().required("Campo Obrigatório"),
  }),
  to: object({
    name: string().required("Campo Obrigatório"),
  }),
  number_of_cows_head: number().required("Campo Obrigatório"),
  had_supervision: boolean().required("Campo Obrigatório"),
  location: object({
    latitude: number().required("Campo Obrigatório"),
    longitude: number().required("Campo Obrigatório"),
  }),
});
