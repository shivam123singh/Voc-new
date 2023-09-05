import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// helps to merge all duplicates tailwind styles
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// converts first letter of a word to uppercase
export const capitalizeFirstLetter = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// this allows you to exclude some data from your object you don't want to send to the backend.
// e.g as seen in edit-password-form.jsx
export const excludeFields = (obj, fieldsToExclude) => {
  const newObj = { ...obj };
  for (const field of fieldsToExclude) {
    delete newObj[field];
  }
  return newObj;
};
