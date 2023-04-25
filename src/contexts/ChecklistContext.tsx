import { ChecklistType } from "@/modules/manager/list/types";
import { Dispatch, SetStateAction, createContext } from "react";

export interface ChecklistContextType {
  checklists: Array<ChecklistType>;
  checklist: ChecklistType;
  setChecklists: (values: Array<ChecklistType>) => void;
  setChecklist: (values: ChecklistType) => void;
  setGeolocaltion: (values: { lat: string; lng: string }) => void;
  geolocaltion: { lat: string; long: string } | any;
}

export const emptyChecklist = {
  type: "",
  amount_of_milk_produced: undefined,
  farmer: {
    name: "",
    city: "",
    state: "",
  },
  from: {
    name: "",
  },
  to: {
    name: "",
  },
  number_of_cows_head: undefined,
  had_supervision: undefined,
  location: {
    latitude: undefined,
    longitude: undefined,
  },
};

export const ChecklistContext = createContext<ChecklistContextType>({
  checklist: emptyChecklist,
  checklists: [],
  setChecklists: () => {},
  setChecklist: () => {},
  setGeolocaltion: () => {},
  geolocaltion: { lat: "", lng: "" },
});
