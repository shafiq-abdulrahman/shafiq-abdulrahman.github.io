---
layout: splash
title: "Project"
permalink: /new-project/
author_profile: false
---


<style>


/* .page__content {
  max-width: 900px;   /* limit the width */
  margin: 0 auto;     /* center it */
  padding: 1.0rem;    /* some space on both sides */
} */



.project-section {
  margin-bottom: 3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e90ff;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-description ul {
  list-style-type: square;
  padding-left: 1.2rem;
}

/* .project-image {
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
} */
/* .project-image {
  width: 50%;            
  max-width: 400px;      
  height: auto;          
  display: block;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.15);
}  */


.project-image {
  width: auto;             /* keep natural width */
  max-width: 400px;        /* shrink if needed on large screens */
  max-height: 220px;       /* ✨ limit tall images */
  height: auto;            /* maintain proportions */
  object-fit: contain;     /* no cropping at all */
  display: block;
  margin: 1rem auto;       /* center image */
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.15);
}

.project-image:hover {
  transform: scale(1.03);
}

.project-links {
  margin-top: 0.5rem;
  text-align: center;
}

.project-links a {
  color: #1e90ff;
  text-decoration: none;
  font-weight: 500;
  margin: 0 10px;
}

.project-links a:hover {
  text-decoration: underline;
}
.project-media {
  display: flex;
  align-items: center;
  gap: 16px;
}

.project-qr {
  width: 120px;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}


/* Responsive */
@media (max-width: 768px) {
  .project-title {
    text-align: center;
  }
  .project-description {
    text-align: justify;
  }
  .project-links {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>

<div class="project-section">

  <div class="project-title">AI Flash card Study app</div>

  <div class="project-description">
    <ul>
      <li>Built a production web app that generates flashcards from PDFs/notes using FastAPI + OpenAI. Deployed on Render, frontend on GitHub Pages, installable as a PWA.</li>
    </ul>
    <p><strong>Jan 2026</strong></p>
  </div>

  <!-- <img src="/images/fl.png" alt="Flash Card App" class="project-image"> -->
  <div class="project-media">
    <img src="/images/fl.png" alt="AI Flashcard App" class="project-image">
    <img 
      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shafiq-abdu.github.io/flashcards-app/"
      alt="QR code for AI Flashcard App"
      class="project-qr"
    >
</div>
  <div class="project-links">
    <a href="https://shafiq-abdu.github.io/flashcards-app/" target="_blank">App link</a> 
  </div>



<!-- Example project section -->


<div class="project-section">

  <div class="project-title">AI Snake Game with Reinforcement Learning</div>

  <div class="project-description">
    <ul>
      <li>Developed an AI agent to play the classic Snake game using Deep Q Learning implemented from scratch in Python with Pygame and PyTorch.</li>
      <li>Built and trained a neural network to predict the AI’s actions, achieving consistent gameplay improvement through reinforcement learning.</li>
    </ul>
    <p><strong>Nov - 2024</strong></p>
  </div>

  <img src="/images/1.gif" alt="AI Snake Game" class="project-image">

  <div class="project-links">
    <a href="https://github.com/Shafiq-Abdu/Snake_Game_AI.git" target="_blank">View Git-repo</a> |
    <a href="https://youtu.be/-tuAOXsDKyw" target="_blank">View Training Clip</a>
  </div>

</div>
---
<!-- Project2 -->
<div class="project-section">
  <div class="project-title">Portfolio Optimization with Graph Convolutional Networks (GCN) on Nifty 50 Stocks</div>

  <div class="project-description">
    <ul>
      <li>Developed GCN Model: Created a GCN to capture dependencies among Nifty 50 stocks using daily returns, volatility, and RSI.</li>
      <li>Constructed Stock Graph and Applied Spectral Clustering for Diversification: Built a stock graph with correlations as edges, enhancing diversification.</li>
      <li>Validated through Backtesting: Demonstrated effective risk-adjusted returns, showcasing GCN’s potential in financial optimization.</li>
    </ul>
    <p><strong>Nov 2024</strong></p>
  </div>

  <img src="/images/2.gif" alt="GCN Portfolio Optimization" class="project-image">

  <div class="project-links">
    <a href="https://github.com/Shafiq-Abdu/GCN_Spectral_Portfolio.git" target="_blank">View Git-repo</a>
  </div>
</div>

---

<div class="project-section">
  <div class="project-title">Monte Carlo Simulation and Risk Management for Nifty 50 Portfolio Optimization</div>

  <div class="project-description">
    <ul>
      <li>Applied Monte Carlo simulation to optimize a portfolio of Nifty 50 stocks, selecting top stocks based on Sharpe ratios.</li>
      <li>Evaluated portfolio risk using Value at Risk (VaR) and Conditional Value at Risk (CVaR).</li>
      <li>Identified optimal portfolio allocations to maximize returns while managing risk exposure.</li>
    </ul>
    <p><strong>May – June 2024</strong></p>
  </div>

  <img src="/images/3.gif" alt="Monte Carlo Simulation" class="project-image">

  <div class="project-links">
    <a href="https://github.com/Shafiq-Abdu/Monte-Carlo-portfolio.git" target="_blank">View Git-repo</a>
  </div>
</div>

---
<div class="project-section">
  <div class="project-title">Interest Rate Modeling and Derivative Pricing using the Hull-White Model</div>

  <div class="project-description">
    <ul>
      <li>Calibrated the Hull-White model parameters (mean-reversion rate and volatility) using historical interest rate data to simulate short-term interest rate paths.</li>
      <li>Implemented Monte Carlo simulations to forecast future interest rate scenarios and used these to price interest rate derivatives (Caps and Floors).</li>
      <li>Conducted scenario analysis by adjusting economic variables (volatility, mean reversion) to assess the impact on derivative pricing and market risks.</li>
    </ul>
    <p><strong>May 2024</strong></p>
  </div>

  <img src="/images/4.gif" alt="Hull-White Model Simulation" class="project-image">

  <div class="project-links">
    <a href="https://github.com/Shafiq-Abdu/Interest_Model_Hull_White.git" target="_blank">View Git-repo</a>
  </div>
</div>

---
<div class="project-section">
  <div class="project-title">Derivative Instruments and Their Features</div>

  <div class="project-description">
    <ul>
      <li>Investigated trading mechanisms and valuation models of futures and options, and developed sophisticated option trading strategies.</li>
      <li>Conducted three detailed case studies, providing an in-depth exploration of the Black-Scholes and Heston models.</li>
    </ul>
    <p><strong>Finlatics | Jun–Aug 2024</strong></p>
  </div>

  <img src="/images/5.gif" alt="Derivative Instruments" class="project-image">

  <div class="project-links">
    <a href="https://github.com/Shafiq-Abdu/Derivative_market_analysis.git" target="_blank">View Git-repo</a>
  </div>
</div>
---

<div class="project-section">
  <div class="project-title">Optimizing Supertrend Parameters for Enhanced Profit</div>

  <div class="project-description">
    <p>Framed an algorithm to optimize indicator parameters for maximizing profit gain using <em>Bayesian Optimization</em> techniques.</p>
    <p><strong>Advisor:</strong> Dr. Neelesh Upadhye, IIT Madras | <strong>Jan–May 2024</strong></p>
  </div>

  <img src="/images/6.gif" alt="Supertrend Optimization Profit" class="project-image">

  <div class="project-links">
    <a href="https://drive.google.com/file/d/1LVLeb_6oD-0l1u7OnpLZcG0PR2qSD0y4/view?usp=drive_link">View Thesis</a> |
    <a href="https://drive.google.com/file/d/1BEsEWh6Sov_E_nqXE6dj1xjnjKQ0alop/view?usp=drive_link">View Slides</a> |
    <a href="https://github.com/Shafiq-Abdu/Masters_Thesis-Seminar.git">View Gitcode</a>
  </div>
</div>
---
<div class="project-section">
  <div class="project-title">Optimizing Supertrend Parameters for Enhanced Sharpe Ratio</div>

  <div class="project-description">
    <p>Developed algorithmic optimization framework using <em>Grid Search Optimization</em> techniques to improve Sharpe ratio performance.</p>
    <p><strong>Advisor:</strong> Dr. Neelesh Upadhye, IIT Madras | <strong>Jun–Dec 2023</strong></p>
  </div>

  <img src="/images/7.gif" alt="Supertrend Sharpe Ratio Optimization" class="project-image">

  <div class="project-links">
    <a href="https://drive.google.com/file/d/12P2fP9daJdOuK8h4ZHe3NVbLzjM3QzZP/view?usp=drive_link.">View Report</a> |
    <a href="https://drive.google.com/file/d/12U5UjOgF31RsF6qTlEnapLzRuc1a1ElZ/view?usp=drive_link">View Slides</a> |
    <a href="https://github.com/Shafiq-Abdu/Masters_Thesis-Seminar.git">View Gitcode</a>
  </div>
</div>

---
<div class="project-section">
  <div class="project-title">Linear Algebra for Machine Learning and Data Science</div>

  <div class="project-description">
    <p>Collaborative project exploring linear algebra’s practical applications in data science and autonomous systems, emphasizing the link between mathematical principles and technological advancements.</p>
    <p><strong>Advisor:</strong> Dr. Suguna, GACBE | <strong>Jun–Dec 2021</strong></p>
  </div>

  <img src="/images/8.gif" alt="Linear Algebra Project" class="project-image">

  <div class="project-links">
    <a href="https://drive.google.com/file/d/17aJOT-fgtL5HDjNwfpwJnS-C-Py9wIw-/view?usp=sharing">View Report</a>
  </div>
</div>
---

