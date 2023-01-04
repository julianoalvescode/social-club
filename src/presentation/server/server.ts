import { createServer } from "miragejs";

export const server = createServer({
  routes() {
    this.get("/api/reminders", () => ({
      reminders: [],
    }));
  },
});

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/post", () => {
        return [
          {
            id: 1,
            author: {
              avatarUrl: "https://i.pravatar.cc/150?img=1",
              name: "John Doe",
              role: "Admin",
            },
            content: "<h1>Olá</h1><hr><p>Meu rich text</p>",
            publishedAt: new Date("2022-08-27T08:24:37.642Z"),
            comments: [
              {
                id: 1,
                author: {
                  avatarUrl: "https://i.pravatar.cc/150?img=8",
                  name: "Jorge Campos",
                  role: "Admin",
                },
                content:
                  "Nossa que aplicação incriível, parabéns pelo trabalho",
                publishedAt: new Date("2022-12-27T08:24:37.642Z"),
              },
            ],
          },
          {
            id: 2,
            author: {
              avatarUrl: "https://i.pravatar.cc/150?img=3",
              name: "José da Silva",
              role: "Admin",
            },
            content:
              "ultricies ultricies, nunc nisl luctus nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl nec ultricies ultricies, nunc nisl luctus nisl, eget aliquam nisl nisl eu nunc.",
            publishedAt: new Date("2022-08-27T08:24:37.642Z"),
            comments: [
              {
                id: 1,
                author: {
                  avatarUrl: "https://i.pravatar.cc/150?img=8",
                  name: "Silvana da Silva",
                  role: "Admin",
                },
                content:
                  "Nossa que aplicação incriível, parabéns pelo trabalho",
                publishedAt: new Date("2022-12-27T08:24:37.642Z"),
              },
            ],
          },
          {
            id: 3,
            author: {
              avatarUrl: "https://i.pravatar.cc/150?img=2",
              name: "Carlos da Silva",
              role: "Admin",
            },
            content:
              "ultricies ultricies, nunc nisl luctus nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl nec ultricies ultricies, nunc nisl luctus nisl, eget aliquam nisl nisl eu nunc.",
            publishedAt: new Date("2022-08-27T08:24:37.642Z"),
            comments: [
              {
                id: 1,
                author: {
                  avatarUrl: "https://i.pravatar.cc/150?img=8",
                  name: "Silvana da Silva",
                  role: "Admin",
                },
                content:
                  "Nossa que aplicação incriível, parabéns pelo trabalho",
                publishedAt: new Date("2022-12-27T08:24:37.642Z"),
              },
            ],
          },
        ];
      });
    },
  });

  return server;
}
