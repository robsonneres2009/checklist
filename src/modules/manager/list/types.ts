export interface ChecklistsType {
  data?: Array<ChecklistType>;
}

export interface ChecklistType {
  type: string;
  amount_of_milk_produced: number | undefined;
  farmer: {
    city: string | number;
    name: string | number;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  number_of_cows_head: number | undefined;
  had_supervision: boolean | undefined;
  location: {
    latitude: number | undefined;
    longitude: number | undefined;
  };
  created_at?: string;
  updated_at?: string;
  __v?: number | undefined;
  _id?: number | undefined;
}
