'use strict';

const { expect } = require('chai');
const sinon = require('sinon');

const logMeGently = require('../index');

describe('log-me-gently', function() {
  describe('#constructor', function() {
    it('should init state when level is passed', function() {
      const level = 'debug';
      const fixture = logMeGently({ level });

      expect(fixture.level).to.be.equal(level);
    });

    it('should init state when level is not passed', function() {
      const fixture = logMeGently({});

      expect(fixture.level).to.be.null;
    });

    it('should init state when no arguments are passed', function() {
      const fixture = logMeGently();

      expect(fixture.level).to.be.null;
    });
  });

  describe('#log', function() {
    beforeEach(function() {
      this.context = {
        log: {
          debug: sinon.stub(),
        },
      };
    });

    it('should do nothing when no arguments are passed', function () {
      const fixture = logMeGently({ level: 'debug' });

      expect(() => fixture.log())
        .to.not.throw();
    });

    it('should do nothing if level is not set', function () {
      const fixture = logMeGently();

      expect(() => fixture.log(this.context, 'message'))
        .to.not.throw();
    });

    it('should do nothing if there is no log in the context', function () {
      const fixture = logMeGently({ level: 'debug' });

      expect(() => fixture.log({}, 'message'))
        .to.not.throw();
    });

    it('should do nothing if there is no appropriate log method', function () {
      const fixture = logMeGently({ level: 'info' });

      expect(() => fixture.log(this.context, 'message'))
        .to.not.throw();
      sinon.assert.notCalled(this.context.log.debug);
    });

    it('should call appropriate log method when it exists', function () {
      const fixture = logMeGently({ level: 'debug' });
      const data = { data: 'some data' };
      const message = 'important message';

      fixture.log(this.context, data, message);

      sinon.assert.calledWithExactly(this.context.log.debug, data, message);
    });
  });
});
