import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import bannerImage from "../../images/iteration-1-images/home-banner.png";
import logo from "../../images/iteration-1-images/logo.svg";

import cta1 from "../../images/iteration-2-images/cta/kart-1.png";
import cta2 from "../../images/iteration-2-images/cta/kart-2.png";
import cta3 from "../../images/iteration-2-images/cta/kart-3.png";

import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";

import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#FAF7F2",
        margin: 0,
        padding: 0,
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={logo}
          alt="Teknolojik Yemekler Logo"
          style={{ width: "280px", marginBottom: "20px" }}
        />
        <p
          style={{
            fontFamily: "Satisfy, cursive",
            color: "#FDC913",
            fontSize: "1.8rem",
            margin: "0 0 10px 0",
          }}
        >
          fırsatı kaçırma
        </p>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "300",
            margin: "0 0 20px 0",
            letterSpacing: "2px",
            lineHeight: "1.2",
          }}
        >
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button
          onClick={() => navigate("/siparis")}
          style={{
            backgroundColor: "#FDC913",
            color: "#292929",
            border: "none",
            padding: "14px 45px",
            fontSize: "1.1rem",
            borderRadius: "50px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          ACIKTIM
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px 0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            padding: "0 15px",
          }}
        >
          {[
            { name: "YENİ! Kore", img: icon1 },
            { name: "Pizza", img: icon2 },
            { name: "Burger", img: icon3 },
            { name: "Kızartmalar", img: icon4 },
            { name: "Fast food", img: icon5 },
            { name: "Gazlı İçecek", img: icon6 },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                fontWeight: "500",
                color: "#292929",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "24px", height: "24px" }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "50px auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${cta1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              padding: "40px",
              color: "#FFFFFF",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  margin: "0 0 10px 0",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                Özel
                <br />
                Lezzetus
              </h2>
              <p style={{ margin: 0, fontSize: "0.9rem" }}>
                Position: Absolute Acı Burger
              </p>
            </div>
            <button
              onClick={() => navigate("/siparis")}
              style={{
                width: "fit-content",
                padding: "10px 25px",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#FFFFFF",
                color: "#CE2829",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              SİPARİŞ VER
            </button>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                backgroundImage: `url(${cta2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                padding: "25px",
                color: "#FFFFFF",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>
                Hackathlon
                <br />
                Burger Menü
              </h3>
              <button
                onClick={() => navigate("/siparis")}
                style={{
                  width: "fit-content",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  color: "#CE2829",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                SİPARİŞ VER
              </button>
            </div>

            <div
              style={{
                backgroundImage: `url(${cta3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                padding: "25px",
                color: "#292929",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>
                <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                <br />
                npm gibi kurye
              </h3>
              <button
                onClick={() => navigate("/siparis")}
                style={{
                  width: "fit-content",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  color: "#CE2829",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          textAlign: "center",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "Satisfy, cursive",
            color: "#CE2829",
            fontSize: "1.6rem",
            margin: "0 0 5px 0",
          }}
        >
          en çok paketlenen menüler
        </p>
        <h2
          style={{
            fontSize: "2rem",
            color: "#292929",
            margin: "0 0 30px 0",
            fontWeight: "bold",
          }}
        >
          Acıktıran Kodlara Doyuran Lezzetler
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {[
            { name: "Ramen", active: false },
            { name: "Pizza", active: true },
            { name: "Burger", active: false },
            { name: "French fries", active: false },
            { name: "Fast food", active: false },
            { name: "Soft drinks", active: false },
          ].map((cat, idx) => (
            <button
              key={idx}
              style={{
                padding: "10px 22px",
                borderRadius: "50px",
                border: "none",
                backgroundColor: cat.active ? "#292929" : "#FFFFFF",
                color: cat.active ? "#FFFFFF" : "#292929",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Terminal Pizza",
              price: "60₺",
              score: "4.9",
              count: "(200)",
              img: food1,
            },
            {
              title: "Position Absolute Acı Pizza",
              price: "85.50₺",
              score: "4.9",
              count: "(928)",
              img: food2,
            },
            {
              title: "useEffect Tavuklu Burger",
              price: "75₺",
              score: "4.9",
              count: "(462)",
              img: food3,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/siparis")}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "left",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h4
                style={{
                  fontSize: "1.1rem",
                  margin: "0 0 10px 0",
                  color: "#292929",
                }}
              >
                {item.title}
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#5F5F5F", fontSize: "0.9rem" }}>
                  {item.score} {item.count}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#292929",
                  }}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
