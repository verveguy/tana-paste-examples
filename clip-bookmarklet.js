javascript: (function () {
    const title = document.title;
    const url = window.location.href;
    let description = "";
    const metaTags = document.querySelectorAll("meta");
    for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i].name === "description") {
            description = metaTags[i].content;
            break;
        }
    }
    let data = `%%tana%%\n- ${title} #website\n  - Description:: ${description}\n  - Url:: ${url}`;

    let html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }

    if (html) {
        const clipping = html;
        data += `\n  - ${clipping}`;
    }

    navigator.clipboard.writeText(data).then(
        function () {
            console.log("Successfully copied data to clipboard");
        },
        function (err) {
            console.error("Error copying data to clipboard: ", err);
        }
    );
})();