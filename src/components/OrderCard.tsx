import { useState } from "react";

const OrderStatus = {
  PENDING: "PENDING",
  SHIPPED: "SHIPPED",
} as const;

type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

interface Order {
  id: string | number;
  customerName: string;
  status: OrderStatus;
  note?: string;
  courier?: string;
  trackingNumber?: string;
}

function OrderCard() {
  const [order, setOrder] = useState<Order>({
    id: 1,
    customerName: "Budi",
    status: OrderStatus.PENDING,
  });

  const handleUpdateDataBaru = () => {
    const dataBaru: Order = {
      id: "ORD-002",
      customerName: "Budi Santoso",
      status: OrderStatus.SHIPPED,
      note: "Jangan terlalu pedas",
      courier: "JNE",
      trackingNumber: "JNE-123456789",
    };

    setOrder(dataBaru);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Detail Pesanan: {order.id}</h2>
      <p>
        <strong>Pelanggan:</strong> {order.customerName}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>

      <div
        style={{ background: "#f9f9f9", padding: "10px", borderRadius: "4px" }}
      >
        <p>
          <strong>Kurir:</strong> {order.courier?.toUpperCase() ?? "Belum ada"}
        </p>
        <p>
          <strong>No. Resi:</strong> {order.trackingNumber ?? "Belum ada"}
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={handleUpdateDataBaru}>Ganti Data Baru</button>
      </div>
    </div>
  );
}

export default OrderCard;
