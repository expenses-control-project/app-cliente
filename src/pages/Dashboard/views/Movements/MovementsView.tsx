import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { getRevenuesRequest } from "../../../../services/revenues.service";
import { getExpensesRequest } from "../../../../services/expenses.service";
import { Pagination } from "react-bootstrap";
import { ArrowUpCircle } from "react-bootstrap-icons";
import {
  formatCurrency,
  formatDateToDDMMYY,
} from "../../../../utils/formatterValue.util";
import IconsRubrosComponent from "../../../../components/icons/IconsRubrosComponent";
import Lottie from "lottie-react";

import "./MovementsViewStyles.css";
import waiting_activity from "../../../../assets/lottie/waiting_activity.json";
import LoaderComponent from "../../../../components/Loader/LoaderComponent";

function MovementsView() {
  const [activity, setActivity] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { loading, callEndpoint } = useFetchAndLoad();

  const getAllActivity = async () => {
    const res_revenues = await callEndpoint(getRevenuesRequest());
    const res_data = res_revenues?.data.ingreso;
    const data_revenues = res_data.map((item: any) => ({
      ...item,
      flag: "ingreso",
    }));

    const res_expenses = await callEndpoint(getExpensesRequest());
    const res_data2 = res_expenses?.data.gasto;
    const data_expenses = res_data2.map((item: any) => ({
      ...item,
      flag: "gasto",
    }));

    const result = [...data_revenues, ...data_expenses];

    const resultFIlterDate = result.sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    });

    setActivity(resultFIlterDate);
  };

  useEffect(() => {
    getAllActivity();
  }, []);

  // Calcular los items actuales de la página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activity.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Total de páginas
  const totalPages = Math.ceil(activity.length / itemsPerPage);
  console.log(currentItems);

  return (
    <section
      className="px-3 py-4 px-sm-5 mb-5 mb-lg-0 container-movements"
      style={{ height: "calc(100vh - 117px)" }}
    >
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {currentItems.length > 0 ? (
            <div className="card">
              <div className="card-header bg-body-secondary d-flex gap-3">
                <h2 className="fs-5">Todas las actividades</h2>
              </div>
              <div className="card gap-2 px-2 py-2">
                <>
                  {currentItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-between align-items-center"
                    >
                      {item.flag == "ingreso" ? (
                        <>
                          <div className="d-flex gap-2">
                            <div>
                              <ArrowUpCircle
                                className="bg-success rounded-circle p-2"
                                size={40}
                              />
                            </div>
                            <div>
                              <h4 className="fs-5 mb-0">
                                {item.cuenta.nombre}
                              </h4>
                              <p className="mb-0 text fs-6 text-body-secondary">
                                Ingreso
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-column align-items-end">
                            <span className="text-success">
                              +{formatCurrency(item.saldo)}
                            </span>
                            <span>{formatDateToDDMMYY(item.fecha)}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex gap-2">
                            <div>
                              <IconsRubrosComponent
                                bg="bg-danger"
                                idRubro={item.establecimiento.rubro.idRubro}
                              />
                            </div>
                            <div>
                              <h4 className="fs-5 mb-0">
                                {item.establecimiento.nombreEstablecimiento}
                              </h4>
                              <p className="mb-0 text fs-6 text-body-secondary">
                                {item.establecimiento.rubro.nombreRubro}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-column align-items-end">
                            <span className="text-danger">
                              -{formatCurrency(item.monto)}
                            </span>
                            <span>{formatDateToDDMMYY(item.fecha)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </>
                <Pagination className="justify-content-end p-3 m-0">
                  <Pagination.First
                    onClick={() => paginate(1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Prev
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item
                      key={i + 1}
                      active={i + 1 === currentPage}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                  <Pagination.Last
                    onClick={() => paginate(totalPages)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100%"}}>
              <Lottie
                animationData={waiting_activity}
                style={{ maxWidth: "100%", height: "15rem" }}
              />
              <h4 className="fs-3 m-0  text-center">
                Sin actividades por el momento
              </h4>
              <p className="fs-6 m-0 text-center">
                Esos gastos no se controlan solos 😎
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default MovementsView;
