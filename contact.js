const contactList = [
    {
        id: 1,
        name: "Eav Outdommmmmm",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 2,
        name: "Heng Menea",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 3,
        name: "Bronh Saran",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 4,
        name: "Kranh Channak",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 5,
        name: "Yan Theang",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 6,
        name: "Chhoeung Chhunvirak",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 7,
        name: "Chey Kimseng",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 8,
        name: "Long Kakda",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

const list = contactList
    .map(
        (data) => `
    <div class="card swiper-slide">
        <div class="card_image">
        <img
            src="${data.image}"
            alt=""
        />
        </div>
        <div class="card_content">
        <h2 class="card_name">${data.name}</h2>
        <h4 class="card_title">${data.title}</h4>
        <p class="aba">${data.aba}</p>
        </div>
    </div>`
    )
    .join("");

swiperWrapper.innerHTML = list;
