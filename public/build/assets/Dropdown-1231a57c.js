import{r,j as t,d as p}from"./app-5bcb44db.js";import{t as x}from"./transition-1dc939f3.js";const c=r.createContext(),i=({children:e})=>{const[o,n]=r.useState(!1),s=()=>{n(a=>!a)};return t.jsx(c.Provider,{value:{open:o,setOpen:n,toggleOpen:s},children:t.jsx("div",{className:"relative",children:e})})},u=({children:e})=>{const{open:o,setOpen:n,toggleOpen:s}=r.useContext(c);return t.jsxs(t.Fragment,{children:[t.jsx("div",{onClick:s,children:e}),o&&t.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},m=({align:e="right",width:o="48",contentClasses:n="py-1 bg-white",children:s})=>{const{open:a,setOpen:d}=r.useContext(c);let l="origin-top";e==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return o==="48"&&(g="w-48"),t.jsx(t.Fragment,{children:t.jsx(x,{as:r.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${g}`,onClick:()=>d(!1),children:t.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:s})})})})},f=({className:e="",children:o,...n})=>t.jsx(p,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:o});i.Trigger=u;i.Content=m;i.Link=f;const v=i;export{v as D};