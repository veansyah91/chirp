import{W as c,j as s,a as l}from"./app-5bcb44db.js";import{A as p}from"./AuthenticatedLayout-b2711c41.js";import{I as g}from"./InputError-774aa839.js";import{P as x}from"./PrimaryButton-a22fcf92.js";import h from"./Chirp-2bc4e6b4.js";import"./Dropdown-1231a57c.js";import"./transition-1dc939f3.js";function C({auth:r,chirps:a}){const{data:o,setData:t,post:i,processing:m,reset:n,errors:d}=c({message:""}),u=e=>{e.preventDefault(),i(route("chirps.store"),{onSuccess:()=>n()})};return s.jsxs(p,{user:r.user,children:[s.jsx(l,{title:"Chirps"}),s.jsxs("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[s.jsxs("form",{onSubmit:u,children:[s.jsx("textarea",{value:o.message,placeholder:"What's on your mind?",className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",onChange:e=>t("message",e.target.value)}),s.jsx(g,{message:d.message,className:"mt-2"}),s.jsx(x,{className:"mt-4",disabled:m,children:"Chirp"})]}),s.jsx("div",{className:"mt-6 bg-white shadow-sm rounded-lg divide-y",children:a.map(e=>s.jsx(h,{chirp:e},e.id))})]})]})}export{C as default};