const fs = require('fs');
const nock = require('nock');
const path = require('path');

function Recorder (mockDirectory) {
  if (!this instanceof Recorder) {
    return new Recorder(mockDirectory);
  }
  this.mockDirectory = mockDirectory;
  this.filePath = null;
}

Recorder.prototype.record = function (filename) {
  filename += '.js';
  this.filePath = path.join('test', this.mockDirectory, filename);
  try {
    fs.statSync(this.filePath);
    nock.load(this.filePath);
    this.hasFixtures = true;
  } catch (e) {
    this.hasFixtures = false;
    nock.recorder.rec({
      output_objects: true
    });
  }
}

Recorder.prototype.stop = function (done) {
  if (!this.hasFixtures) {
    this.hasFixtures = true;
    var record = nock.recorder.play();
    var text = JSON.stringify(record);
    nock.recorder.clear();
    nock.restore();
    return fs.writeFile(this.filePath, text, done);
  }
  this.hasFixtures = false;
  return done();
}

module.exports = function initialize (path) {
  return new Recorder(path);
}
