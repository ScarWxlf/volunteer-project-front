import {create} from "zustand";

interface NotificationState {
  message: string;
  setMessage: (message: string) => void;
  clearMessage: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  message: "",
  setMessage: (message) => set({ message }),
  clearMessage: () => set({ message: "" }),
}));
