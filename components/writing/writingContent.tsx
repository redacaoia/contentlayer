interface Props {
    title: string;
  }
  
  export function WritingContent({ title }: Props) {
    return (
      <div className="flex  flex-col gap-0">
        <h4 className="font-medium text-zinc-500 ">Tema</h4>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    );
  }