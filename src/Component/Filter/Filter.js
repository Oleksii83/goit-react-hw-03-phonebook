// import { Component } from 'react';
import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.SearchContainer}>
    <p className={s.ContName}>Find contacts by name:</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="InputSearch"
      placeholder="Paul Richardson"
    />
  </label>
);

export default Filter;
