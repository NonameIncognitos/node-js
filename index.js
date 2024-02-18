require('dotenv').config(); // Первым делом загрузите переменные среды

const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParse = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');

const { MONGODB_PASSWORD } = process.env;
const app = new Application();

app.use(jsonParse);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Asan:${MONGODB_PASSWORD}@cluster0.kj4itxq.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
