const readTimeEstimate = require('read-time-estimate/dist/read-time-estimate');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal && node.internal.content) {
    createNodeField({
      name: 'readTimeEstimate',
      node,
      value: readTimeEstimate(node.internal.content),
    });
  }
};
