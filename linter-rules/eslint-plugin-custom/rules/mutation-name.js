module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Rule mutation name",
    },
    messages: {
      nameError:
        "Не правильное название функции '{{ name }}'. Название должно начинаться с 'mutate'",
    },
  },
  create: (context) => {
    return {
      Identifier(node) {
        if (node.parent?.type === "Property") {
          const nodeName = node.name;

          const isMatch = /^mutate/.test(nodeName);

          if (!isMatch) {
            context.report({
              node,
              messageId: "nameError",
              data: {
                name: nodeName,
              },
            });
          }
        }
      },
    };
  },
};
