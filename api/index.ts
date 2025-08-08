import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';

// Create Express app for Vercel
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
let server: any;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!server) {
    server = await registerRoutes(app);
  }
  
  return app(req, res);
}