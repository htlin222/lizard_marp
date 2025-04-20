// const addDynamicHeader = require("./utils/header");
const applyPlugins = require("./plugins");
const applyLineNumber = require("./utils/lineNumber");
const applyStrongTb = require("./utils/strong_tb");
const addClassPerRule = require("./utils/add_class_per_rule");
const setClassAsKeypoints = require("./utils/set_class_as_keypoints");
// const applyDate = require("./utils/date");
const applyLayout = require("./utils/layout");
const applyDiagram = require("./utils/diagram");
const simpleMenu = require("./utils/simplemenu");
const applyH2text = require("./utils/addh2text.js");
const nexth3 = require("./utils/nexth3.js");
// const copyCode = require("./utils/copy_code");
const agenda = require("./utils/agenda");
const cc = require("./utils/add_cc");
const absImage = require("./utils/absImage");
const autoplayVideo = require("./utils/autoplayVideo");
const urlCard = require("./utils/urlCard");
// FIX: const addZoomFeature = require("./utils/zoom")
// FIX: const roman = require("./utils/roman")

module.exports = ({ marp }) => {
	const instance = marp;
	applyLineNumber(instance);
	// addDynamicHeader(instance);
	applyLayout(instance);
	addClassPerRule(instance);
	setClassAsKeypoints(instance);
	applyStrongTb(instance);
	applyH2text(instance);
	// applyDate(instance);
	// nexth3(instance);
	agenda(instance);
	applyDiagram(instance);
	simpleMenu(instance);
	// copyCode(instance);
	cc(instance);
	absImage(instance);
	autoplayVideo(instance);
	urlCard(instance);
	// addZoomFeature(instance)
	// roman(instance)

	return applyPlugins(instance);
};
