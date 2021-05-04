import express from "express";

const app = express();

const PORT = 9800;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);