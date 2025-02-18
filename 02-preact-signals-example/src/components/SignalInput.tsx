import { Signal } from "@preact/signals-react";
import { InputHTMLAttributes } from "react";

type SignalInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  value: Signal<string>;
};

export function SignalInput({ value, ...props }: SignalInputProps) {
  console.log("SignalInput render", Date.now());
  return (
    <input
      {...props}
      value={value.value}
      onChange={(e) => (value.value = e.target.value)}
    />
  );
} 