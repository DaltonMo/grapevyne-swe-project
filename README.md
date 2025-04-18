# 🍇 Grapevyne

**Grapevyne** is a modern, full-stack social platform focused on short-form text and audio content — built with a powerful Java + React architecture. Inspired by the future of media and voice-driven interaction.

---

## 🔧 Tech Stack

| Layer    | Tech                                                                            |
| -------- | ------------------------------------------------------------------------------- |
| Frontend | [Next.js 14](https://nextjs.org/) + [Tailwind CSS v4](https://tailwindcss.com/) |
| Backend  | [Spring Boot 3](https://spring.io/projects/spring-boot) (Java 21)               |
| Database | [PostgreSQL](https://www.postgresql.org/)                                       |
| Build    | Maven                                                                           |
| Auth     | (Coming soon: JWT or OAuth2)                                                    |

---

## 📁 Project Structure

```
grapevyne-swe-project/
│
├── grapevyne-backend/       # Spring Boot backend API
├── grapevyne-frontend/      # Next.js frontend with Tailwind CSS
└── README.md
```

---

## 🚀 Getting Started

### Backend (Spring Boot)

```bash
cd grapevyne-backend
./mvnw spring-boot:run
```

Make sure you have PostgreSQL running locally and configured in `application.properties`.

### Frontend (Next.js + Tailwind)

```bash
cd grapevyne-frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 🛠 Features (In Progress)

- [x] Project scaffolding & local setup
- [ ] User authentication (register/login)
- [ ] Audio post support
- [ ] Trending dashboard with voice/text feeds

---

## 🧠 Dev Notes

- Frontend uses Tailwind CSS v4 (PostCSS-based)
- Backend uses Spring Data JPA with Hibernate and connects to PostgreSQL
- Mono-repo managed with Git, push from root

---

## 📬 Contact

For feature requests, issues, or ideas — feel free to open an issue or PR.

---

Made with ☕, 🎧, and lots of coffee by The Grapevyne Development Team
