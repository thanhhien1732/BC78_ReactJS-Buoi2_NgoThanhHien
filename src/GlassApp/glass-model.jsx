export default function GlassModel({ selectedGlasses }) {
    return (
        <div className="model-container relative flex flex-col items-center ">
            <div className="relative">
                {/* Ảnh model */}
                <img src="/glassesImage/model.jpg" alt="Model" className="w-1/2 mx-auto rounded-xl" />
                {selectedGlasses && (
                    <>
                        <img
                            src={selectedGlasses.url}
                            alt={selectedGlasses.name}
                            className="glasses-overlay absolute"
                        />
                        {/* Thông tin kính */}
                        <div className="absolute bottom-0 left-[120px] bg-orange-400 px-2 py-1 bg-opacity-60 text-white w-60 rounded-b-xl shadow-xl">
                            <h3 className="text-sm font-bold text-blue-600 text-center">{selectedGlasses.name}</h3>
                            <p className="text-xs py-1">{selectedGlasses.desc}</p>
                            <p className="text-xs font-semibold">Price: ${selectedGlasses.price}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
