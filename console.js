"use strict";
function sleep(s)
{
    return new Promise((resolve) => setTimeout(resolve, s));
}

async function main()
{
    globalThis.pyodide = await loadPyodide();
    let namespace = pyodide.globals.get("dict")();

    pyodide.runPython(
        `
        import sys
        from pyodide import to_js
        `,
        { globals: namespace }
    );
}

window.console_ready = main();
