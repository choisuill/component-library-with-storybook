import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul, h1, h2, h3, h4, h5, h6 {
  margin:0;
  padding:0;
};

button, input, select, option textarea {
  // default font-family
  // default font-size
};

button {
  border: 1px solid transparent;
  outline: none;
  background-color:transparent;
  cursor: pointer;
}

input {
  outlint: none;
}

ol, ul {
  list-style:none;
}

a {
  color:inherit;
  text-decoration:none;
}

a:hover {
  text-decoration:underline;
}
`;

export default GlobalStyles;
