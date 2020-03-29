const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const query = await graphql(`
  {
    allEducationJson {
      edges {
        node {
          slug
        }
      }
    }
  }
  `);

  query.data.allEducationJson.edges.forEach(element => {
    const { node } = element;

    actions.createPage({
      path: node.slug,
      component: path.resolve("./src/templates/education.js"),
      context: {
        slug: node.slug,
      }
    });
  });
}
