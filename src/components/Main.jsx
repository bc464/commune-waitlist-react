import React from "react";

export default function Main() {
	return (
		<main>
      <section className="hero__section flex">
        <div className="hero__left-side">
          <button className="hero__learn-more--text">We are now allowing early-access for users. <a href="learn.html" class="hero__learn-more--link">Learn more.</a></button>
          <h1 className="hero__main-heading">Build a highly engaged community with no effort.</h1>
          <p className="hero__main-text">Commune offers the toolsyou need to build a highly engaged community with little to no effort. Simply setup your Commune workspace, and manage everything from members to content from one central dashboard.</p>
          <form className="hero__form">
          <input className="hero__email-inputfield" type="email" name="email" placeholder="Enter your e-mail address" />
          <button className="btn hero__waitlist-btn">Join Waitlist</button> 
        </form>
      </div>
      <div className="hero__right-side">
        <img className="hero__illustration" src="Assets/Illustration.png" alt="illustration" />
        </div>
      </section>
    </main>


	)
}