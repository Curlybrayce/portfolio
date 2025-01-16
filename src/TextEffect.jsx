import React, { useEffect, useState } from 'react';
// import './TextEffect.css'; // Create this CSS file for styling

const TextEffect = () => {
  const text = `
    I specialize in crafting robust and scalable applications using PHP, JavaScript (Node.js, React, TypeScript), Python (Django, Flask), and C# (.NET Core). 
    With a strong focus on high-performance web applications, APIs, and user-centric solutions, I bring expertise in full-stack development, session management, 
    and role-based authorization. I’m passionate about solving complex problems, exploring emerging technologies like Web3 and blockchain, and creating innovative 
    tools like text editors and event service apps. My work reflects a commitment to quality, adaptability, and delivering impactful software solutions.
  `;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 94) + 33);

    const interval = setInterval(() => {
      if (index < text.length) {
        const nextChar = Math.random() > 0.8 ? randomChar() : text[index];
        setDisplayedText((prev) => prev + nextChar);
        if (nextChar === text[index]) setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed here
    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className="text-container">
      <p id="animated-text">{displayedText}</p>
    </div>
  );
};

export default TextEffect;
