---
layout: splash
title: "Projects"
permalink: /new-project/
author_profile: false
---

<style>

/* =========================================================
   PROJECT PAGE
   ========================================================= */

.projects-wrapper {
  max-width: 1150px;
  margin: 0 auto;
  padding: 1rem 1.2rem 4rem;
}


/* ---------- Header ---------- */

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-header h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 0.7rem;
  font-weight: 750;
  letter-spacing: -0.04em;
}

.projects-header p {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #666;
}


/* ---------- Research / Category Tabs ---------- */

.project-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 3rem;
}

.project-tab {
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid #d6d6d6;
  font-size: 0.88rem;
  font-weight: 600;
  background: transparent;
  transition: all 0.25s ease;
}

.project-tab:hover {
  border-color: #1e90ff;
  color: #1e90ff;
  transform: translateY(-2px);
}


/* =========================================================
   FEATURED PROJECT
   ========================================================= */

.featured-project {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  align-items: center;

  padding: 2.2rem;
  margin-bottom: 3.5rem;

  border: 1px solid rgba(30,144,255,0.25);
  border-radius: 22px;

  background:
    radial-gradient(
      circle at top right,
      rgba(30,144,255,0.12),
      transparent 38%
    );

  box-shadow:
    0 14px 40px rgba(0,0,0,0.06);

  overflow: hidden;
}

.featured-badge {
  display: inline-block;
  margin-bottom: 0.8rem;
  padding: 0.35rem 0.7rem;

  border-radius: 999px;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #1e90ff;
  background: rgba(30,144,255,0.10);
}

.featured-project h2 {
  margin: 0 0 0.9rem;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  line-height: 1.25;
}

.featured-project p {
  line-height: 1.75;
  font-size: 1rem;
  color: #555;
}


/* ---------- Project Grid ---------- */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}


/* ---------- Project Card ---------- */

.project-card {
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid #e2e2e2;
  border-radius: 18px;

  padding: 1.4rem;

  background: rgba(255,255,255,0.02);

  box-shadow:
    0 6px 22px rgba(0,0,0,0.045);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(30,144,255,0.45);

  box-shadow:
    0 15px 35px rgba(0,0,0,0.09);
}


/* ---------- Image ---------- */

.project-image-container {
  width: 100%;
  height: 210px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.25rem;

  border-radius: 14px;
  overflow: hidden;

  background: rgba(120,120,120,0.05);
}

.project-image {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition: transform 0.35s ease;
}

.project-card:hover .project-image {
  transform: scale(1.025);
}


/* ---------- Project Meta ---------- */

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-bottom: 0.75rem;

  font-size: 0.78rem;
}

.project-category {
  color: #1e90ff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.055em;
}

.project-date {
  color: #888;
}


/* ---------- Project Title ---------- */

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;

  margin: 0 0 0.8rem;
}


/* ---------- Description ---------- */

.project-description {
  flex-grow: 1;

  font-size: 0.94rem;
  line-height: 1.7;

  color: #555;
}

.project-description ul {
  padding-left: 1.15rem;
  margin-top: 0.5rem;
}

.project-description li {
  margin-bottom: 0.45rem;
}


/* ---------- Tech Tags ---------- */

.tech-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;

  margin: 1rem 0;
}

.tech-tag {
  padding: 0.28rem 0.58rem;

  border-radius: 6px;

  background: rgba(30,144,255,0.08);

  color: #1671c5;

  font-size: 0.73rem;
  font-weight: 600;
}


/* ---------- Buttons ---------- */

.project-links {
  display: flex;
  flex-wrap: wrap;

  gap: 0.55rem;

  margin-top: 1rem;
}

.project-button {
  display: inline-flex;
  align-items: center;

  padding: 0.48rem 0.82rem;

  border: 1px solid #d5d5d5;
  border-radius: 8px;

  color: inherit !important;
  text-decoration: none !important;

  font-size: 0.82rem;
  font-weight: 600;

  transition: all 0.2s ease;
}

.project-button:hover {
  border-color: #1e90ff;
  color: #1e90ff !important;
  transform: translateY(-1px);
}

.project-button.primary {
  background: #1e90ff;
  border-color: #1e90ff;
  color: white !important;
}

.project-button.primary:hover {
  background: #1878d1;
  color: white !important;
}


/* ---------- QR ---------- */

.flashcard-media {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
}

.flashcard-media .project-image {
  max-width: 320px;
  height: 190px;
}

.project-qr {
  width: 105px;
  height: 105px;

  padding: 5px;

  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
}


/* =========================================================
   SECTION DIVIDERS
   ========================================================= */

.project-section-heading {
  margin: 4rem 0 1.8rem;
}

.project-section-heading span {
  display: block;

  margin-bottom: 0.3rem;

  color: #1e90ff;

  font-size: 0.76rem;
  font-weight: 700;

  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-section-heading h2 {
  margin: 0;

  font-size: 1.75rem;
}

.project-section-heading p {
  max-width: 650px;

  margin-top: 0.6rem;

  color: #666;
  line-height: 1.6;
}


/* =========================================================
   DARK MODE
   ========================================================= */

@media (prefers-color-scheme: dark) {

  .projects-header p,
  .project-description,
  .featured-project p,
  .project-section-heading p {
    color: #bdbdbd;
  }

  .project-card {
    border-color: #353535;
  }

  .project-card:hover {
    border-color: rgba(30,144,255,0.65);
  }

  .project-tab {
    border-color: #444;
  }

  .project-date {
    color: #999;
  }

  .project-button {
    border-color: #444;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 800px) {

  .featured-project {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image-container {
    height: 190px;
  }

}


@media (max-width: 500px) {

  .projects-wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .project-card {
    padding: 1.1rem;
  }

  .flashcard-media {
    flex-direction: column;
  }

}

</style>


<div class="projects-wrapper">


<!-- ========================================================
     INTRO
     ======================================================== -->

<div class="projects-header">

  <h1>Projects</h1>

  <p>
    Selected projects spanning computational neuroscience,
    machine learning, artificial intelligence, applied mathematics,
    stochastic modeling, and quantitative finance.
  </p>

</div>


<!-- ========================================================
     INTEREST TAGS
     ======================================================== -->

<div class="project-tabs">

  <span class="project-tab">Computational Neuroscience</span>
  <span class="project-tab">Machine Learning</span>
  <span class="project-tab">Artificial Intelligence</span>
  <span class="project-tab">Applied Mathematics</span>
  <span class="project-tab">Statistical Modeling</span>

</div>



<!-- ========================================================
     FEATURED PROJECT
     ======================================================== -->

<div class="featured-project">

  <div>

    <span class="featured-badge">Featured Project</span>

    <h2>AI Flashcard Study App</h2>

    <p>
      An AI-powered study application that transforms PDFs and
      lecture notes into interactive flashcards. The application
      combines a FastAPI backend with OpenAI models and a
      lightweight web interface designed for active recall and
      self-study.
    </p>

    <div class="tech-tags">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">FastAPI</span>
      <span class="tech-tag">OpenAI API</span>
      <span class="tech-tag">PWA</span>
      <span class="tech-tag">GitHub Pages</span>
      <span class="tech-tag">Render</span>
    </div>

    <div class="project-links">

      <a
        href="https://shafiq-abdu.github.io/flashcards-app/"
        target="_blank"
        class="project-button primary">
        Launch App ↗
      </a>

    </div>

  </div>


  <div class="flashcard-media">

    <img
      src="/images/fl.png"
      alt="AI Flashcard Study App"
      class="project-image">

    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shafiq-abdu.github.io/flashcards-app/"
      alt="QR code for AI Flashcard App"
      class="project-qr">

  </div>

</div>



<!-- ========================================================
     AI / MACHINE LEARNING
     ======================================================== -->

<div class="project-section-heading">

  <span>Machine Learning & AI</span>

  <h2>Machine Learning Projects</h2>

  <p>
    Projects exploring reinforcement learning, neural networks,
    graph learning, and intelligent computational systems.
  </p>

</div>


<div class="projects-grid">


<!-- Snake Game -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/1.gif"
      alt="AI Snake Game"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Reinforcement Learning</span>
    <span class="project-date">Nov 2024</span>
  </div>

  <div class="project-title">
    AI Snake Game with Deep Reinforcement Learning
  </div>

  <div class="project-description">

    Developed an autonomous agent capable of learning to play
    the classic Snake game using Deep Q-Learning.

    <ul>
      <li>
        Implemented the reinforcement-learning environment
        and training pipeline in Python.
      </li>

      <li>
        Built a neural-network-based Q-function using PyTorch.
      </li>

      <li>
        Trained the agent through reward-driven interaction
        with the environment.
      </li>
    </ul>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">PyTorch</span>
    <span class="tech-tag">Deep Q-Learning</span>
    <span class="tech-tag">Pygame</span>
  </div>

  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/Snake_Game_AI.git"
      target="_blank"
      class="project-button primary">
      GitHub ↗
    </a>

    <a
      href="https://youtu.be/-tuAOXsDKyw"
      target="_blank"
      class="project-button">
      Training Demo ↗
    </a>

  </div>

</div>



<!-- GCN -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/2.gif"
      alt="GCN Portfolio Optimization"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Graph Machine Learning</span>
    <span class="project-date">Nov 2024</span>
  </div>

  <div class="project-title">
    Portfolio Optimization with Graph Convolutional Networks
  </div>

  <div class="project-description">

    Explored graph-based machine learning for modeling
    dependencies among Nifty 50 stocks.

    <ul>
      <li>
        Represented stocks as nodes and correlation structure
        as graph edges.
      </li>

      <li>
        Used Graph Convolutional Networks to learn relationships
        between securities.
      </li>

      <li>
        Combined graph representations with spectral clustering
        to study portfolio diversification.
      </li>
    </ul>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">GCN</span>
    <span class="tech-tag">Graph Learning</span>
    <span class="tech-tag">Spectral Clustering</span>
    <span class="tech-tag">Finance</span>
  </div>

  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/GCN_Spectral_Portfolio.git"
      target="_blank"
      class="project-button primary">
      GitHub ↗
    </a>

  </div>

</div>

</div>



<!-- ========================================================
     MATHEMATICAL / STOCHASTIC MODELING
     ======================================================== -->

<div class="project-section-heading">

  <span>Applied Mathematics</span>

  <h2>Stochastic & Mathematical Modeling</h2>

  <p>
    Earlier work applying stochastic simulation, optimization,
    and mathematical modeling to financial systems.
  </p>

</div>


<div class="projects-grid">


<!-- Monte Carlo -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/3.gif"
      alt="Monte Carlo Simulation"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Stochastic Modeling</span>
    <span class="project-date">May – Jun 2024</span>
  </div>

  <div class="project-title">
    Monte Carlo Simulation for Portfolio Risk Management
  </div>

  <div class="project-description">

    Applied Monte Carlo methods to investigate portfolio
    allocation and financial risk.

    <ul>
      <li>
        Simulated alternative portfolio configurations.
      </li>

      <li>
        Evaluated risk using Value at Risk and Conditional
        Value at Risk.
      </li>

      <li>
        Investigated risk-return tradeoffs using Sharpe-ratio
        based portfolio selection.
      </li>
    </ul>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Monte Carlo</span>
    <span class="tech-tag">Statistics</span>
    <span class="tech-tag">VaR</span>
    <span class="tech-tag">CVaR</span>
  </div>

  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/Monte-Carlo-portfolio.git"
      target="_blank"
      class="project-button primary">
      GitHub ↗
    </a>

  </div>

</div>



<!-- Hull White -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/4.gif"
      alt="Hull White Interest Rate Model"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Stochastic Processes</span>
    <span class="project-date">May 2024</span>
  </div>

  <div class="project-title">
    Interest Rate Modeling with the Hull–White Model
  </div>

  <div class="project-description">

    Studied stochastic interest-rate dynamics and derivative
    pricing using the Hull–White model.

    <ul>
      <li>
        Calibrated mean-reversion and volatility parameters.
      </li>

      <li>
        Simulated short-rate trajectories using Monte Carlo methods.
      </li>

      <li>
        Applied simulated rate paths to pricing caps and floors.
      </li>
    </ul>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">SDEs</span>
    <span class="tech-tag">Hull–White</span>
    <span class="tech-tag">Monte Carlo</span>
  </div>

  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/Interest_Model_Hull_White.git"
      target="_blank"
      class="project-button primary">
      GitHub ↗
    </a>

  </div>

</div>



<!-- Derivatives -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/5.gif"
      alt="Derivative Instruments Project"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Mathematical Finance</span>
    <span class="project-date">Jun – Aug 2024</span>
  </div>

  <div class="project-title">
    Derivative Instruments and Mathematical Pricing
  </div>

  <div class="project-description">

    Investigated mathematical models underlying futures,
    options, and derivative-pricing strategies.

    <ul>
      <li>
        Studied trading mechanisms and option strategies.
      </li>

      <li>
        Investigated Black–Scholes and Heston models
        through case studies.
      </li>
    </ul>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Black–Scholes</span>
    <span class="tech-tag">Heston Model</span>
    <span class="tech-tag">Derivatives</span>
  </div>

  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/Derivative_market_analysis.git"
      target="_blank"
      class="project-button primary">
      GitHub ↗
    </a>

  </div>

</div>



<!-- Bayesian Optimization Thesis -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/6.gif"
      alt="Bayesian Optimization Project"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Optimization</span>
    <span class="project-date">Jan – May 2024</span>
  </div>

  <div class="project-title">
    Bayesian Optimization of Supertrend Parameters
  </div>

  <div class="project-description">

    Developed an optimization framework for selecting
    Supertrend indicator parameters to improve trading
    strategy performance.

    <p>
      <strong>Advisor:</strong>
      Dr. Neelesh Upadhye, IIT Madras
    </p>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Bayesian Optimization</span>
    <span class="tech-tag">Optimization</span>
    <span class="tech-tag">Time Series</span>
  </div>

  <div class="project-links">

    <a
      href="https://drive.google.com/file/d/1LVLeb_6oD-0l1u7OnpLZcG0PR2qSD0y4/view?usp=drive_link"
      target="_blank"
      class="project-button primary">
      Thesis ↗
    </a>

    <a
      href="https://drive.google.com/file/d/1BEsEWh6Sov_E_nqXE6dj1xjnjKQ0alop/view?usp=drive_link"
      target="_blank"
      class="project-button">
      Slides ↗
    </a>

    <a
      href="https://github.com/Shafiq-Abdu/Masters_Thesis-Seminar.git"
      target="_blank"
      class="project-button">
      GitHub ↗
    </a>

  </div>

</div>



<!-- Grid Search -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/7.gif"
      alt="Supertrend Grid Search Optimization"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Optimization</span>
    <span class="project-date">Jun – Dec 2023</span>
  </div>

  <div class="project-title">
    Supertrend Parameter Optimization for Sharpe Ratio
  </div>

  <div class="project-description">

    Developed a systematic parameter-search framework for
    improving risk-adjusted performance of a Supertrend-based
    trading strategy.

    <p>
      <strong>Advisor:</strong>
      Dr. Neelesh Upadhye, IIT Madras
    </p>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Grid Search</span>
    <span class="tech-tag">Optimization</span>
    <span class="tech-tag">Sharpe Ratio</span>
  </div>

  <div class="project-links">

    <a
      href="https://drive.google.com/file/d/12P2fP9daJdOuK8h4ZHe3NVbLzjM3QzZP/view?usp=drive_link"
      target="_blank"
      class="project-button primary">
      Report ↗
    </a>

    <a
      href="https://drive.google.com/file/d/12U5UjOgF31RsF6qTlEnapLzRuc1a1ElZ/view?usp=drive_link"
      target="_blank"
      class="project-button">
      Slides ↗
    </a>

    <a
      href="https://github.com/Shafiq-Abdu/Masters_Thesis-Seminar.git"
      target="_blank"
      class="project-button">
      GitHub ↗
    </a>

  </div>

</div>



<!-- Linear Algebra -->

<div class="project-card">

  <div class="project-image-container">
    <img
      src="/images/8.gif"
      alt="Linear Algebra for Machine Learning"
      class="project-image">
  </div>

  <div class="project-meta">
    <span class="project-category">Applied Linear Algebra</span>
    <span class="project-date">Jun – Dec 2021</span>
  </div>

  <div class="project-title">
    Linear Algebra for Machine Learning and Data Science
  </div>

  <div class="project-description">

    Collaborative project exploring how fundamental ideas
    from linear algebra appear in machine learning,
    data analysis, and autonomous systems.

    <p>
      <strong>Advisor:</strong>
      Dr. Suguna, GACBE
    </p>

  </div>

  <div class="tech-tags">
    <span class="tech-tag">Linear Algebra</span>
    <span class="tech-tag">Machine Learning</span>
    <span class="tech-tag">Data Science</span>
  </div>

  <div class="project-links">

    <a
      href="https://drive.google.com/file/d/17aJOT-fgtL5HDjNwfpwJnS-C-Py9wIw-/view?usp=sharing"
      target="_blank"
      class="project-button primary">
      Report ↗
    </a>

  </div>

</div>


</div>

</div>
