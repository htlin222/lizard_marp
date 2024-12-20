const cheerioWrapper = require("./cheerio-utils");

// 使用 createPlugin 來建立插件
module.exports = cheerioWrapper.createPlugin(($, result) => {
    const allH1s = $("h1").slice(1);
    if (allH1s.length === 0) return;

    let lastSeenH1Index = -1;

    $("section").each((sectionIndex, section) => {
        if ($(section).attr("id") === "1") return;
        if ($(section).attr("data-marpit-advanced-background") === "content") return;
        if ($(section).attr("data-marpit-advanced-background") === "pseudo") return;

        const currentH1 = $(section).find("h1").first();
        if (currentH1.length > 0) {
            lastSeenH1Index = allH1s
                .toArray()
                .findIndex((h1) => $(h1).text() === currentH1.text());
        }

        const menuItems = allH1s
            .map((i) => {
                const h1 = allH1s[i];
                const text = $(h1).text();
                const href =
                    $(h1).attr("id") ||
                    `#/${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                const dataSm = $(h1).attr("data-sm") || text;

                let className;
                if (i < lastSeenH1Index) {
                    className = "done";
                } else if (i === lastSeenH1Index) {
                    className = "active";
                } else {
                    className = "notyet";
                }

                return `<li class="${className}">
                    <a href="#${href}" data-sm="${dataSm}">${dataSm}</a>
                </li>`;
            })
            .get()
            .join("");

        const menuHtml = `
            <div class="menubar top ready" id="menubartop">
                <ul class="menu" data-simplemenu-auto="">
                    ${menuItems}
                </ul>
            </div>`;

        $(section).prepend(menuHtml);
    });
});
