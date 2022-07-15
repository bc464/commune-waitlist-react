import React from "react";

export default function Header() {
	return (
		<header className="header flex">
      <div className="nav__logo">
        <img src="Assets/Logo.svg" alt="logo" class="logo" />
      </div>
      <nav className="main-nav">
        <div className="main-nav-list flex">
        <a className="nav__link" href="features.html">Features</a>
        <a className="nav__link" href="affiliate.html">Affiliates</a>
        <a className="nav__link" href="pricing.html">Pricing</a>
        <a className="nav__link" href="communities.html">Communities</a>
        <a className="nav__link btn btn-white" href="join.html">Join Waitlist</a>
      </div>
      </nav>
        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" id="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" id="close-outline"></ion-icon>
        </button>
    </header>

	)
}