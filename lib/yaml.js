var yaml = require('yamljs');

module.exports = function toYAML(data) {
	return yaml.stringify(data, 4);
}
