import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Ana sayfa bileşeninin yolu (kendi klasör yapına göre kontrol edebilirsin)
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";

export default function App() {
  const [formData, setFormData] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet: 1,
  });

  const [submittedOrder, setSubmittedOrder] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/siparis"
        element={
          <OrderForm
            formData={formData}
            setFormData={setFormData}
            onSubmitOrder={setSubmittedOrder}
          />
        }
      />
      <Route path="/onay" element={<Success order={submittedOrder} />} />
    </Routes>
  );
}
