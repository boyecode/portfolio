import React from 'react'

const Project = () => {
  return (
    <div>
            {/* pro */}
<section className="projects">
  <h2 className="section-title">Featured Projects</h2>

  <div className="projects-container">

    {/* Password Toggle */}
    <div className="project-card">
      <div className="project-content">
        <h3>🔐 Password Visibility Component</h3>
        <p>
          Built a reusable password input component with toggle functionality 
          to improve user experience in forms.
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>useState</span>
          <span>CSS</span>
        </div>
      </div>
    </div>


    {/* Counter App */}
    <div className="project-card reverse">
      <div className="project-content">
        <h3>📊 Interactive Counter Application</h3>
        <p>
          Developed a simple state-based counter to understand React state 
          management and dynamic UI updates.
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="project-images">
        <img src="src/assets/ChatGPT Image Feb 12, 2026, 08_50_08 PM.png" alt="Counter Project" />
      </div>
    </div>


    {/* Meta Clone */}
    <div className="project-card">
      <div className="project-content">
        <h3>🌐 Meta About Page Clone</h3>
        <p>
          Recreated the Meta About page layout to practice responsive design, 
          spacing, and real-world UI replication.
        </p>

        <div className="tech-stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>Responsive Design</span>
        </div>
      </div>

      <div className="project-images grid-images">
        <img src="src/assets/ChatGPT Image Feb 12, 2026, 09_13_40 PM.png" alt="Meta Clone 1" />
        <img src="src/assets/ChatGPT Image Feb 12, 2026, 09_56_18 PM.png" alt="Meta Clone 2" />
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Project