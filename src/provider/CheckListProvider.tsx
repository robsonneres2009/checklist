import {
  ChecklistContext,
  ChecklistContextType,
  emptyChecklist,
} from "@/contexts/ChecklistContext";
import { ChecklistType } from "@/modules/manager/list/types";
import { useState } from "react";

interface FeedbackContextProviderProps {
  children: React.ReactNode;
}

export function ChecklistContextProvider({
  children,
}: FeedbackContextProviderProps) {
  const [checklists, _setChecklists] = useState<ChecklistType[]>([]);
  const [checklist, _setChecklist] = useState<ChecklistType>(emptyChecklist);
  const [geolocaltion, setGeolocaltion] = useState({ lat: "", lng: "" });

  function setChecklists(values: ChecklistType[]) {
    _setChecklists(values);
  }

  function setChecklist(values: ChecklistType) {
    _setChecklist(values);
  }

  const value: ChecklistContextType = {
    checklists,
    checklist,
    setChecklist,
    setChecklists,
    geolocaltion,
    setGeolocaltion,
  };

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}
