export const PreviewProduct = () => {
  return (
    <div className="pb-17">
      <div className="pt-15 pb-15">
        <h2 className="text-center whitespace-nowrap text-[25px]">
          FEATURED PRODUCT
        </h2>

        <div className="w-40 mx-auto border-b-2 border-gray-300 p-1"></div>
      </div>

      <div className="ml-30 flex w-full max-w-2xl flex-col items-center gap-y-20">
        <img
          src="/unv-cam.jpg"
          alt="UNV IP Camera"
          className="w-80 max-w-md h-80 border border-gray-300 p-3"
        />

        <button className=" w-fit bg-gray-500 py-3 px-15 text-center text-white">
          More Details
        </button>
      </div>
    </div>
  );
};
