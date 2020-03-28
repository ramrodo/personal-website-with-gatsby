import React from "react";
import illustration from "../images/undraw_feeling_proud_qne1.svg";
import ContactForm from "../components/contact.form";

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">

      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">Hi, I'm Rodolfo Martínez</h1>
          <p className="text-xl font-light">Software Engineer</p>
        </div>
        <img src={illustration} alt="Undraw feeling proud in desktop" style={{ height: "300px" }}></img>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  </header>
)
