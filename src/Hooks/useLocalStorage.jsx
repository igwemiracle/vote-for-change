import { useState, useEffect } from "react";

// Helper function to get saved value or use initialValue
function getSavedValue(key, initialValue) {
  try {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return initialValue;
  }
}


export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  // Sync value to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, value]);


  return [value, setValue];
}