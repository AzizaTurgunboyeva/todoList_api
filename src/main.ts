import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = 3005;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: "http://localhost:5173", // Match your Vite frontend origin
      methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    });

    await app.listen(PORT);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
