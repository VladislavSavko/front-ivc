function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        const container = document.querySelector('.user-card');
        for (let i = 0; i < data.length; i++) {
            const user = document.createElement("div");
            const image = document.createElement("img");
            image.src = "img_avatar.png";
            image.width = 250;
            image.height = 250;
            addParagraph(user, i, data[i].name, "");
            user.append(image);


            var containerStyle = "display: grid;grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));grid-gap: 1rem;";
            var userStyle = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);max-width: 250px;margin: auto;font-family: arial;margin: 10px;grid-column-gap: 10px;grid-row-gap: 10px;";

            user.style.cssText = userStyle



            container.style.cssText = containerStyle;
            user.onclick = function (event) {
                window.location.href = "C:/Users/37544/Desktop/JS/user.html?=" + data[i].id;
            }


            container.append(user);
        }

        function addParagraph(user, i, header, content) {
            const newSpan = document.createElement("p");
            newSpan.style.cssText = "font-weight:bold";
            newSpan.textContent = header;
            user.append(newSpan);
            user.append(content);
        }
    })
    .catch(function (error) {
        console.log(error);
    });