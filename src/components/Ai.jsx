import React, { useState } from 'react';
import styles from './Ai.module.css';
import ReactMarkdown from 'react-markdown';

export default function Ai() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  async function run(currentPrompt) {
  if (currentPrompt.trim()) {
    setLoading(true);
    setError('');
    setOutput('');

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-site.com", 
          "X-Title": "Your Site Name"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-prover-v2:free", 
          messages: [
            {
              role: "user",
              content: `You are an intelligent recipe assistant. If the user input is unclear or not related to food or recipes, politely respond with something like:
"I'm not sure what you mean. Could you clarify your request? Or would you like me to recommend a recipe for you?"
Now, based on this user input, provide a helpful answer: ${currentPrompt}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || 'No response from the model.';
      setOutput(text);
    } catch (err) {
      setError('An error occurred while generating the text. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }
}

const handleSubmit = () => {
  run(prompt);
};

  return (
    <div className={styles.ai}>
      <div className={styles.promptDiv}>
        <h2>What would you like to create?</h2>
        <p>Enter a prompt below to get started with our AI recipe generator!</p>
        <div className={styles.promptInputDiv}>
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            className={styles.promptInput}
            placeholder="Enter ingredients to create a recipe..."
          />
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit
          </button>
        </div>
      </div>

      {loading && (
        <div className={styles.loading}>
          <span>Loading...</span>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          <span>{error}</span>
        </div>
      )}

      {output && (
        <div className={styles.outputDiv}>
          <h3>Generated Recipe:</h3>
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}