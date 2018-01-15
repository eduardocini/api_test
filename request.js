'use strict';

const Joi = require('joi');
const request = require('supertest');
const expect = require('chai').expect;
const joiAssert = require('joi-assert');

const {
  schemaFilmeValido
} = require('./schema');

describe('Teste Contrato API', function () {
  it('Validando response com joiAssert', function (done) {
    request('http://www.mocky.io/')
      .get('v2/5a5cb3872e00005e199f83db')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schemaFilmeValido);
        done(err);
      })
  });

  it('Validando response com Joi.validate', function (done) {
    request('http://www.mocky.io/')
      .get('v2/5a5cb3872e00005e199f83db')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        Joi.validate(res.body, schemaFilmeValido, {
          abortEarly: false
        }, (err, data) => {
          if (err) throw err;
        });
        done(err);
      })
  });

});