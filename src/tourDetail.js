import { testData } from "../data.js";

const data = [
    {
        id: 1,
        name: 'asdfsdfsd',
        age: 3423434234,
        Image: [1,2,3,4]
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
            <span>${data.id === 1 ? data.id : ''}</span>
            <h1>${data.name}</h1>
            <p>${data.age}</p>
            <p>${data.Image.map((item, index) => {
                return `<div style='background-color: black; color:white; margin: 5px'>${item}</div>`
            }).join('')}</p>
        </div>`;
        }
    })
    .join("");



detail.innerHTML = ff;
