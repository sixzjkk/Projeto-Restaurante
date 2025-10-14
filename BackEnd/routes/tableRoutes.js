import express from 'express';
import TableController from '../controllers/TableController';

const tableRoutes = express.Router();

tableRoutes.post('/new', TableController.registerTable);