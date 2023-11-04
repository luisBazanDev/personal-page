export function resolveAuthor(
  author = {
    name: "Anonimo",
    tag: "@anonimus",
    img: "/img/profiles/anonimus.png",
    url: "",
  }
) {
  if (author === "default")
    author = {
      name: "Luis Bazán",
      tag: "@luisbazandev",
      img: "/img/profiles/luis-profile.jpg",
      url: "https://luis.bazan.pe",
    };
  return author;
}
