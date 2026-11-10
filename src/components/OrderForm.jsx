import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import logo from "../../images/iteration-1-images/logo.svg";
import formBanner from "../../images/iteration-2-images/pictures/form-banner.png";

const EK_MALZEMELER = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

export default function OrderForm({ formData, setFormData, onSubmitOrder }) {
  const navigate = useNavigate();

  const product = {
    name: "Position Absolute Acı Pizza",
    price: 85.5,
    rating: 4.9,
    reviewCount: 928,
    description:
      "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış bir lezzet harikası. Önce geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir.",
  };

  const malzemeninFiyati = formData.malzemeler.length * 5;
  const birimFiyat = product.price + malzemeninFiyati;
  const toplamTutar = (birimFiyat * formData.adet).toFixed(2);

  const handleMaterialChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (formData.malzemeler.length < 10) {
        setFormData({
          ...formData,
          malzemeler: [...formData.malzemeler, value],
        });
      }
    } else {
      setFormData({
        ...formData,
        malzemeler: formData.malzemeler.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder({
      ...formData,
      productName: product.name,
      toplamTutar,
    });
    navigate("/onay");
  };

  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#CE2829",
          width: "100%",
          padding: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          style={{ width: "220px", display: "block" }}
        />
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "25px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src={formBanner}
          alt="Pizza Banner"
          style={{
            width: "100%",
            maxWidth: "460px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "750px",
          width: "100%",
          margin: "0 auto 20px auto",
          padding: "0 60px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "#5F5F5F", fontSize: "0.9rem", margin: 0 }}>
          Anasayfa - Seçenekler -{" "}
          <strong style={{ color: "#CE2829", fontWeight: "600" }}>
            Sipariş Oluştur
          </strong>
        </p>
      </div>

      <div
        style={{
          maxWidth: "750px",
          width: "100%",
          margin: "0 auto 40px auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              color: "#292929",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {product.name}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#292929",
              }}
            >
              {product.price.toFixed(2)}₺
            </span>
            <div
              style={{
                display: "flex",
                gap: "20px",
                color: "#5F5F5F",
                fontSize: "0.95rem",
              }}
            >
              <span>{product.rating}</span>
              <span>({product.reviewCount})</span>
            </div>
          </div>

          <p
            style={{
              color: "#5F5F5F",
              lineHeight: "1.6",
              fontSize: "0.95rem",
              marginBottom: "30px",
            }}
          >
            {product.description}
          </p>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div style={{ flex: "1", minWidth: "220px" }}>
                <h4
                  style={{
                    marginBottom: "12px",
                    color: "#292929",
                    fontSize: "1.1rem",
                  }}
                >
                  Boyut Seç *
                </h4>
                <div style={{ display: "flex", gap: "10px" }}>
                  {["S", "M", "L"].map((b) => (
                    <label
                      key={b}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor:
                          formData.boyut === b ? "#FDC913" : "#FAF7F2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontWeight: "bold",
                        color: "#292929",
                        border: "1px solid #ccc",
                      }}
                    >
                      <input
                        type="radio"
                        name="boyut"
                        value={b}
                        checked={formData.boyut === b}
                        onChange={(e) =>
                          setFormData({ ...formData, boyut: e.target.value })
                        }
                        style={{ display: "none" }}
                      />{" "}
                      {b}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ flex: "1", minWidth: "220px" }}>
                <h4
                  style={{
                    marginBottom: "12px",
                    color: "#292929",
                    fontSize: "1.1rem",
                  }}
                >
                  Hamur Seç *
                </h4>
                <select
                  value={formData.hamur}
                  onChange={(e) =>
                    setFormData({ ...formData, hamur: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    backgroundColor: "#FAF7F2",
                    color: "#5F5F5F",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="" disabled>
                    -Hamur Kalınlığı Seç-
                  </option>
                  <option value="İnce">İnce</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4
                style={{
                  marginBottom: "5px",
                  color: "#292929",
                  fontSize: "1.1rem",
                }}
              >
                Ek Malzemeler
              </h4>
              <p
                style={{
                  color: "#5F5F5F",
                  fontSize: "0.85rem",
                  marginBottom: "15px",
                }}
              >
                En Fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                }}
              >
                {EK_MALZEMELER.map((malzeme) => (
                  <label
                    key={malzeme}
                    style={{
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      color: "#5F5F5F",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={malzeme}
                      checked={formData.malzemeler.includes(malzeme)}
                      onChange={handleMaterialChange}
                    />{" "}
                    {malzeme}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4
                style={{
                  marginBottom: "8px",
                  color: "#292929",
                  fontSize: "1.1rem",
                }}
              >
                Sipariş Notu
              </h4>
              <textarea
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.not}
                onChange={(e) =>
                  setFormData({ ...formData, not: e.target.value })
                }
                style={{
                  width: "100%",
                  height: "90px",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  backgroundColor: "#FAF7F2",
                }}
              />
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #E2E0D8",
                margin: "30px 0",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      adet: formData.adet > 1 ? formData.adet - 1 : 1,
                    })
                  }
                  style={{
                    padding: "12px 18px",
                    border: "none",
                    backgroundColor: "#FAF7F2",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    padding: "12px 22px",
                    backgroundColor: "#FFF",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {formData.adet}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, adet: formData.adet + 1 })
                  }
                  style={{
                    padding: "12px 18px",
                    border: "none",
                    backgroundColor: "#FAF7F2",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  +
                </button>
              </div>

              <div
                style={{
                  width: "280px",
                  padding: "20px",
                  backgroundColor: "#FAF7F2",
                  borderRadius: "8px",
                  border: "1px solid #E2E0D8",
                  boxSizing: "border-box",
                }}
              >
                <h4
                  style={{
                    marginBottom: "15px",
                    fontSize: "1.1rem",
                    color: "#292929",
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
                    color: "#5F5F5F",
                  }}
                >
                  <span>Seçimler</span>
                  <span>{malzemeninFiyati.toFixed(2)}₺</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    color: "#CE2829",
                    fontSize: "1.1rem",
                  }}
                >
                  <span>Toplam</span>
                  <span>{toplamTutar}₺</span>
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: "#FDC913",
                    color: "#292929",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    letterSpacing: "1px",
                  }}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
