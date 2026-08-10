---
layout: splash
title: "CompNeuro"
permalink: /neuroscience/
author_profile: true
---

<section class="compneuro-hero">

  <div class="compneuro-text">
    <p class="eyebrow">CURRENT RESEARCH</p>
    <h1>Computational Neuroscience</h1>
    <p class="subtitle">
      Mathematical models of neural circuits, neural representation,
      dynamical systems, and stochastic neural computation.
    </p>
    <div class="topics">
      Neural Circuits · Dynamical Systems · Neural Geometry · Modeling
    </div>
  </div>

  <div class="neuron-container">
    <svg
      class="neuron-svg"
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="somaGradient">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#8fb7ff"/>
          <stop offset="100%" stop-color="#516cff"/>
        </radialGradient>
      </defs>
      <!-- NEURON BRANCHES -->
      <g class="branches">
        <path d="M400 250 C340 210 310 160 260 110" />
        <path d="M260 110 C220 80 180 75 130 95" />
        <path d="M260 110 C240 75 235 45 245 20" />
        <path d="M400 250 C330 260 290 300 235 350" />
        <path d="M235 350 C190 380 150 385 100 370" />
        <path d="M235 350 C220 385 215 410 220 440" />
        <path d="M400 250 C410 190 420 140 415 85" />
        <path d="M415 85 C410 50 395 25 375 5" />
        <path d="M400 250 C470 205 520 175 575 150" />
        <path d="M575 150 C620 130 660 90 685 45" />
        <path d="M575 150 C610 165 645 170 690 165" />
        <path d="M400 250 C470 265 515 305 565 350" />
        <path d="M565 350 C610 385 655 395 710 375" />
        <path d="M565 350 C585 390 585 420 575 455" />
      </g>
      <!-- SMALL TERMINAL NODES -->
      <g class="nodes">
        <circle cx="130" cy="95" r="5"/>
        <circle cx="245" cy="20" r="5"/>
        <circle cx="100" cy="370" r="5"/>
        <circle cx="220" cy="440" r="5"/>
        <circle cx="375" cy="5" r="5"/>
        <circle cx="685" cy="45" r="5"/>
        <circle cx="690" cy="165" r="5"/>
        <circle cx="710" cy="375" r="5"/>
        <circle cx="575" cy="455" r="5"/>
      </g>
      <!-- SOMA -->
      <circle
        class="soma-ring"
        cx="400"
        cy="250"
        r="40"
      />
      <circle
        class="soma"
        cx="400"
        cy="250"
        r="22"
      />
      <circle
        class="soma-core"
        cx="400"
        cy="250"
        r="7"
      />
      <!-- ELECTRICAL SIGNALS -->
      <circle class="signal signal1" r="6">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="
          M130 95
          C180 75 220 80 260 110
          C310 160 340 210 400 250
          "
        />
      </circle>
      <circle class="signal signal2" r="6">
        <animateMotion
          dur="3.5s"
          begin="0.7s"
          repeatCount="indefinite"
          path="
          M685 45
          C660 90 620 130 575 150
          C520 175 470 205 400 250
          "
        />
      </circle>
      <circle class="signal signal3" r="5">
        <animateMotion
          dur="4s"
          begin="1.5s"
          repeatCount="indefinite"
          path="
          M100 370
          C150 385 190 380 235 350
          C290 300 330 260 400 250
          "
        />
      </circle>
      <circle class="signal signal4" r="5">
        <animateMotion
          dur="4.5s"
          begin="2s"
          repeatCount="indefinite"
          path="
          M400 250
          C470 265 515 305 565 350
          C610 385 655 395 710 375
          "
        />
      </circle>
    </svg>

  </div>

</section>



<section class="research-section">

  <h2>Current Research Direction</h2>

  <p>
    I am interested in understanding how neural population activity
    represents information and how mathematical structure emerges from
    neural data.
  </p>

  <div class="research-grid">
    <div class="research-card">
      <h3>Neural Representation</h3>
      <p>
        Studying geometry and structure in population-level neural activity.
      </p>
    </div>
    <div class="research-card">
      <h3>Neural Circuits</h3>
      <p>
        Modeling interactions between neurons using dynamical systems
        and stochastic processes.
      </p>
    </div>
    <div class="research-card">
      <h3>Computational Models</h3>
      <p>
        Building mathematical and computational models to connect theory,
        neural data, and behavior.
      </p>
    </div>

  </div>

</section>



<style>

.compneuro-hero {

  min-height: 600px;

  display: grid;

  grid-template-columns:
    minmax(280px, 0.85fr)
    minmax(350px, 1.15fr);

  align-items: center;

  gap: 30px;

  padding:
    clamp(35px, 6vw, 80px)
    clamp(25px, 5vw, 70px);

  margin-top: 20px;

  border-radius: 22px;

  overflow: hidden;

  background:

    radial-gradient(
      circle at 75% 45%,
      rgba(78, 96, 255, 0.16),
      transparent 35%
    ),

    radial-gradient(
      circle at 60% 70%,
      rgba(0, 180, 255, 0.08),
      transparent 40%
    ),

    linear-gradient(
      145deg,
      #050a13,
      #080d1c 60%,
      #03050b
    );

  border:
    1px solid rgba(120, 140, 255, 0.18);

}


.compneuro-text {

  z-index: 2;

}


.eyebrow {

  font-size: 12px;

  letter-spacing: 0.18em;

  font-weight: 700;

  color: #87a7ff;

  margin-bottom: 12px;

}


.compneuro-text h1 {

  color: white;

  font-size:
    clamp(34px, 5vw, 60px);

  line-height: 1.05;

  margin-bottom: 20px;

}


.subtitle {

  color:
    rgba(235, 240, 255, 0.72);

  font-size: 17px;

  max-width: 520px;

  line-height: 1.7;

}


.topics {

  margin-top: 25px;

  color: #90a8ff;

  font-size: 14px;

  letter-spacing: 0.03em;

}



.neuron-container {

  width: 100%;

}


.neuron-svg {

  width: 100%;

  max-width: 750px;

  overflow: visible;

}



.branches path {

  fill: none;

  stroke:
    rgba(115, 135, 255, 0.48);

  stroke-width: 2.3;

  stroke-linecap: round;

  filter: url(#glow);

  animation:
    branchGlow
    4s
    ease-in-out
    infinite alternate;

}


.branches path:nth-child(2n) {

  animation-delay: -1s;

}


.branches path:nth-child(3n) {

  animation-delay: -2s;

}



.nodes circle {

  fill: #788cff;

  filter: url(#glow);

  animation:
    nodePulse
    3s
    ease-in-out
    infinite;

}



.soma {

  fill:
    url(#somaGradient);

  filter:
    url(#glow);

  animation:
    somaPulse
    2s
    ease-in-out
    infinite alternate;

}


.soma-core {

  fill: white;

  filter: url(#glow);

}


.soma-ring {

  fill: none;

  stroke:
    rgba(110, 135, 255, 0.35);

  stroke-width: 2;

  transform-origin:
    400px
    250px;

  animation:
    ringPulse
    2.8s
    ease-out
    infinite;

}



.signal {

  fill: white;

  filter: url(#glow);

}


.signal2 {

  fill: #a9b7ff;

}


.signal3 {

  fill: #8deeff;

}


.signal4 {

  fill: #c1a3ff;

}



@keyframes branchGlow {

  from {

    stroke:
      rgba(90, 110, 220, 0.25);

  }

  to {

    stroke:
      rgba(125, 150, 255, 0.7);

  }

}



@keyframes nodePulse {

  0% {

    opacity: 0.3;

  }

  50% {

    opacity: 1;

  }

  100% {

    opacity: 0.4;

  }

}



@keyframes somaPulse {

  from {

    opacity: 0.75;

  }

  to {

    opacity: 1;

  }

}



@keyframes ringPulse {

  0% {

    transform:
      scale(0.65);

    opacity: 0.7;

  }

  100% {

    transform:
      scale(1.8);

    opacity: 0;

  }

}



.research-section {

  padding:
    70px
    10px;

}


.research-section h2 {

  margin-bottom: 15px;

}


.research-section > p {

  max-width: 700px;

  line-height: 1.7;

}


.research-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

  margin-top: 35px;

}


.research-card {

  padding: 24px;

  border-radius: 14px;

  border:
    1px solid #e5e7eb;

  background:
    rgba(255, 255, 255, 0.03);

}


.research-card h3 {

  margin-top: 0;

  color: #4c7eff;

}


.research-card p {

  font-size: 15px;

  line-height: 1.6;

}



@media
(max-width: 800px) {

  .compneuro-hero {

    grid-template-columns:
      1fr;

    min-height: auto;

  }


  .neuron-container {

    margin-top: 20px;

  }


  .research-grid {

    grid-template-columns:
      1fr;

  }

}



@media
(prefers-reduced-motion: reduce) {

  .branches path,

  .nodes circle,

  .soma,

  .soma-ring {

    animation: none;

  }


  .signal {

    display: none;

  }

}

</style>
