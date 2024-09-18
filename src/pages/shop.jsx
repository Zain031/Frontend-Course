

export default function Shop() {



    return (
        <div className="overflow-y-scroll container mx-auto px-4 bg-gray-100">
            <h1 className="text-3xl font-extrabold text-center text-gray-500 mt-8 mb-4">
                Shop
            </h1>
            <div className="grid grid-cols-1 p-8 md:grid-cols-3 gap-4 md:flex md:flex-col">
                <div
                className="flex w-full bg-white rounded-lg shadow-md p-6 flex items-center flex-wrap justify-center"
                >
                    <div className="flex w-full ">
                        <div className="w-1/6 ">
                            <img
                                className="h-24 w-24 rounded-full"
                                src={"https://picsum.photos/200"}
                                alt="shop-item"
                            />
                        </div>
                        <div className="w-4/6 ">
                            <div className="flex mb-2">
                                <h2 className="text-lg rounded-full text-gray-700 font-semibold">
                                    item.name
                                </h2>
                            </div>
                            <p className="mb-4 text-gray-500">item.description</p>
                        </div>
                        <div className="flex w-1/6 " style={{alignItems : "center", justifyContent : "center"}}>
                            <button className="bg-blue-400 px-3 py-2 hover:bg-blue-500 rounded-lg text-white">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
