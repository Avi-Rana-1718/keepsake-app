import { DateToReadableString } from "@/util/DateToString";
import { ImageDisplay } from "./ImageDisplay";

export function ImageMapper({items}: any) {

    if(!items || items.length == 0) return null;

    const data = new Map<string, any>();
    
    items.sort((a: any, b: any) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime());
    items.forEach((item: any) => {
        const time = item.added_at.split("T")[0];
        const existing = data.get(time) || [];
        data.set(time, [...existing, item]);
    });

    return (
        <div>
            {Array.from(data.entries()).map(([date, items]) => (
                <div key={date}>
                    <h4>{DateToReadableString(date)}</h4>
                    <ImageDisplay data={items} />
                </div>
            ))}
        </div>
    )
}