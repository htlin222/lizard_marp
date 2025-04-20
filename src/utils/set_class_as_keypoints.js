const cheerioWrapper = require("./cheerio-utils");

module.exports = cheerioWrapper.createPlugin(($, result) => {
	$("section").each(function () {
		const section = $(this);
		// Check if the section doesn't have the data-marpit-advanced-background='content' attribute
		if (section.attr('data-marpit-advanced-background') !== 'content') {
			section.addClass("keypoints");
		}
	});
});
