# One color for all

The whole website is tinted by the color set in `_data/meta.js`: <span style="color: var(--color);">**{{ meta.color }}**</span>, which is set as the custom property `--color`.

You can use this variable as a value for classical CSS properties like `color`,
`background-color` or `border-color`, to tint a large variety of elements like `<body>`, `<button>` or `<nav>`.

I want to have a look at some lesser-known properties that can make a difference. I am not going to look at SVG specific properties, and though I am going to mention some interesting ones that might not have much use cases, I generally want to focus on those that really come in handy.
