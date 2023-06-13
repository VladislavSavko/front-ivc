function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('user');
const url = 'https://jsonplaceholder.typicode.com/users/' + window.location.href.split("?")[1].split("=")[1];

const homeButton = document.getElementById('buttonForHome');
homeButton.style.cssText = "border: 1px solid #CCCCCC;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;border-radius: 4px;color: #555555;display:block;width:80px;font-size: 18px;height: 28px;line-height: 20px;margin-bottom: 10px;vertical-align: middle;text-decoration:none;"

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        const container = document.querySelector('.user-card');

        const user = document.createElement("div");
        const image = document.createElement("img");
        image.src = "img_avatar.png";
        image.width = 250;
        image.height = 250;
        addParagraph(user, data.name, "");
        user.append(image);
        addParagraph(user, "Email: ", data.email);
        addParagraph(user, "Phone: ", data.phone);
        addParagraph(user, "City: ", data.address.city);
        addParagraph(user, "Street: ", data.address.street);
        addParagraph(user, "Suite: ", data.address.suite);
        addParagraph(user, "Company: ", data.company.name);


        var containerStyle = "margin-left:600px;";
        var userStyle = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);max-width: 250px;font-family: arial;";

        user.style.cssText = userStyle

        container.style.cssText = containerStyle;

        container.append(user);

        function addParagraph(user, header, content) {
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