import React, { useState } from 'react';
import './PasswordGenerator.css'

const PasswordGenerator = () => {
  // State variables
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Function to generate a random password
  const generatePassword = () => {
    // Logic to generate password based on selected criteria
    // Customize this based on your requirements
    const characters = [];
    if (includeUppercase) characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeLowercase) characters.push('abcdefghijklmnopqrstuvwxyz');
    if (includeNumbers) characters.push('0123456789');
    if (includeSymbols) characters.push('!@#$%^&*()_+-=[]{}|;:,.<>?');

    const allCharacters = characters.join('');
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  // Function to copy the generated password to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div>
        <label>Include Lowercase:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <label>Generated Password:</label>
        <input type="text" value={password} readOnly />
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
