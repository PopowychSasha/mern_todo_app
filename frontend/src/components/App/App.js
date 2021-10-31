import React, { useState, useEffect } from 'react';
import List from '../List/List';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <List />
    </div>
  );
}

export default App;