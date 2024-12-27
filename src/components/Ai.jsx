import React, { useState } from 'react';
import styles from './Ai.module.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function Ai() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);


  async function run(prompt) {
    if(prompt.trim()){
      setLoading(true);
      setError(''); 
      setOutput(''); 

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent("This is a recipe generator. I can suggest recipes based on ingredients or meal names."+prompt);
      const response = await result.response;
      const text = await response.text();
      setOutput(text);
    } catch (err) {
      setError('An error occurred while generating the text. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false); 
    }}
  }

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
          <button onClick={() => run(prompt)} className={styles.submitButton}>
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
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}