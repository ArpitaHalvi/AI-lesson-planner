export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    // Setting/saving the item 'todos' to the local storage
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error(`Error while saving ${key} to local storage.`, e);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    // Getting the item 'todos' from the local storage
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(`Error while loading the ${key} from storage.`, e);
  }
};
