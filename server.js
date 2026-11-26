
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const services = [
    {
        serviceId: 1,
        serviceName: "Amazon EC2",
        category: "IaaS",
        pricingModel: "Pay-as-you-go"
    },
    {
        serviceId: 2,
        serviceName: "AWS Lambda",
        category: "PaaS",
        pricingModel: "Pay-per-execution"
    },
    {
        serviceId: 3,
        serviceName: "Amazon S3",
        category: "IaaS",
        pricingModel: "Pay-per-storage"
    },
    {
        serviceId: 4,
        serviceName: "Google Cloud Run",
        category: "PaaS",
        pricingModel: "Pay-per-use"
    }
];

app.get('/api/services', (req, res) => {
    res.json(services);
});

app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Deepika J Prakash",
        environment: "Cloud PaaS"
    });
});

const PORT = process.env.PORT || 8080;

// Start a local server when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export the Express application for Vercel
module.exports = app;
