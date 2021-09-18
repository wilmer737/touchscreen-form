import React from 'react';

export default () => {
  const [input, setInput] = React.useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('for submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} />
      <button type="submit">Submit Form</button>
    </form>
  )
}
