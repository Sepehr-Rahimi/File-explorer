const data = {
  isRoot : true,
  id: 0,
  name: "Root",
  isFolder: true,
  children: [
    {
      id: 0,
      name: "Session 1",
      isFolder: true,
      children: [
        { id: 0, name: "index.html", isFolder: false },
        { id: 1, name: "intro.txt", isFolder: false },
        {
          id: 2,
          name: "project",
          isFolder: true,
          children: [
            { id: 0, name: "alaki.css", isFolder: false },
            {
              id: 1,
              name: "intro",
              isFolder: true,
              children: [{ id: 0, name: "alaki.css", isFolder: false }],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Session 2",
      isFolder: true,
      children: [
        { id: 0, name: "test.txt", isFolder: false },
        { id: 1, name: "test.js", isFolder: false },
      ],
    },
    {
      id: 3,
      name: "Session 3",
      isFolder: true,
      children: [{ id: 0, name: "styles.css", isFolder: false }],
    },
  ],
};

export default data;
