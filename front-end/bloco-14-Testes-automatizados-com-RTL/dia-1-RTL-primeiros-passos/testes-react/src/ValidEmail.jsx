// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';
import style from './ValidEmail.module.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3
        className={ verifyEmail(email) ? style.valid : style.invalid }
        >
        {(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
      </h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;