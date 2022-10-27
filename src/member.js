import data from "../data.json" assert { type: "json" };

const member = document.querySelector(".grid_box");

const list = data.member
    .map(
        (item) => `
<div class="image">
<a href="${item.url}">
    <img
        alt=""
        src="${item.img}"
    />

    <div class="popup">
        <h4 class="name">${item.name}</h4>
        <p class="title">- ${item.title} -</p>
    </div>
</a>
</div>
`
    )
    .join("");

member.innerHTML = list;
