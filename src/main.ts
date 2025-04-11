import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = 3005;
    const app = await NestFactory.create(AppModule);
      app.enableCors({
        methods: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true,
      });

    await app.listen(PORT);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
