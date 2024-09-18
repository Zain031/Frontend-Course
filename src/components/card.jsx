import { Link, useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" justify-center">
        <div className=" bg-transparent flex-auto justify-center items-center h-full ml-10 mt-4 ">
          <div className="w- p-6 bg-green-100 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <img
              className="w-64 object-cover rounded-t-md"
              src="https://images.unsplash.com/photo-1509223197845-458d87318791"
              alt=""
            />
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-700">COURSE.NAME</h1>
              <p className="text-sm mt-2 text-gray-700">COURSE.DESCRIPTION</p>

              <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                  PRICE.COIN
                </button>
                <button
                  className="text-lg block font-semibold py-2 px-6 text-gray hover:text-green-20 bg-green-50 rounded-lg shadow hover:shadow-md transition duration-300"
                  onClick={() => navigate("/courses/:id")}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
