import { useState } from "react";
import { useEffect } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services/dataService";
import { UseTitle } from "../../hooks/UseTitle"
import { toast } from "react-toastify"



export const DashboardPage = () => {
    UseTitle("Dashboard")
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getUserOrders();
                setOrders(data);
            } catch (error) {
                toast.error(error.message, {
                    closeButton: true,
                    autoClose: 5000,
                    position: "bottom-center"
                })
            }
        }
        fetchOrders();
    }, []);

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>
            <section>
                {orders.length ?
                    orders.map((order) => (
                        <DashboardCard key={order.id} order={order} />
                    ))
                    :
                    <DashboardEmpty />}
            </section>
        </main>
    )
}
