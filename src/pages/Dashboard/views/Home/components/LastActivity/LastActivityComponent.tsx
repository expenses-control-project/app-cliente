import Lottie from "lottie-react";
import waiting_activity from "../../../../../../assets/lottie/waiting_activity.json";
import { Link } from "react-router-dom";
import useFetchAndLoad from "../../../../../../hooks/useFetchAndLoad";
import { useEffect, useState } from "react";
import { getRevenuesRequest } from "../../../../../../services/revenues.service";
import { getExpensesRequest } from "../../../../../../services/expenses.service";
import { Spinner } from "react-bootstrap";
import { ArrowUpCircle } from "react-bootstrap-icons";
import {
  formatCurrency,
  formatDateToDDMMYY,
} from "../../../../../../utils/formatterValue.util";
import IconsRubrosComponent from "../../../../../../components/icons/IconsRubrosComponent";

interface LastActivityProps {
  loading: boolean,
  activity: any
}

function LastActivityComponent({activity, loading}: LastActivityProps) {
  return (
    <div className="mt-4 pe-3 pe-md-5 pe-lg-0">
      <div className="d-flex flex-row justify-content-between">
        <h4 className="fs-5">Mi actividad</h4>
        <Link
          to="/dashboard/actividad"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          Ver más
        </Link>
      </div>
      <div className="card mb-5 gap-2 px-2 py-2">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {activity != null ? (
              <>
                {activity.map((item: any, index: number) => (
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
                            <h4 className="fs-5 mb-0">{item.cuenta.nombre}</h4>
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
                            <IconsRubrosComponent bg="bg-danger" idRubro={item.establecimiento.rubro.idRubro}/>
                          </div>
                          <div>
                            <h4 className="fs-5 mb-0">{item.establecimiento.nombreEstablecimiento}</h4>
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
            ) : (
              <>
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
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LastActivityComponent;
