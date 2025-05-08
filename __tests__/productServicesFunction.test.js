// Importing required packages
const request = require('supertest');
const express = require('express');
const app = express();

// Importing the function to be tested
const productServicesFunction = require('../product-service');

describe('productServicesFunction', () => {

    // Test case for getAllProducts
    test('should get all products', async () => {
        app.get('/api/products/', productServicesFunction);
        const response = await request(app).get('/api/products/');
        expect(response.status).toBe(200);
    });

    // Test case for deleteProduct
    test('should delete a product', async () => {
        const productId = 1;
        app.delete(`/api/products/${productId}`, productServicesFunction);
        const response = await request(app).delete(`/api/products/${productId}`);
        expect(response.status).toBe(200);
    });

    // Test case for updateProduct
    test('should update a product', async () => {
        const productId = 1;
        const productData = {
            title: 'Updated Product',
            description: 'Updating the existing product',
            price: '20.00'
        };
        app.put(`/api/products/${productId}`, productServicesFunction);
        const response = await request(app).put(`/api/products/${productId}`).send(productData);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Product');
        expect(response.body.description).toBe('Updating the existing product');
        expect(response.body.price).toBe('20.00');
    });

    // Test case for insertProduct
    test('should insert a product', async () => {
        const productData = {
            title: 'New product',
            description: 'Adding new product',
            price: '10.00'
        };
        app.post(`/api/products/`, productServicesFunction);
        const response = await request(app).post(`/api/products/`).send(productData);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('New product');
        expect(response.body.description).toBe('Adding new product');
        expect(response.body.price).toBe('10.00');
    });
});
