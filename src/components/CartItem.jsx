export function CartItem({ item }) {
    return (
        <div className="hover:bg-[#DAFFA2] cursor-pointer p-2 bg-gray-50 flex space-2">
            <img className="h-24" src={item.src} alter="walay image" />
            <div className="space-y-2">
                <div className="font-bold">{item.title}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
            </div>
            <div className="font-bold">{item.price}</div>
        </div>
    );
}