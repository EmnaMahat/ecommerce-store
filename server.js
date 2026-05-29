const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Ecommerce is running 🚀');
});

// Routes
app.use("/api/products", productRoutes);

// Start server immediately (Render requirement)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

module.exports = app;
