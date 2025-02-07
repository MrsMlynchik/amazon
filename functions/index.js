const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Qo6q1FJ6IUFWGFmDxv7UkpDYISkPXBLd4eaBnO1JfT4ZCP7St4ye8T5TLsn30GgScYtMzZ2Pr91vTRoHA4OmPpQ00aE96ss1W");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
    try {
        const total = req.query.total;
        console.log("💰 Payment request received for amount:", total);

        if (!total) {
            return res.status(400).send({ error: "Total amount is required" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });

        res.status(201).send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("🔥 Error processing payment:", error);
        res.status(500).send({ error: "Payment processing failed" });
    }
});

exports.api = functions.https.onRequest(app);