import { InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | null | undefined;
  control: Control<any, any>;
  mask?: string;
  disabled?: boolean;
}

const Input = ({
  name,
  label,
  error,
  disabled,
  control,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className=" text-sm md:text-base font-bold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...field } }) => (
          <input
            className=" h-[45px] md:h-[60px] border-b-2 border-black rounded-[4px] w-full px-2 bg-[rgb(255,255,255,0.3)]"
            ref={ref}
            disabled={disabled}
            {...props}
            {...field}
          ></input>
        )}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
