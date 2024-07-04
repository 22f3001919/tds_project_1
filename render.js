import { render, html } from "https://cdn.jsdelivr.net/npm/lit-html@3/+esm";

export const renderData = function (data, next) {
  // Get columns, excluding any column named link
  const columns = Object.keys(data[0]).filter((col) => col !== "link");
  render(
    html`
      <div class="t">
        <div class="r">${columns.map((col) => html`<div class="c">${col}</div>`)}</div>
        ${data.map(
          (row) => html`
            <div class="r">
              ${columns.map((col) =>
                row.link ? html`<div class="c"><a href="${row.link}.html">${row[col]}</a></div>` : html`<div class="c">${row[col]}</div>`,
              )}
            </div>
          `,
        )}
      </div>
      ${next ? html`<a href="${next}.html">Next page</a>` : ""}
    `,
    document.querySelector("#output"),
  );
};
