import { GridImage } from "./GridImage";

export function ImageDisplay({ data }: any) {
  //
  return (
    <div className="my-4 grid grid-cols-3 gap-3">
      {data.map((item: any) => (
        <GridImage key={item.id} alt={item.id} src={item.url} />
      ))}
    </div>
  );
}
