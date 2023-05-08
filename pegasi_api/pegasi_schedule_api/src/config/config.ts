import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    external_services: {
        st: {
            ST_BASE_URL: process.env.ST_BASE_URL
        },
        HBV: {
            HBV_BASE_URL: process.env.HBV_BASE_URL
        }
    }
};

export default config;