import { InputsForm } from "../hooks/newEventHook"


export interface FormProps {
  inputs: InputsForm,
  handleChange: (name: keyof InputsForm, value: string) => void
}


