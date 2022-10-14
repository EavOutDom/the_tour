import { testData } from "./data.js";

const detail = document.getElementById("detail");

const id = window.localStorage.getItem("id");

const ff = testData
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
