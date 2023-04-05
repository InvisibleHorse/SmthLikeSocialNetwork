import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <li className="list-group-item">
      <NavLink to={`/messages/${props.id}`} className="nav-link">{props.contactName}</NavLink>
    </li>
  );
}
Contact.propTypes = {
  id: PropTypes.number.isRequired,
  contactName: PropTypes.string.isRequired,
};

export default Contact;
