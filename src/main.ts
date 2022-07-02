import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Validation} from "./pipes/validation";

const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('/api')

    const config = new DocumentBuilder()
        .setTitle('NEST lesson')
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .addTag('Bebra')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    // app.useGlobalGuards()
    app.useGlobalPipes(new Validation())

    await app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
}

start()