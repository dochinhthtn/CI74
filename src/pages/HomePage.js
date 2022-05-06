import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export default function HomePage() {
    return (<div className="home-page">
        <Header />
        <div className="content">
            this is homepage
        </div>
        <Footer />
    </div>);
}