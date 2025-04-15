import React from "react";

function About() {
  return (
    <div
      className="about-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <h1>About Us</h1>
      <section style={{ width: "80%" }}>
        <h2>Our Story</h2>
        <p>
          Welcome to Multi-shop, your ultimate destination for all your shopping
          needs! At Multi-shop, we are dedicated to providing our customers with
          the best shopping experience possible. Our journey began with a simple
          idea: to create a one-stop-shop where customers can find everything
          they need in one place.
        </p>
        <p>
          With a wide range of products from various categories including
          electronics, fashion, home goods, and more, we aim to cater to the
          diverse needs and preferences of our customers. Whether you're looking
          for the latest gadgets, trendy fashion items, or household essentials,
          we've got you covered.
        </p>
      </section>
      <section style={{ width: "80%" }}>
        <h2>Our Mission</h2>
        <p>
          At Multi-shop, our mission is to make shopping convenient, enjoyable,
          and hassle-free for our customers. We strive to offer high-quality
          products at competitive prices, along with excellent customer service
          and fast shipping.
        </p>
        <p>
          We believe in building long-term relationships with our customers
          based on trust, reliability, and mutual respect. Your satisfaction is
          our top priority, and we are committed to exceeding your expectations
          every step of the way.
        </p>
      </section>
    </div>
  );
}

export default About;
