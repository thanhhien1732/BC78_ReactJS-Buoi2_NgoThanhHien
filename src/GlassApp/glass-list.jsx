import dataGlasses from "./dataGlasses.json";

export default function GlassList({ onSelect }) {
    return (
        <div className="glasses-list-wrapper bg-white rounded-xl shadow-xl p-6 mx-auto mt-5 w-[fit-content]">
            <div className="glasses-list grid grid-cols-5 gap-8 justify-center">
                {dataGlasses.map((glasses) => (
                    <img
                        key={glasses.id}
                        src={glasses.url}
                        alt={glasses.name}
                        onClick={() => onSelect(glasses)}
                        className="glasses-item cursor-pointer w-32 border-2 border-gray-300 rounded-xl p-2 hover:border-blue-500"
                    />
                ))}
            </div>
        </div>
    );
}
