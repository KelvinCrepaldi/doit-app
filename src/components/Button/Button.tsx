interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
}

const styles: any = {
  primary:
    "bg-white w-[150px] md:w-[200px] h-[45px] md:h-[60px] box-border m-1 p-1 rounded-[13px] border-2 border-black  text-base font-bold",
  secondary:
    "bg-black w-[150px] md:w-[200px] h-[45px] md:h-[60px] box-border m-1 p-1 rounded-[13px] border-2 border-black text-[1rem] md:text-[1.3rem]  text-white",
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
