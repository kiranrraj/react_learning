import { createContext, useContext } from "react";

// Creates a new shared space for toast-related data
const ToastContext = createContext();

// A helper function (custom hook) that gives any component access to the toast context
export const useToast = () => useContext(ToastContext);

// You’ll need this in the provider to “wrap” your app and give access to all components
export default ToastContext;
