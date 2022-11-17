// CODE

module.export = {
	clean: function(string) {
		if (typeof text === 'string') {
			return string.replace(/`/g, '`' + String.fromCharCode(8203))
				.replace(/@/g, '@' + String.fromCharCode(8203));
		}
		else {
			return string;
		}
	}
}