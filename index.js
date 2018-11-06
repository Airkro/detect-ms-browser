var io = navigator.userAgent.match(/\s(Edge\/|MSIE\s|rv:)([0-9]*).\d*/);

module.export = {
  isEdge: io && io[1] === "Edge/",
  isIE: io && io[1] !== "Edge/",
  isMs: Boolean(io),
  version: io ? parseInt(io[2] || 0) : 0
};
