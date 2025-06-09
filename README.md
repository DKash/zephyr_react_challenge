
# Zephyr React Challenge

This is a modular React application built for the **Zephyr Cloud challenge**, demonstrating real-world usage of **Module Federation** with **Webpack 5**, deploying to the edge with Zephyr for sub-second previews and CI/CD acceleration.

## ✨ Tech Stack

- React 18
- Webpack 5
- Module Federation
- TailwindCSS
- TypeScript
- Zephyr CLI
- Micro-Frontend Architecture

## 📂 Structure

This repo contains **two applications**:

| App          | Port     | Role                    |
|--------------|----------|-------------------------|
| `host-app`   | `3000`   | Host that loads remote  |
| `product-app`| `3001`   | Remote that exposes UI  |

Each app is independent and can be deployed individually.

## ▶️ Running Locally

Clone and install dependencies:

```bash
git clone https://github.com/DKash/zephyr_react_challenge.git
cd zephyr_react_challenge

# Start remote app
cd product-app
npm install
npm start
```

```bash
# In another terminal
cd host-app
npm install
npm start
```

Visit:

- `http://localhost:3000` → host with remote loaded
- `http://localhost:3001` → standalone remote app

## 🌍 Deployment with Zephyr

Zephyr allows deploying applications in **sub-seconds**, and keeps preview versions live forever.

Steps followed:

1. Installed CLI:
```bash
npx create-zephyr-apps@latest
```

2. Initialized and deployed both `host-app` and `product-app` separately using Zephyr CLI.

3. Got preview links from dashboard (listed below).

## 🌐 Preview Links

- Host App: [Host App Link](https://hostlink)
- Remote App: [Remote App Link](https://remotelink)

## 💬 Feedback

This challenge was valuable to demonstrate practical experience in scalable frontend architecture, CI/CD flow, and modern deployment pipelines.

## 👤 Author

- GitHub: [@DKash](https://github.com/DKash)
- LinkedIn: [Audry Martins](https://www.linkedin.com/in/audry-martins/)

Feel free to reach out!

---
