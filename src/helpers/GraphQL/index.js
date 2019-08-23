/**
 * Format GraphQL data
 * @param data
 * @returns {array}
 */
const FORMAT_GRAPH_DATA = data => data.edges.map(dataPoint => dataPoint.node);

export default FORMAT_GRAPH_DATA;
