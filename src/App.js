import "./App.css";
import PlumbingEmergency from "../src/assets/PlumbingEmergency.png";
import PlumbingDrainage from "../src/assets/construction_17424252.png";
import waterDamage from "../src/assets/science_16237638.png";
import waterHeater from "../src/assets/water-heater_3844700.png";

function App() {
  const content = [
    {
      id: 1,
      imgSrc: PlumbingEmergency,
      title: "Emergency Plumbing Services",
      subtitle:
        "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.",
      link: "EXPLORE THIS SERVICE >",
    },

    {
      id: 2,
      imgSrc: PlumbingDrainage,
      title: "Plumbing and Drains",
      subtitle:
        "As the largest plumbing and drain service company, we make thousands of repairs every day.",
      link: "EXPLORE THIS SERVICE >",
    },

    {
      id: 3,
      imgSrc: waterDamage,
      title: "Water Damage",
      subtitle:
        "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
      link: "EXPLORE THIS SERVICE >",
    },
    {
      id: 4,
      imgSrc: waterHeater,
      title: "Water Heaters",
      subtitle:
        "Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.",
      link: "EXPLORE THIS SERVICE >",
    },
  ];

  return (
    <div class="bg-purple-800 relative overflow-hidden">
      <div class="absolute top-0 right-0 left-auto w-[150%] h-[500px] overflow-hidden bg-slate-200  transform -rotate-[14deg] origin-top-right z-0 "></div>
      <div class="container mx-auto py-12 relative z-10">
        <h2 class="text-white text-3xl font-bold  mb-8">Our Services</h2>
        <div className="flex flex-wrap w-full flex-row gap-6 z-20 ">
          {content.map((data) => (
            <div
              key={data.id}
              className="flex-1 gap-2 shadow-xl text-center flex flex-col items-center p-4 bg-white rounded-[4px] relative transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
            >
              <div className="rounded-full p-1 w-20 h-20 border-violet-900 border-solid border-4 bg-white flex items-center justify-center absolute -top-[15%] mb-32 ">
                <img src={data.imgSrc} alt={data.title} className="w-12" />
              </div>
              <div className="mt-8">
                <h2 className="text-slate-700 font-bold">{data.title}</h2>
                <p className="text-slate-500 mb-3">{data.subtitle}</p>
                <a href="/" className="text-violet-900">
                  {data.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
