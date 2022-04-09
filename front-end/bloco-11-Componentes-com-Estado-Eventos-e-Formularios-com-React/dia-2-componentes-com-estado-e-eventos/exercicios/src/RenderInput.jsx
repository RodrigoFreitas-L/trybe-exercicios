import React from 'react';

class RenderInput extends React.Component {
  render() {
    const { id, type, name, value, maxLength, required, handler, blurHandler } = this.props;
    return (
      <input value={value} name ={name} id={id} type={type} maxLength={maxLength} required={required} onChange={handler} onBlur={blurHandler} />
    )
  }
}

export default RenderInput;