import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaBus, FaRunning } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartComponent() {
  const data = {
    labels: ["Salud y Bienestar", "Transporte y Logística"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="d-flex flex-column">
      <Pie data={data} />
      <div className="d-flex align-items-center justify-content-between gap-5">
        <div className="d-flex align-items-center gap-2">
          <FaRunning className="bg-body-secondary rounded-pill p-1" size={40} />
          <h4 className="mb-0 text fs-5 text-body-secondary">
            Salud y Bienestar
          </h4>
        </div>
        <span>$100.000</span>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-5 mt-2">
        <div className="d-flex align-items-center jus gap-2">
          <FaBus className="bg-body-secondary rounded-pill p-2" size={40} />
          <h4 className="mb-0 text fs-5 text-body-secondary">
            Transporte y Logística
          </h4>
        </div>
        <span>$120.000</span>
      </div>
    </div>
  );
}

export default ChartComponent;
