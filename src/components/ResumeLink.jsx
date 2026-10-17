import React from 'react';

const RESUME_PDF_URL = '/Resume/Favas_T_Resume%20(3).pdf';

export default function ResumeLink({ children, ...props }) {
  return (
    <a
      {...props}
      href={RESUME_PDF_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
