interface HeaderProp {
  label: string;
}

export default function Header({ label }: HeaderProp) {
  return (
    <div className="w-ful flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold ">🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
