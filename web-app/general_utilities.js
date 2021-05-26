// General purpose useful functions.

const Utilities = Object.create(null);

// Code is written in a functional style
// Doesn't *do* anything, but provides functions for other to use.
// General in context.

Utilities.map = (func) => (array) => array.map(func);

export default Object.freeze(Utilities);
