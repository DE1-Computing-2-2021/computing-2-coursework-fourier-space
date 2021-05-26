const UI = Object.create(null);

// Code style is more flexible. Knows we're in a browser
// So can access document etc.
// Doesn't *do* anything, but provides functions for other to use.

UI.el = (id) => document.getElementById(id);

export default Object.freeze(UI);
