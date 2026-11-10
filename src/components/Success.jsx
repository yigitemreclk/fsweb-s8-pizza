import React from "react";
import Footer from "./Footer";

export default function Success({ order }) {
  if (!order) {
    return (
      <div
        style={{
          backgroundColor: "#CE2829",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
          color: "#FFF",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Henüz bir sipariş bulunmuyor!</h2>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#CE2829",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "40px 20px 20px 20px", textAlign: "center" }}>
        <p
          style={{
            color: "#FDC913",
            fontSize: "1.3rem",
            fontStyle: "italic",
            marginBottom: "8px",
            fontFamily: "Satisfy, cursive, sans-serif",
          }}
        >
          lezzetin yolda
        </p>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            margin: 0,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          SİPARİŞ ALINDI
        </h1>
        <div
          style={{
            width: "80%",
            maxWidth: "550px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.4)",
            margin: "25px auto 0 auto",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "600px",
          width: "90%",
          margin: "0 auto",
          textAlign: "center",
          paddingBottom: "30px",
        }}
      >
        <h3
          style={{
            fontSize: "1.4rem",
            marginBottom: "25px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          {order.productName}
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "1.05rem",
            maxWidth: "380px",
            margin: "0 auto",
            textAlign: "left",
            lineHeight: "1.4",
          }}
        >
          <p style={{ margin: "4px 0" }}>
            <span style={{ fontWeight: "normal" }}>Boyut:</span>{" "}
            <strong style={{ fontWeight: "bold" }}>{order.boyut}</strong>
          </p>
          <p style={{ margin: "4px 0" }}>
            <span style={{ fontWeight: "normal" }}>Hamur:</span>{" "}
            <strong style={{ fontWeight: "bold" }}>{order.hamur}</strong>
          </p>
          <p style={{ margin: "4px 0" }}>
            <span style={{ fontWeight: "normal" }}>Ek Malzemeler:</span>{" "}
            <strong style={{ fontWeight: "bold" }}>
              {order.malzemeler && order.malzemeler.length > 0
                ? order.malzemeler.join(", ")
                : "Seçilmedi"}
            </strong>
          </p>
          {order.not && (
            <p style={{ margin: "4px 0" }}>
              <span style={{ fontWeight: "normal" }}>Sipariş Notu:</span>{" "}
              <strong style={{ fontWeight: "bold" }}>{order.not}</strong>
            </p>
          )}
          <p style={{ margin: "4px 0" }}>
            <span style={{ fontWeight: "normal" }}>Adet:</span>{" "}
            <strong style={{ fontWeight: "bold" }}>{order.adet}</strong>
          </p>
        </div>

        <div
          style={{
            marginTop: "35px",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "8px",
            padding: "20px 25px",
            maxWidth: "360px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            boxSizing: "border-box",
          }}
        >
          <h4
            style={{
              marginBottom: "15px",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Sipariş Toplamı
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              fontSize: "0.95rem",
            }}
          >
            <span>Seçimler</span>
            <span>
              {order.malzemeler
                ? (order.malzemeler.length * 5).toFixed(2)
                : "0.00"}
              ₺
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1.05rem",
            }}
          >
            <span>Toplam</span>
            <span>{order.toplamTutar}₺</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
