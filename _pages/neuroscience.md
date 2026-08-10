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


<!-- =========================================================
     COMPUTATIONAL NEUROSCIENCE RESOURCE HUB
========================================================= -->

<section class="neuro-resources">

  <div class="resource-heading">
    <p class="resource-eyebrow">LEARNING & RESEARCH</p>
    <h2>🧠 Computational Neuroscience Resource Hub</h2>
    <p>
      Courses, textbooks, institutes, conferences, tools and other
      resources I use while studying computational neuroscience.
    </p>
  </div>


  <!-- TAB BUTTONS -->

  <div class="neuro-tabs" role="tablist">
    <button class="neuro-tab active" data-tab="learning">
      📘 Learning
    </button>
    <button class="neuro-tab" data-tab="institutes">
      🏛 Institutes
    </button>
    <button class="neuro-tab" data-tab="conferences">
      🎤 Conferences
    </button>
    <button class="neuro-tab" data-tab="people">
      🧠 People
    </button>
    <button class="neuro-tab" data-tab="tools">
      💻 Tools
    </button>
    <button class="neuro-tab" data-tab="datasets">
      📊 Data
    </button>
    <button class="neuro-tab" data-tab="media">
      🎧 Media
    </button>

  </div>



  <!-- =====================================================
       LEARNING
  ====================================================== -->

  <div class="neuro-panel active" id="learning">
    <h3>Courses & Books</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://compneuro.neuromatch.io/tutorials/intro.html"
         target="_blank">
        <span class="resource-icon">📘</span>
        <div>
          <strong>Neuromatch Computational Neuroscience</strong>
          <p>
            Tutorials, prerequisite material and computational neuroscience
            course videos.
          </p>
        </div>
      </a>
      <a class="resource-card"
         href="https://neuronaldynamics.epfl.ch/"
         target="_blank">
        <span class="resource-icon">📕</span>
        <div>
          <strong>Neuronal Dynamics</strong>
          <p>
            Online textbook by Wulfram Gerstner and collaborators.
          </p>
        </div>
      </a>
      <a class="resource-card"
         href="https://lcnwww.epfl.ch/gerstner/NeuronalDynamics-MOOCall.html"
         target="_blank">
        <span class="resource-icon">🎓</span>
        <div>
          <strong>EPFL Neuronal Dynamics Course</strong>
          <p>
            Full computational neuroscience course from the
            Laboratory of Computational Neuroscience.
          </p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.cambridge.org/core/books/handson-network-machine-learning-with-python/9735741A096973A9C963E930BBAF5368"
         target="_blank">
        <span class="resource-icon">🐍</span>
        <div>
          <strong>Network Machine Learning with Python</strong>
          <p>
            Networks, machine learning and Python.
          </p>
        </div>
      </a>
      <a class="resource-card"
         href="https://sheffield.pressbooks.pub/introducingmathematicalbiology/"
         target="_blank">
        <span class="resource-icon">🧬</span>
        <div>
          <strong>Introducing Mathematical Biology</strong>
          <p>
            Mathematical biology and network modeling.
          </p>
        </div>
      </a>
      <a class="resource-card"
         href="https://mitpress.mit.edu/9780262548083/theoretical-neuroscience/"
         target="_blank">
        <span class="resource-icon">📚</span>
        <div>
          <strong>Theoretical Neuroscience</strong>
          <p>
            Dayan & Abbott.
          </p>
        </div>
      </a>
    </div>

  </div>



  <!-- =====================================================
       INSTITUTES
  ====================================================== -->

  <div class="neuro-panel" id="institutes">
    <h3>Leading Institutes</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://mcgovern.mit.edu/"
         target="_blank">
        <span class="resource-icon">🏛</span>
        <div>
          <strong>MIT McGovern Institute</strong>
          <p>Brain and cognitive sciences research.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://pni.princeton.edu/"
         target="_blank">
        <span class="resource-icon">🏛</span>
        <div>
          <strong>Princeton Neuroscience Institute</strong>
          <p>Neuroscience and computational research.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.ucl.ac.uk/life-sciences/gatsby"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Gatsby Computational Neuroscience Unit</strong>
          <p>UCL theoretical and computational neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://alleninstitute.org/"
         target="_blank">
        <span class="resource-icon">🔬</span>
        <div>
          <strong>Allen Institute</strong>
          <p>Large-scale neuroscience research and open datasets.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.janelia.org/"
         target="_blank">
        <span class="resource-icon">🔬</span>
        <div>
          <strong>Janelia Research Campus</strong>
          <p>HHMI research campus.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://ctn.zuckermaninstitute.columbia.edu/"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Columbia Center for Theoretical Neuroscience</strong>
          <p>Theoretical and computational approaches to neuroscience.</p>
        </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       CONFERENCES
  ====================================================== -->

  <div class="neuro-panel" id="conferences">
    <h3>Major Conferences</h3>
    <div class="resource-grid">
     <a class="resource-card"
         href="https://www.cosyne.org/"
         target="_blank">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>COSYNE</strong>
          <p>Computational and Systems Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://ccneuro.org/"
         target="_blank">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>CCN</strong>
          <p>Cognitive Computational Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.cnsorg.org/"
         target="_blank">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>CNS</strong>
          <p>Annual Computational Neuroscience Meeting.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.sfn.org/"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Society for Neuroscience</strong>
          <p>SfN annual neuroscience meeting.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://neurips.cc/"
         target="_blank">
        <span class="resource-icon">🤖</span>
        <div>
          <strong>NeurIPS</strong>
          <p>Neural information processing systems.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://bernstein-network.de/en/bernstein-conference/"
         target="_blank">
        <span class="resource-icon">🇩🇪</span>
        <div>
          <strong>Bernstein Conference</strong>
          <p>Computational neuroscience conference.</p>
        </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       PEOPLE
  ====================================================== -->

  <div class="neuro-panel" id="people">
    <h3>Computational Neuroscientists</h3>
    <div class="people-list">
      <a href="https://www.salk.edu/scientist/terrence-sejnowski/"
         target="_blank">Terrence Sejnowski</a>
      <a href="https://www.epfl.ch/labs/lcn/"
         target="_blank">Wulfram Gerstner</a>
      <a href="https://www.simonsfoundation.org/people/larry-abbott/"
         target="_blank">Larry Abbott</a>
      <a href="https://profiles.stanford.edu/surya-ganguli"
         target="_blank">Surya Ganguli</a>
      <a href="https://med.stanford.edu/profiles/scott-linderman"
         target="_blank">Scott Linderman</a>
      <a href="https://www.stat.columbia.edu/~cunningham/"
         target="_blank">John Cunningham</a>
      <a href="https://www.gatsby.ucl.ac.uk/~pel/"
         target="_blank">Peter Latham</a>
      <a href="https://www.ucl.ac.uk/icn/people/maneesh-sahani"
         target="_blank">Maneesh Sahani</a>
      <a href="https://www.ucl.ac.uk/icn/people/claudia-clopath"
         target="_blank">Claudia Clopath</a>
      <a href="https://psychology.princeton.edu/person/jonathan-pillow"
         target="_blank">Jonathan Pillow</a>
      <a href="https://www.buzsakilab.com/"
         target="_blank">György Buzsáki</a>
      <a href="https://www.fil.ion.ucl.ac.uk/~karl/"
         target="_blank">Karl Friston</a>
    </div>
  </div>



  <!-- =====================================================
       TOOLS
  ====================================================== -->

  <div class="neuro-panel" id="tools">
    <h3>Simulation & Computational Tools</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://brian2.readthedocs.io/"
         target="_blank">
        <span class="resource-icon">⚡</span>
        <div>
          <strong>Brian2</strong>
          <p>Spiking neural network simulator.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.neuron.yale.edu/neuron/"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>NEURON</strong>
          <p>Biophysical neuron simulation.</p>
        </div>
      </a>
     <a class="resource-card"
         href="https://www.nest-simulator.org/"
         target="_blank">
        <span class="resource-icon">🔗</span>
        <div>
          <strong>NEST Simulator</strong>
          <p>Large-scale spiking neural networks.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.mooseneuro.org/"
         target="_blank">
        <span class="resource-icon">🫎</span>
        <div>
          <strong>MOOSE Neuro</strong>
          <p>Multiscale neuronal and biochemical simulation.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://pytorch.org/"
         target="_blank">
        <span class="resource-icon">🔥</span>
        <div>
          <strong>PyTorch</strong>
          <p>Machine learning and NeuroAI.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://jax.readthedocs.io/"
         target="_blank">
        <span class="resource-icon">∇</span>
        <div>
          <strong>JAX</strong>
          <p>Differentiable scientific computing.</p>
        </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       DATA
  ====================================================== -->

  <div class="neuro-panel" id="datasets">
    <h3>Public Brain Datasets</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://portal.brain-map.org/"
         target="_blank">
        <span class="resource-icon">🗺</span>
        <div>
          <strong>Allen Brain Map</strong>
          <p>Open brain atlas and neuroscience datasets.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://openneuro.org/"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>OpenNeuro</strong>
          <p>Open neuroimaging datasets.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://about.dandiarchive.org/"
         target="_blank">
        <span class="resource-icon">📊</span>
        <div>
          <strong>DANDI Archive</strong>
          <p>Neurophysiology data archive.</p>
        </div>
   </a>
      <a class="resource-card"
         href="https://www.humanconnectome.org/"
         target="_blank">
        <span class="resource-icon">🕸</span>
        <div>
          <strong>Human Connectome Project</strong>
          <p>Human brain connectivity datasets.</p>
       </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       MEDIA
  ====================================================== -->

  <div class="neuro-panel" id="media">
    <h3>Articles, Podcasts & YouTube</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://www.youtube.com/artemkirsanov"
         target="_blank">
        <span class="resource-icon">▶️</span>
        <div>
          <strong>Artem Kirsanov</strong>
          <p>Computational neuroscience YouTube channel.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.thetransmitter.org/"
         target="_blank">
        <span class="resource-icon">📰</span>
        <div>
          <strong>The Transmitter</strong>
          <p>Neuroscience news, commentary and research.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.brainfacts.org/"
         target="_blank">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>BrainFacts</strong>
          <p>Neuroscience education from the Society for Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://braininspired.co/"
         target="_blank">
        <span class="resource-icon">🎧</span>
        <div>
          <strong>Brain Inspired Podcast</strong>
          <p>Conversations about neuroscience, AI and cognition.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.nitmb.org/"
         target="_blank">
        <span class="resource-icon">∑</span>
        <div>
          <strong>NITMB</strong>
          <p>
            National Institute for Theory and Mathematics in Biology.
          </p>
        </div>
      </a>
    </div>
  </div>

</section>



<!-- =========================================================
     STYLE
========================================================= -->

<style>

.neuro-resources {

  margin-top: 70px;

  padding:
    clamp(25px, 5vw, 55px);

  background:
    linear-gradient(
      145deg,
      #080b13,
      #0d111d
    );

  border:
    1px solid #252b3a;

  border-radius: 20px;

  color: white;

}


.resource-heading {

  margin-bottom: 30px;

}


.resource-eyebrow {

  color: #7f9cff;

  font-size: 12px;

  letter-spacing: .15em;

  font-weight: 700;

  margin-bottom: 6px;

}


.resource-heading h2 {

  color: white;

  margin-top: 0;

}


.resource-heading p {

  color: #aeb5c5;

  max-width: 750px;

}



/* TAB BAR */

.neuro-tabs {

  display: flex;

  gap: 8px;

  overflow-x: auto;

  padding-bottom: 12px;

  margin-bottom: 30px;

  scrollbar-width: thin;

}


.neuro-tab {

  flex: 0 0 auto;

  padding:
    10px
    16px;

  border-radius: 30px;

  border:
    1px solid #343c51;

  background:
    #111725;

  color:
    #aeb9d5;

  cursor: pointer;

  font-size: 14px;

  transition:
    all .25s ease;

}


.neuro-tab:hover {

  border-color:
    #6685ff;

  color: white;

}


.neuro-tab.active {

  background:
    #526fff;

  color: white;

  border-color:
    #526fff;

  box-shadow:
    0 0 18px
    rgba(82,111,255,.35);

}



/* TAB CONTENT */

.neuro-panel {

  display: none;

  animation:
    resourceFade
    .3s ease;

}


.neuro-panel.active {

  display: block;

}


.neuro-panel h3 {

  color: white;

  margin-bottom: 22px;

}



/* RESOURCE CARDS */

.resource-grid {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(230px,1fr)
    );

  gap: 14px;

}


.resource-card {

  display: flex;

  gap: 14px;

  align-items:
    flex-start;

  padding: 18px;

  border-radius: 12px;

  text-decoration:
    none !important;

  border:
    1px solid #262e40;

  background:
    #0e1420;

  transition:
    transform .2s ease,
    border-color .2s ease,
    background .2s ease;

}


.resource-card:hover {

  transform:
    translateY(-3px);

  border-color:
    #5d7cff;

  background:
    #111a2b;

}


.resource-card strong {

  color:
    #8fa8ff;

  font-size:
    15px;

}


.resource-card p {

  margin:
    5px 0 0;

  color:
    #9da7ba;

  font-size:
    13px;

  line-height:
    1.55;

}


.resource-icon {

  font-size:
    22px;

}



/* PEOPLE */

.people-list {

  display: flex;

  flex-wrap: wrap;

  gap: 10px;

}


.people-list a {

  padding:
    9px 14px;

  border-radius:
    30px;

  background:
    #111725;

  border:
    1px solid #30384b;

  color:
    #91a8ff;

  text-decoration:
    none !important;

}


.people-list a:hover {

  border-color:
    #6685ff;

  color:
    white;

}



@keyframes resourceFade {

  from {

    opacity: 0;

    transform:
      translateY(5px);

  }

  to {

    opacity: 1;

    transform:
      translateY(0);

  }

}


@media(max-width:600px) {

  .neuro-resources {

    padding:
      22px 16px;

  }


  .resource-grid {

    grid-template-columns:
      1fr;

  }

}

</style>



<!-- =========================================================
     TAB SCRIPT
========================================================= -->

<script>

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const tabs =
      document.querySelectorAll(
        ".neuro-tab"
      );

    const panels =
      document.querySelectorAll(
        ".neuro-panel"
      );


    tabs.forEach(
      function(tab) {

        tab.addEventListener(
          "click",
          function() {

            tabs.forEach(
              t =>
              t.classList.remove(
                "active"
              )
            );


            panels.forEach(
              panel =>
              panel.classList.remove(
                "active"
              )
            );


            tab.classList.add(
              "active"
            );


            const target =
              document.getElementById(
                tab.dataset.tab
              );


            if(target) {

              target.classList.add(
                "active"
              );

            }

          }
        );

      }
    );

  }
);

</script>




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
