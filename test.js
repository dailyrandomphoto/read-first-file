'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;
const readfirst = require('read-first-file');

describe('read-first-file', () => {
  it('should return first file', (done) => {
    readfirst(__dirname, {
      onFileContent: (filename, content) => {
        expect(filename).to.be.eql('.editorconfig');
        expect(content).to.be.a('string');
        done();
      }
    });
  });

  it('should apply the compare function', (done) => {
    readfirst(__dirname, {
      compareFn: (a, b) => b.localeCompare(a),
      onFileContent: (filename, content) => {
        expect(filename).to.be.eql('test.js');
        expect(content).to.be.a('string');
        done();
      }
    });
  });

  it('should apply the filter function', (done) => {
    readfirst(__dirname, {
      filterFn: (x) => /\.js$/.test(x),
      onFileContent: (filename, content) => {
        expect(filename).to.be.eql('index.js');
        expect(content).to.be.a('string');
        done();
      }
    });
  });

  it('should call the onError function when catch an error', (done) => {
    readfirst(__dirname + 'xxx', {
      onFileContent: () => {
        expect.fail('should not come to here');
      },
      onError: (error) => {
        expect(error.name).to.be.eql('Error');
        done();
      }
    });
  });

  it('should not read the file when readContents is false', (done) => {
    readfirst(__dirname, {
      filterFn: (x) => /\.js$/.test(x),
      readContents: false,
      onFileContent: (filename, content) => {
        expect(filename).to.be.eql('index.js');
        expect(content).to.be.eql(undefined);
        done();
      }
    });
  });
});
