interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
}

const styles: any = {
  primary:
    "bg-doit-green-button w-[200px] h-[50px] box-border m-1 p-1 rounded-[13px] border-2 border-black text-[20px]",
  secondary:
    "bg-black w-[200px] h-[50px] box-border m-1 p-1 rounded-[13px] border-2 border-black text-[20px] text-doit-green-background",
};

export default function Button({
  customStyle = "primary",
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={styles[customStyle]} {...props}>
      {children}
    </button>
  );
}
