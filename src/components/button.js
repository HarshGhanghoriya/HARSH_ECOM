"use client";

export default function Button({ title, classes, performAction = () => {} }) {
  return (
    <button className={`${classes}`} onClick={performAction}>
      {title}
    </button>
  );
}
