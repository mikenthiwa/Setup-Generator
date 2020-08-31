import express from 'express';
import morgan from 'morgan';

export default () => {
    const app = express();
    app.use(    morgan('combined'));
    app.use("*", (req, res) => {
        return res.status(400).json({
            success: false,
            message: 'Not found'
        })
    });
    return app;
}