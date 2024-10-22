import Lottie from "lottie-react";
import waiting_activity from "../../../../../../assets/lottie/waiting_activity.json";
import { Link } from "react-router-dom";
import useFetchAndLoad from "../../../../../../hooks/useFetchAndLoad";
import { useEffect, useState } from "react";
import { getRevenuesRequest } from "../../../../../../services/revenues.service";
import { getExpensesRequest } from "../../../../../../services/expenses.service";

function LastActivityComponent() {

  const [activity, setActivity] = useState<any | null>();

  const { loading, callEndpoint } = useFetchAndLoad();

  const getAllActivity = async () => {
    const res_revenues = await callEndpoint(getRevenuesRequest());
    const res_data = res_revenues?.data.ingreso;
    const data_revenues = res_data.map((item: any) => ({
      ...item,
      flag: "ingreso"
    }));
    
    const res_expenses = await callEndpoint(getExpensesRequest());
    const res_data2 = res_expenses?.data.gasto;
    const data_expenses = res_data2.map((item: any) => ({
      ...item,
      flag: 'gasto'
    })); 

    const result = [...data_revenues, ...data_expenses];
    setActivity(result);
  }

  useEffect(() => {
    getAllActivity();
  }, []);

  return (
    <div className="mt-4 pe-3">
      <div className="d-flex flex-row justify-content-between">
        <h4 className="fs-5">Mi actividad</h4>
        <Link
          to="/dashboard/actividad"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          Ver más
        </Link>
      </div>
      <div className="card mb-5">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h4 className="fs-5 m-0  text-center">
            Sin actividades por el momento
          </h4>
          <p className="fs-6 m-0 text-center">
            Esos gastos no se controlan solos 😎
          </p>
          <Lottie
            animationData={waiting_activity}
            style={{ maxWidth: "100%", height: "15rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LastActivityComponent;
