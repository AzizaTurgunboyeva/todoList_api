import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv"; // ADD THIS
dotenv.config(); 
async function start() {
  try {
    const PORT = 3005;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: true, // Match your Vite frontend origin
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
