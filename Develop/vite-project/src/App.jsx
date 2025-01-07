import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <title>Learnatino</title>
      <header className="header">
        <h1>Learnatino</h1>
        <nav >
          <ul>
            <li className = "nav">
              <a href="#about">About Me</a>
            </li>
            <li className = "nav">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className = "nav">
              <a href="#contact">Contact</a>
            </li>
            <li className = "nav">
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="section">
          <h2>About Me</h2>
          <p>
          It was a concerning development that he couldn't get out of his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.
          </p>
        </section>
      </main>
  </>
  )
}

export default App
