import { Renderable, ValueOrFunction } from "react-hot-toast";

interface ToastMessages {
  loading: Renderable;
  success: ValueOrFunction<Renderable, T>;
  error: ValueOrFunction<Renderable, any>;
}

interface ApiToastsCrudMessages {
  create: ToastMessages;
  delete: ToastMessages;
  update: ToastMessages;
}
