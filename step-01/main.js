// Create a class for the element
class Profile extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create divs
    const wrapper = document.createElement("figure");
    wrapper.setAttribute("class", "wrapper");

    const figcaption = document.createElement("figcaption");

    const name = document.createElement("div");
    name.setAttribute("class", "name");

    const title = document.createElement("div");
    title.setAttribute("class", "title");

    // Take attribute content and put it inside name/title divs
    name.textContent = this.getAttribute("name");
    title.textContent = this.getAttribute("title");

    // Insert name and title inside figcaption
    figcaption.appendChild(name);
    figcaption.appendChild(title);

    // Insert image
    let imgUrl;

    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const image = document.createElement("img");
    image.src = imgUrl;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap');

      body {
        font-family: 'Open Sans', sans-serif;
      }

      .wrapper {
        font-family: 'Open Sans', sans-serif;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        background-color: #f3f4f9;
      }

      img {
        width: 150px;
        height: auto;
      }

      figcaption {
        padding: 1rem;
      }
      
      .name {
        color: rgb(8, 145, 178);
        font-weight: 600;
        font-size: 20px;
      }
      
      .title {
        color: dimgray;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);

    shadow.appendChild(wrapper);
    wrapper.appendChild(image);
    wrapper.appendChild(figcaption);
  }
}

// Define the new element
customElements.define("we-profile", Profile);
