import Quote from "./Quote";

const CampusBanner = () => {
  return (
    <div class="w-1/2 h-screen hidden lg:block bg-[#333cbd]  relative">
      <div className="absolute flex top-0 z-50 w-full h-full justify-center ">
        <Quote />
      </div>

      <img
        src="https://eldinero.com.do/wp-content/uploads/ITLA.jpg"
        alt="Imagen del Campus del ITLA"
        class="object-cover w-full h-full opacity-40"
      />
    </div>
  );
};

export default CampusBanner;
