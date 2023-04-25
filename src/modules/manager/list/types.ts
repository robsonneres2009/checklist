export interface ChecklistsType {
  data?: Array<ChecklistType>;
}

export interface ChecklistType {
  type: String;
  amount_of_milk_produced: Number | undefined;
  farmer: {
    city: String;
    name: String;
  };
  from: {
    name: String;
  };
  to: {
    name: String;
  };
  number_of_cows_head: Number | undefined;
  had_supervision: Boolean | undefined;
  location: {
    latitude: Number | undefined;
    longitude: Number | undefined;
  };
  created_at?: String;
  updated_at?: String;
  __v?: Number | undefined;
  _id?: Number | undefined;
}
