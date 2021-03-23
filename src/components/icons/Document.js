import * as React from 'react'

function Document({ width = 20, height = 23, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      fill="none"
      color="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.35 5.172L13.893.67a.727.727 0 00-.462-.188H2.435c-.67 0-1.224.563-1.224 1.243V20.36c0 .68.555 1.242 1.224 1.242h15.153c.67 0 1.223-.562 1.223-1.242V6.344c0-.446-.161-.844-.461-1.172zm-.74.586h-3.694c-.161 0-.3-.141-.3-.305v-3.75l3.995 4.055zm-.022 15.002H2.435a.417.417 0 01-.415-.422V1.726c0-.235.184-.422.415-.422h10.396v4.172c0 .61.485 1.102 1.085 1.102h4.087v13.783a.413.413 0 01-.415.398zm.762-15.588L13.893.67a.727.727 0 00-.462-.188H2.435c-.67 0-1.224.563-1.224 1.243V20.36c0 .68.555 1.242 1.224 1.242h15.153c.67 0 1.223-.562 1.223-1.242V6.344c0-.446-.161-.844-.461-1.172zm-.74.586h-3.694c-.161 0-.3-.141-.3-.305v-3.75l3.995 4.055zm-.022 15.002H2.435a.417.417 0 01-.415-.422V1.726c0-.235.184-.422.415-.422h10.396v4.172c0 .61.485 1.102 1.085 1.102h4.087v13.783a.413.413 0 01-.415.398z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.771 1.726c0-.917.745-1.683 1.664-1.683h10.996c.29 0 .55.125.746.292l.015.013 4.477 4.52.005.007c.372.405.578.909.578 1.469V20.36c0 .917-.745 1.683-1.664 1.683H2.435c-.919 0-1.664-.766-1.664-1.683V1.726zm17.46 4.035a1.37 1.37 0 00-.2-.286L13.596.996a.348.348 0 00-.123-.066l4.758 4.83zM2.46 1.744V20.32h15.103V7.018h-3.647c-.85 0-1.525-.696-1.525-1.542V1.744H2.46zm11.596 1.032v2.542h2.504l-2.504-2.542z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.731 10.164a.88.88 0 01.88-.88h8.8a.88.88 0 110 1.76h-8.8a.88.88 0 01-.88-.88zM4.731 13.683a.88.88 0 01.88-.88h8.8a.88.88 0 110 1.76h-8.8a.88.88 0 01-.88-.88zM4.731 17.203a.88.88 0 01.88-.88h5.28a.88.88 0 110 1.76h-5.28a.88.88 0 01-.88-.88z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Document
