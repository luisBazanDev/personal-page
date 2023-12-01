import React from "react";

function Tech({ tech }) {
  const techs = {
    js: "/img/logos/JavaScript.png",
    java: "/img/logos/Java.svg",
    css: "/img/logos/CSS3.png",
    html: "/img/logos/HTML5.png",
    tailwind: "/img/logos/TailwindCSS.png",
    mysql: "/img/logos/MySQL.png",
    python: "/img/logos/python.png",
  };

  return (
    <div class="w-7 aspect-[1/1]">
      <img class="rounded-full w-full h-full" src={techs[tech]} alt={tech} />
    </div>
  );
}

function Proyecto({ title, description, content, techs, tag, date, img }) {
  const techComponents = [];
  techs.forEach((tech) => {
    techComponents.push(<Tech tech={tech} />);
  });

  return (
    <div class="flex flex-col border-gray-800 border-2 rounded-md bg-slate-900">
      <div class="h-auto">
        <img
          class="aspect-[2/1] w-full h-full object-cover"
          src={img}
          alt={img}
        />
      </div>
      <div class="flex flex-col w-full justify-between p-2 gap-4">
        <div class="flex flex-col h-full justify-between">
          <div class="text-xl font-bold">{title}</div>
          <div class="text-gray-200 text-justify">{description}</div>
          <div class="text-gray-400 text-justify">{content}</div>
        </div>
        <div class="flex justify-between items-end gap-2 w-full">
          <div className="flex gap-1">{techComponents}</div>
          <div class="flex p-1 bg-indigo-700 border-2 border-indigo-950 rounded-md justify-center items-center opacity-95">
            {tag}
          </div>
          <div class="flex px-2 py-1 bg-zinc-900 rounded-md">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
