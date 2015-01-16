/**
 * Replaces shorthand `::` with longhand prototype access.
 *
 * @param {Object} node
 * @param {MagicString} patcher
 */
function patchPrototypeAccess(node, patcher) {
  if (node.type === 'ProtoMemberAccessOp') {
    const opStart = node.expression.range[1];
    patcher.replace(opStart, opStart + '::'.length, '.prototype.');
  }
}
exports.patchPrototypeAccess = patchPrototypeAccess;