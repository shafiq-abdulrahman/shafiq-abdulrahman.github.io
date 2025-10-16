---
layout: page
title: "Project"
permalink: /new-project/
author_profile: false

---


<!-- 
<style>
.project-section {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  margin-bottom: 3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5rem;
}
.project-section img {
  width: 300px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
}
.project-details {
  flex: 1;
}
.project-details h2 {
  color: #1E90FF;
  margin-top: 0;
}
.project-details ul {
  margin-top: 0.5rem;
}
.project-links a {
  color: #1E90FF;
  font-weight: 500;
  text-decoration: none;
}
.project-links a:hover {
  text-decoration: underline;
}
</style>

---

<div class="project-section">
  <img src="/images/1.gif" alt="AI Snake Game Screenshot">

  <div class="project-details">
    <h2>AI Snake Game with Reinforcement Learning</h2>
    <ul>
      <li>Developed an AI agent to play the classic Snake game using Deep Q-Learning implemented from scratch in Python with Pygame and PyTorch.</li>
      <li>Built and trained a neural network to predict the AI's actions, achieving consistent gameplay improvement through reinforcement learning.</li>
    </ul>

    <p><b>-</b> Nov 2024</p>

    <p class="project-links">
      <a href="https://github.com/Shafiq-Abdu/Snake_Game_AI.git" target="_blank">View Git-repo</a> |
      <a href="https://youtu.be/-tuAOXsDKyw" target="_blank">View Training Clip</a>
    </p>
  </div>
</div> -->


<style>
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


.project-image {
  width: 75%;            /* or try 60%, 50%, etc. */
  max-width: 400px;      /* controls max width */
  height: auto;          /* keeps proportions */
  display: block;
  margin: 1rem auto;
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




