import React, { useState } from 'react';
import './PasswordGenerator.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className='container'>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div className='typeofpass'>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div className='typeofpass'>
        <label>Include Lowercase:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
      <div className='typeofpass'>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div className='typeofpass'>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className='typeofgene'>
        <label>Generated Password:</label>
        <input type="text" value={password} readOnly />
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
