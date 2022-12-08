import { GridContainer } from "../../styles";
import { CardItem, FullScreenLoading, LayoutAdmin } from "../../components";
import { useDashboard } from "../../hooks";
import { useEffect, useState } from "react";

const Dashboard = () => {
   const { data, isLoading } = useDashboard({ key: "dashboard", path: "/dashboard" });
   const [refreshIn, setRefreshIn] = useState(30);

   // useEffect(() => {
   //    const interval = setInterval(() => {
   //       setRefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30);
   //    }, 1000);
   //    return () => clearInterval(interval)
   // }, []);

   return (
      <LayoutAdmin title="Dashboard" description="Gestión de la información">
         {isLoading
            ? <FullScreenLoading />
            :
            <GridContainer className="opacity">
               <CardItem description="Total clientes" title={data?.numberOfClients!} />
               <CardItem description="Total productos" title={data?.numberOfProducts!} />
               <CardItem description="Total ordenes" title={data?.numberOfOrders!} />
               <CardItem description="Ordenes pagadas" title={data?.paidOrders!} />
               <CardItem description="Ordenes pendientes" title={data?.notPaidOrders!} />
               <CardItem description="Actualización en:" title={refreshIn} />
            </GridContainer>
         }
      </LayoutAdmin>
   )
}

export default Dashboard;
