import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export default function AboutPage() {
    return (
        <div className="about-page">
            <Header />
            <div className="content">
                this is about page
            </div>
            <Footer />
        </div>
    );
}