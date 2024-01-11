// baseUrl.ts
const baseUrl =
    process.env.DOMAIN_ENV === "development"
        ? "http://localhost:3000"
        : "https://my-own-lib-app.vercel.app";

export default baseUrl;