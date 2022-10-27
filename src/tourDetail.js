import { testData } from "../data.js";

const data = [
    {
        id: 1,
        name: 'asdfsdfsd',
        age: 3423434234,
    },
    {
        id: 2,
        name: 'asdfadfadfsadfsggkhjfghkg',
        age: 3423434234,
    },
    {
        id: 3,
        name: 'akasjdfkdnsdf;l',
        age: 3423434234,
    },
]

const detail = document.getElementById("detail");

const id = window.localStorage.getItem("id");

const ff = data
    .map((data, index) => {
        if (data.id == id) {
            return `<div>
            <span>${data.id}</span>
            <h1>${data.name}</h1>
            <p>${data.age}</p>
        </div>`;
        }
    })
    .join("");

detail.innerHTML = ff;
