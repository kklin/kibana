const { Container, publicInternet, allowTraffic } = require('kelda');

function Kibana(es) {
  this.container = new Container('kibana', 'kibana:4', {
    command: [
      '--port', this.port.toString(),
      '--elasticsearch', es.uri(),
    ],
  });
  es.addClient(this.container);
  allowTraffic(publicInternet, this.container, this.port);
}

Kibana.prototype.deploy = function deploy(depl) {
  this.container.deploy(depl);
};

Kibana.prototype.port = 5601;

exports.Kibana = Kibana;
