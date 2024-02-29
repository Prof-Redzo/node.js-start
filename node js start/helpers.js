
export const generateGuidLocally = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
//default export
//module.exports = generateGuidLocally;

//named export
//module.exports = { generateGuidLocally };

//multiple named exports
// 1 default export