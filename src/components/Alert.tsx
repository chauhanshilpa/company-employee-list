interface Props {
  message: string;
}

const alert = ({ message }: Props) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 fixed top-0 w-full"
      role="alert"
    >
      <span className="font-medium">Validation alert! </span>
      {message}
    </div>
  );
};

export default alert;
