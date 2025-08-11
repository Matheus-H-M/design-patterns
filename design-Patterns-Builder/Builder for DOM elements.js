class ElementBuilder{
    constructor(tag){ this.el = document.createElement(tag);}
    setText(text) {this.el.textContent = text; return this;}
    setId(id){this.el.id = id; return this;}
    build() { return this.el }
}

const el = new ElementBuilder("div").setText("Oi!").setId("msg").build();
document.body.appendChild(el);