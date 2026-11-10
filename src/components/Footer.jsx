import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        padding: "50px 0 20px 0",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <img
            src={logo}
            alt="Teknolojik Yemekler"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <p
            style={{ color: "#999999", fontSize: "0.9rem", lineHeight: "1.8" }}
          >
            📍 341 Londonderry Road, Istanbul Türkiye
            <br />
            ✉️ aciktim@teknolojikyemekler.com
            <br />
            📞 +90 216 123 45 67
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "20px" }}>Hot Menu</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#999999",
              fontSize: "0.9rem",
              lineHeight: "2",
            }}
          >
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Instagram
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
            }}
          >
            {[insta0, insta1, insta2, insta3, insta4, insta5].map(
              (imgSrc, i) => (
                <img
                  key={i}
                  alt="Instagram post"
                  src={imgSrc}
                  style={{
                    width: "100%",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              ),
            )}
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #333333",
          margin: "30px 0 20px 0",
        }}
      />
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          color: "#999999",
          fontSize: "0.85rem",
          boxSizing: "border-box",
        }}
      >
        <span>© 2023 Teknolojik Yemekler.</span>
        <span>Twitter</span>
      </div>
    </footer>
  );
}
