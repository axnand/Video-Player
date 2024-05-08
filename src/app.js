import express from 'express'

const app = express();
try {
    app.on("error", (error)=>{
        console.log("ERRR:", error);
        throw error
    });
} catch (error) {
    console.log("error while connecting to the app", error);
}

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export {app};